const dotenv = require("dotenv");

dotenv.config();

exports.environment = {
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/mememorize",
  port: process.env.PORT || 3000,
  s3: {
    bucketName: process.env.S3_BUCKET_NAME,
    region: process.env.S3_BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  cloudfront: process.env.CLOUDFRONT_URL,
};
