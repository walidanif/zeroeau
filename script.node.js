const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "walidanif3@gmail.com", // sender
    pass: "WALID2001@"      // app password
  }
});

const clients = [
  "walidanif@gmail.com",
  "walidanif789456@gmail.com"
];

const mailOptions = {
  from: '"Zero Eau" <walidanif3@gmail.com>',
  to: clients.join(","),
  subject: "Lavage auto sans eau – à partir de 60DH",
  html: `
    <h2>🚗 Zero Eau</h2>
    <p>Lavage auto sans eau chez vous.</p>
    <p><b>À partir de 60DH</b></p>
    <a href="https://wa.me/212604203076">Réserver sur WhatsApp</a>
  `
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Erreur ❌:", error);
  }
  console.log("Emails envoyés ✅:", info.response);
});
