const dotenv = require("dotenv");

dotenv.config();

exports.environment = {
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/mememorize",
  port: process.env.PORT || 3000,
  s3: {
    bucketName: process.env.S3_BUCKET_NAME,
    region: process.env.S3_BUCKET_REGION,
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
  },
  cloudfront: process.env.CLOUDFRONT_URL,
  sns: {
    region: process.env.AWS_SNS_REGION,
    accessKey: process.env.AWS_SNS_ACCESS_KEY,
    secretKey: process.env.AWS_SNS_SECRET_KEY,
    topicArn: process.env.AWS_SNS_TOPIC_ARN,
  },
};
