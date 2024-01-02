const nodemailer = require('nodemailer');

async function sendMail(){
}

const mailer = async (req,res)=>{
    const {name,email,message}=req.body;
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: process.env.SEMAIL,
            pass: process.env.PASSWORD
        }
    })
    const mailDetails = {
        from: process.env.SEMAIL,
        to: email,
        subject: 'Responce From Satyam',
        text: `Hey ${name.trim().split(' ')[0]},\n Thanks For Shooting your valuable message to me. I'll reply you as soon as possible.`
    };
    try{
        transporter.sendMail(mailDetails);
    }
    catch{
        res.status(500).send({success:false});
    }
    const mailDetailsForMe = {
        from: email,
        to: process.env.EMAIL,
        subject: `${name.trim().split(' ')[0]} Shoot a message From Portfolio`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
    try{
        transporter.sendMail(mailDetailsForMe);
    }
    catch{
        res.status(500).send({success:false});
    }
    res.status(200).send({success:true});
}

module.exports = mailer;