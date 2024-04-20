const S3 = require("aws-sdk/clients/s3");
const env = require("../config/environment");
const Meme = require("../models/memes.model");
const bucketName = env.environment.s3.bucketName;
const region = env.environment.s3.region;
const accessKeyId = env.environment.s3.accessKeyId;
const secretAccessKey = env.environment.s3.secretAccessKey;
const cloudfront = env.environment.cloudfront;

const s3Client = new S3({
  accessKeyId,
  secretAccessKey,
  region,
});

exports.uploadImg = async (req, res) => {
  if (!req.file?.buffer) {
    return res.status(400).json({ success: false, error: "No file uploaded" });
  }
  const userId = req.params.id;
  const image = req.file.buffer;
  const name = req.body.name;
  const description = req.body.description;

  let imageName;
  let key;

  const generateImageName = () => {
    return Math.floor(Math.random() * 1000000).toString();
  };

  const uploadImage = async () => {
    key = `${userId}/${imageName}`;
    const uploadParams = {
      Bucket: bucketName,
      Body: image,
      Key: key,
      ContentType: "image/jpeg, image/png, image/jpg",
    };
    try {
      await s3Client.upload(uploadParams).promise();
      const newMeme = await Meme.create({
        name,
        url: cloudfront + key,
        description,
      });
      return res.status(201).json({
        success: true,
        message: "Image uploaded successfully",
        data: newMeme,
      });
    } catch (uploadError) {
      console.log(uploadError);
      return res
        .status(500)
        .json({ success: false, error: "Failed to upload image" });
    }
  };

  const checkKeyExists = async () => {
    const params = {
      Bucket: bucketName,
      Key: key,
    };
    try {
      await s3Client.headObject(params).promise();
      return true;
    } catch (error) {
      if (error.code === "NotFound") {
        return false;
      } else {
        return res
          .status(500)
          .json({ success: false, error: "Failed to check image existence" });
      }
    }
  };

  do {
    imageName = generateImageName();
    key = `${userId}/${imageName}`;
  } while (await checkKeyExists());

  await uploadImage();
};
