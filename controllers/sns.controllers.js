const AWS = require("aws-sdk");
const dotenv = require("dotenv");

dotenv.config({ path: "config/.env" });

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const sns = new AWS.SNS();

exports.publish = async (req, res, next) => {
  const Params = {
    Message: "มีมีมใหม่มาแล้ว รีบไปดูความตลกเร็ว 5555",
    Subject: "มีมใหม่มาแล้ว",
    TopicArn: process.env.AWS_SNS_TOPIC_ARN,
  };
  sns.publish(Params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: err });
    } else {
      res.status(200).json({ success: true, data });
    }
  });
};

exports.subscribe = async (req, res, next) => {
  const params = {
    Protocol: "email",
    TopicArn: process.env.AWS_SNS_TOPIC_ARN,
    Endpoint: req.body.email,
  };
  console.log(params);
  console.log(req.body.email);
  console.log(process.env.AWS_REGION);
  sns.subscribe(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: err });
    } else {
      res.status(200).json({ success: true, data });
    }
  });
};
