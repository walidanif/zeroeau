const nodemailer = require("nodemailer");
const path = require("path");

// 1. Configuration SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "walidanif3@gmail.com",
    pass: ""
  },
  connectionTimeout: 20000,
  greetingTimeout: 20000,
  socketTimeout: 20000,
});

// 2. Liste des clients
const clients = [
  "walidanif789456@gmail.com",
];

// 3. Template HTML
const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<style>
  /* CSS Reset & Dark Mode Fixes */
  body { margin: 0; padding: 0; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  img { border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
  
  .force-bg-blue {
    background-color: #1b263b !important;
    background-image: linear-gradient(#1b263b, #1b263b) !important;
    color: #ffffff !important;
  }
  .force-text-yellow {
    color: #f1c40f !important;
    -webkit-text-fill-color: #f1c40f !important;
  }
</style>
</head>

<body style="margin: 0; padding: 0; background-color: #1b263b; background-image: linear-gradient(#1b263b, #1b263b);">
  <center>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #1b263b; background-image: linear-gradient(#1b263b, #1b263b); margin: 0 auto;">
      
      <tr>
        <td align="center" style="padding: 40px 20px 20px 20px;">
          <div style="
            display: inline-block;
            padding: 10px; 
            border: 3px solid #f1c40f; 
            border-radius: 12px; 
            background-color: #1b263b;
            box-shadow: 0 0 12px rgba(241, 196, 15, 0.5); 
          ">
            <img src="cid:logo_zero_eau" alt="Zero Eau" style="width: 180px; height: auto; display: block;" />
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 20px 40px; font-family: Helvetica, Arial, sans-serif;">
          
          <h2 class="force-text-yellow" style="color: #f1c40f !important; margin: 0 0 20px 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; border-bottom: 1px solid #f1c40f; display: inline-block; padding-bottom: 10px;">
            Lavage auto écologique
          </h2>
          
          <p style="color: #ffffff !important; font-size: 16px; line-height: 1.6; margin: 20px 0 20px 0;">
            Bonjour, <br><br>
            Plus besoin de vous déplacer ! Nous venons laver votre voiture chez vous ou au bureau avec notre technique <b>sans eau</b>.
          </p>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0 40px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1c40f; background-image: linear-gradient(#f1c40f, #f1c40f); border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
            <tr>
              <td align="center" style="padding: 25px;">
                <p style="margin: 0; font-size: 20px; font-weight: 600; color: #1b263b !important;">
                  Offre Spéciale : À partir de <br>
                  <span style="color: #1b263b !important; font-size: 40px; font-weight: 900;">60DH</span>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 40px;">
          <a href="https://wa.me/212604203076" style="color: #f1c40f !important; border: 2px solid #f1c40f; padding: 16px 40px; text-decoration: none; font-weight: bold; border-radius: 50px; font-size: 18px; display: inline-block; transition: 0.3s;">
            Réserver par WhatsApp 
          </a>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 20px; border-top: 1px solid #f1c40f; color: #f1c40f; font-family: sans-serif; font-size: 12px;">
          <p style="margin: 5px 0; color: #f1c40f !important;"><strong>Zero Eau</strong> • Casablanca - Mohammedia - Bouskoura</p>
        </td>
      </tr>

    </table>
  </center>
</body>
</html>
`;

// 4. Options
const mailOptions = {
  from: '"Zero Eau" <walidanif3@gmail.com>',
  bcc: clients, 
  subject: "✨ Lavage auto à domicile – À partir de 60DH",
  html: htmlContent,
  attachments: [
    {
      filename: 'logo.png',        
      path: './logo.png',          
      cid: 'logo_zero_eau'         
    }
  ]
};

// 5. Envoi
console.log("🚀 Envoi en cours...");

transporter.verify(function (error, success) {
  if (error) {
    console.log("⚠️ Erreur de connexion :");
    console.log(error);
  } else {
    console.log("✅ Serveur prêt. Envoi du message...");
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("❌ Erreur d'envoi :", error);
      } else {
        console.log("✅ Emails envoyés avec succès !");
        console.log("ID Message :", info.messageId);
      }
    });
  }
});