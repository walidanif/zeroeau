const nodemailer = require("nodemailer");
const path = require("path");

// 1. CONFIGURATION
const CONFIG = {
  auth: {
    user: "walidanif3@gmail.com",
    pass: "pank hsbt npug ucnv" // App Password
  },
  whatsapp: "212604203076",
  brand: "Zero Eau",
  commission: "20%", // Ghadi t-bban f l-email
  location: "Casablanca - Mohammedia - Bouskoura"
};

// 2. LISTE DES PARTENAIRES (Hotels & Restaurants)
const partners = [
  "walidanif3@gmail.com",

];

// 3. TRANSPORTER (Optimized)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: CONFIG.auth,
  pool: true, 
  maxConnections: 3,
  connectionTimeout: 10000
});

// 4. TEMPLATE HTML
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
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #1b263b;">
      
      <tr>
        <td align="center" style="padding: 30px 20px 10px 20px;">
          <img src="cid:logo_zero_eau" alt="${CONFIG.brand}" style="width: 170px; height: auto; display: block;" />
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0px 40px 20px 40px; color: #ffffff;">
          <h1 style="color: #f1c40f !important; margin: 0 0 15px 0; font-size: 22px; text-transform: uppercase;">
            Partenariat Stratégique
          </h1>
          <p style="color: #ffffff !important; font-size: 16px; line-height: 1.6; margin: 0; text-align: left;">
            Bonjour,<br><br>
            Offrez à vos clients un service de lavage auto <b>écologique et sans eau</b> directement sur votre parking, tout en générant un revenu supplémentaire pour votre établissement.
          </p>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0 40px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #2c3e50; border: 2px dashed #f1c40f; border-radius: 12px;">
            <tr>
              <td align="center" style="padding: 20px;">
                <p style="margin: 0; color: #f1c40f; font-size: 18px; font-weight: bold;">
                  Bénéficiez de <span style="font-size: 32px;">${CONFIG.commission}</span><br>
                  <span style="font-size: 14px; color: #ffffff; font-weight: normal;">sur chaque prestation effectuée chez vous.</span>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 30px 40px; color: #ffffff; font-size: 15px;">
          <p style="margin-bottom: 10px;">✅ <b>Zéro Logistique :</b> Nos équipes sont autonomes.</p>
          <p style="margin-bottom: 10px;">✅ <b>Prestige :</b> Un service premium pour vos clients VIP.</p>
          <p style="margin-bottom: 10px;">✅ <b>Écologie :</b> Aucun résidu d'eau ou de produits chimiques.</p>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 10px 40px 40px 40px;">
          <a href="https://wa.me/${CONFIG.whatsapp}" style="background-color: #f1c40f; color: #1b263b; padding: 18px 30px; text-decoration: none; font-weight: 900; border-radius: 8px; font-size: 16px; display: inline-block; text-transform: uppercase;">
            Devenir Partenaire Officiel 
          </a>
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
        <td align="center" style="padding: 20px; border-top: 1px solid rgba(255,255,255,0.1); color: #f1c40f; font-size: 11px;">
          <p style="margin: 5px 0;"><strong>${CONFIG.brand}</strong> • ${CONFIG.location}</p>
        </td>
      </tr>
      

    </table>
  </center>
</body>
</html>
`;

// 5. ENVOI
async function sendB2B() {
  console.log("🚀 Lancement de l'envoi Partenaires...");
  
  const mailOptions = {
    from: `"${CONFIG.brand} - Partenariats" <${CONFIG.auth.user}>`,
    bcc: partners,
    subject: `🤝 Proposition de Partenariat : Gagnez ${CONFIG.commission} par lavage`,
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