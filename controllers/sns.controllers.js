const AWS = require("aws-sdk");
const { environment } = require("../config/environment");

AWS.config.update({
  region: environment.sns.region,
  accessKeyId: environment.sns.accessKey,
  secretAccessKey: environment.sns.secretKey,
});

const sns = new AWS.SNS();

exports.publish = async (req, res, next) => {
  const Params = {
    Message: "มีมีมใหม่มาแล้ว รีบไปดูความตลกเร็ว 5555",
    Subject: "มีมใหม่มาแล้ว",
    TopicArn: environment.sns.topicArn,
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
    TopicArn: environment.sns.topicArn,
    Endpoint: req.body.email,
  };
  sns.subscribe(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: err });
    } else {
      res.status(200).json({ success: true, data });
    }
  });
};
