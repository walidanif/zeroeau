const nodemailer = require("nodemailer");
const path = require("path");

// 1. CONFIGURATION SMTP (Optimized for Gmail)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: "walidanif3@gmail.com",
    pass: "pank hsbt npug ucnv" // App Password
  },
  // Zdna hado bach l-connexion t-kon stable o may-konch timeout
  connectionTimeout: 10000, 
  greetingTimeout: 10000,
  socketTimeout: 10000,
  pool: true, // Bach i-sift bchwiya bchwiya
  maxConnections: 3
});

// 2. LISTE DES CLIENTS
const clients = [
  "walidanif2@gmail.com",
  "walidanif3@gmail.com",
  // Zid l-emails l-khrine hna...
];

// 3. TEMPLATE HTML (Fixed & Cleaned)
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<style>
  /* Fix for Dark Mode Gmail */
  @media (prefers-color-scheme: dark) {
    .content-table { background-color: #1b263b !important; }
    .text-white { color: #ffffff !important; }
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #1b263b;">

  <div style="display:none;font-size:1px;color:#1b263b;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    Ne vous déplacez plus ! Lavage auto professionnel à domicile à partir de 60DH. Réservez maintenant 🚗✨
  </div>

  <center>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="content-table" style="max-width: 600px; background-color: #1b263b; font-family: Helvetica, Arial, sans-serif;">
      
      <tr>
        <td align="center" style="padding: 30px 20px 10px 20px;">
          <img src="cid:logo_zero_eau" alt="Zero Eau" style="width: 160px; height: auto; display: block; border:0;" />
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 10px 35px 20px 35px; color: #ffffff;">
          <h2 style="color: #f1c40f !important; margin: 0 0 10px 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">
            Lavage auto écologique
          </h2>
          <p style="color: #ffffff !important; font-size: 16px; line-height: 1.5; margin: 0;">
            Bonjour, <br>
            Plus besoin de vous déplacer ! Nous venons chez vous ou au bureau avec notre technique <b style="color: #f1c40f !important;">SANS EAU</b>.
          </p>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0 20px 30px 20px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="center" width="33%" style="color: #ffffff; font-size: 13px;">
                        <img src="https://img.icons8.com/ios-filled/50/f1c40f/clock--v1.png" width="35" style="display:block; margin-bottom:8px;">
                        <strong>Rapide</strong>
                    </td>
                    <td align="center" width="33%" style="color: #ffffff; font-size: 13px;">
                        <img src="https://img.icons8.com/ios-filled/50/f1c40f/leaf.png" width="35" style="display:block; margin-bottom:8px;">
                        <strong>Écologique</strong>
                    </td>
                    <td align="center" width="33%" style="color: #ffffff; font-size: 13px;">
                        <img src="https://img.icons8.com/ios-filled/50/f1c40f/guarantee.png" width="35" style="display:block; margin-bottom:8px;">
                        <strong>Qualité</strong>
                    </td>
                </tr>
            </table>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0 40px;">
          <a href="https://wa.me/212604203076" style="text-decoration: none; display: block;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1c40f; border-radius: 12px;">
              <tr>
                <td align="center" style="padding: 25px;">
                  <p style="margin: 0; font-size: 17px; font-weight: 700; color: #1b263b !important; text-transform: uppercase;">
                    Lavage à Domicile à partir de <br>
                    <span style="color: #1b263b !important; font-size: 46px; font-weight: 900; line-height: 1;">60DH</span>
                  </p>
                </td>
              </tr>
            </table>
          </a>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 35px;">
          <a href="https://wa.me/212604203076" style="color: #f1c40f !important; border: 2px solid #f1c40f; padding: 15px 35px; text-decoration: none; font-weight: bold; border-radius: 50px; font-size: 17px; display: inline-block;">
            Réserver par WhatsApp 📲
          </a>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0 40px;">
            <div style="height: 1px; background-color: #f1c40f; opacity: 0.3; width: 100%;"></div>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 30px 0 10px 0;">
            <p style="color: #ffffff; font-size: 12px; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 1px;">Suivez-nous sur</p>
            <table border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding: 0 10px;">
                  <a href="https://www.facebook.com/zeroeauwash"><img src="https://img.icons8.com/ios-filled/50/f1c40f/facebook-new.png" width="30" height="30"></a>
                </td>
                <td style="padding: 0 10px;">
                  <a href="https://www.instagram.com/zeroeau.wash/"><img src="https://img.icons8.com/ios-filled/50/f1c40f/instagram-new.png" width="30" height="30"></a>
                </td>
                <td style="padding: 0 10px;">
                  <a href="https://www.tiktok.com/@zeroeau0"><img src="https://img.icons8.com/ios-filled/50/f1c40f/tiktok.png" width="30" height="30"></a>
                </td>
              </tr>
            </table>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 30px 20px; color: #ffffff; font-size: 11px; line-height: 1.6;">
          <p style="margin: 5px 0; color: #f1c40f;"><strong>Zero Eau</strong> • Casablanca - Mohammedia - Bouskoura - Dar Bouazza</p>
          <p style="margin: 5px 0;">
             Contactez-nous: <a href="mailto:contact@zeroeau.ma" style="color: #f1c40f; text-decoration: none;">contact@zeroeau.ma</a>
          </p>
          <p style="margin: 20px 0 0 0; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 15px; font-size: 10px; opacity: 0.7;">
            Vous recevez cet email car vous êtes client de Zero Eau. <br>
            <a href="#" style="color: #f1c40f;">Se désabonner</a>
          </p>
        </td>
      </tr>

    </table>
  </center>
</body>
</html>
`;

// 4. MAIL OPTIONS
const mailOptions = {
  from: '"Zero Eau" <walidanif3@gmail.com>',
  bcc: clients, 
  subject: "✨ Lavage auto à domicile – À partir de 60DH",
  html: htmlContent,
  attachments: [
    {
      filename: 'logo.png',        
      path: path.join(__dirname, 'logo.png'), // Path safer for different environments         
      cid: 'logo_zero_eau'         
    }
  ]
};

// 5. ENVOI
console.log("🚀 Lancement de l'envoi...");

transporter.verify((error) => {
  if (error) {
    console.log("❌ Erreur de connexion SMTP:", error);
  } else {
    console.log("✅ Serveur prêt. Envoi en cours...");
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("❌ Erreur d'envoi:", error);
      } else {
        console.log("✅ Email envoyé avec succès!");
        console.log("ID Message:", info.messageId);
      }
      transporter.close();
    });
  }
});