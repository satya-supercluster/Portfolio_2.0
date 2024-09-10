const nodemailer = require("nodemailer");

const mailer = async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    secureConnection:false,
    auth: {
      user: `${process.env.SEMAIL}`,
      pass: `${process.env.PASSWORD}`,
    },
    tls:{
      rejectUnauthorized:true
    }
  });
  const mailDetails = {
    from: `${process.env.SEMAIL}`,
    to: email,
    subject: "Responce From Satyam",
    text: `Hey ${
      name.trim().split(" ")[0]
    } Thanks For Shooting your valuable message to me. I'll reply you as soon as possible.`,
  };
  try {
    transporter.sendMail(mailDetails);
  } catch {
    res.status(500).send({ success: false });
  }
  const mailDetailsForMe = {
    from: `${process.env.SEMAIL}`,
    to: `${process.env.SEMAIL}`,
    subject: `${name.trim().split(" ")[0]} Shoot a message From Portfolio`,
    text: `Name: ${name} \n Email: ${email} \n Message: ${message}`,
  };
  try {
    transporter.sendMail(mailDetailsForMe);
  } catch {
    res.status(500).json({ success: false });
  }
  res.status(200).json({ success: true });
};

module.exports = mailer;
