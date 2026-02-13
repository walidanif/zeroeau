const nodemailer = require("nodemailer");
const path = require("path");


const CONFIG = {
  auth: {
    user: "",
    pass: "" // App Password
  },
  whatsapp: "212604203076",
  brand: "Zero Eau",
  commission: "20%", 
  location: "Casablanca - Mohammedia - Bouskoura - Dar Bouazza"
};


const partners = [
  "walidanif3@gmail.com",

];


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: CONFIG.auth,
  pool: true, 
  maxConnections: 3,
  connectionTimeout: 10000
});

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
</head>
<body style="margin: 0; padding: 0; background-color: #1b263b; font-family: Arial, sans-serif;">
  <center>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 550px; background-color: #1b263b; border: 1px solid rgba(241, 196, 15, 0.1);">
      
      <tr>
        <td align="center" style="padding: 20px 20px 10px 20px;">
          <img src="cid:logo_zero_eau" alt="Zero Eau" style="width: 140px; height: auto; display: block;" />
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0px 40px 15px 40px; color: #ffffff;">
          <h1 style="color: #f1c40f !important; margin: 0 0 10px 0; font-size: 25px; text-transform: uppercase; letter-spacing: 1px;">
            Partenariat Stratégique
          </h1>
          <p style="color: #ffffff !important; font-size: 14px; line-height: 1.4; margin: 0;">
            Bonjour, <br>
            Optimisez votre parking en offrant à vos clients un service de lavage auto <b>écologique et <span style="color: #f1c40f !important;">sans eau</span> </b>, tout en générant un revenu supplémentaire.
          </p>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0 50px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: rgba(44, 62, 80, 0.5); border: 2px dashed #f1c40f; border-radius: 10px;">
            <tr>
              <td align="center" style="padding: 15px;">
                <p style="margin: 0; color: #f1c40f; font-size: 28px; font-weight: bold;">
                  Bénéficiez de <span style="font-size: 28px;"> d'une commission sur chaque lavage</span><br>
                
                  <span style="font-size: 13px; color: #ffffff; font-weight: normal;">Sur Chaque Prestation Effectuée Chez Vous.</span>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 20px 40px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="color: #ffffff; font-size: 13px; line-height: 1.8;">
            <tr><td align="left">✅ <b>Zéro Logistique :</b> Nos équipes sont 100% autonomes.</td></tr>
            <tr><td align="left">✅ <b>Prestige :</b> Un service premium pour vos clients VIP.</td></tr>
            <tr><td align="left">✅ <b>Écologie :</b> Aucun résidu d'eau ou de produits chimiques.</td></tr>
          </table>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0px 40px 25px 40px;">
          <a href="https://wash.zeroeau.com/partenaire" style="background-color: #f1c40f; color: #1b263b; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 6px; font-size: 14px; display: inline-block; text-transform: uppercase;">
            Devenir Partenaire Officiel 
          </a>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 15px 0 10px 0; border-top: 1px solid rgba(255,255,255,0.05);">
            <p style="color: #ffffff; font-size: 10px; margin: 0 0 10px 0; text-transform: uppercase; opacity: 0.8;">Suivez-nous sur</p>
            <table border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding: 0 8px;"><a href="#"><img src="https://img.icons8.com/ios-filled/50/f1c40f/facebook-new.png" width="22"></a></td>
                <td style="padding: 0 8px;"><a href="#"><img src="https://img.icons8.com/ios-filled/50/f1c40f/instagram-new.png" width="22"></a></td>
                <td style="padding: 0 8px;"><a href="#"><img src="https://img.icons8.com/ios-filled/50/f1c40f/tiktok.png" width="22"></a></td>
              </tr>
            </table>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 10px 20px 20px 20px; color: #f1c40f; font-size: 10px; opacity: 0.7;">
          Zero Eau • Casablanca - Mohammedia - Bouskoura - Dar Bouazza<br>
          Contactez-nous: <a href="mailto:contact@zeroeau.ma" style="color: #f1c40f; text-decoration: none;">contact@zeroeau.ma</a>
        </td>
      </tr>

    </table>
  </center>
</body>
</html>
`;


async function sendB2B() {
  console.log("🚀 Lancement de l'envoi Partenaires...");
  
  const mailOptions = {
    from: `"${CONFIG.brand} - Partenariats" <${CONFIG.auth.user}>`,
    bcc: partners,
    subject: `Proposition de Partenariat : Gagnez ${CONFIG.commission} par lavage`,
    html: htmlContent,
    attachments: [{
      filename: 'logo.png',
      path: path.join(__dirname, 'logo.png'),
      cid: 'logo_zero_eau'
    }]
  };

  try {
    await transporter.verify();
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Campagne envoyée avec succès !");
    console.log("ID Message:", info.messageId);
  } catch (err) {
    console.error("❌ Erreur:", err.message);
  } finally {
    transporter.close();
  }
}

sendB2B();