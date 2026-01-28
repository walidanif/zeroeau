const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "walidanif3@gmail.com",
    pass: "" 
  }
});

const clients = [
  "lafhailkenza37@gmail.com",
  "walidanif789456@gmail.com"
];

const mailOptions = {
  from: '"Zero Eau" <walidanif3@gmail.com>',
  to: clients.join(","),
  subject: "Lavage auto sans eau – à partir de 60DH",
  html: `
    <h2>Zero Eau</h2>
    <p>TEST TEST</p>
    <p><b>TEST TEST</b></p>
  `
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Erreur ❌", error);
  } else {
    console.log("Emails envoyés ✅", info.response);
  }
});
