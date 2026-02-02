const nodemailer = require("nodemailer");

// 1. CONFIGURATION DES PARAMÈTRES
const CONFIG = {
  auth: {
    user: "walidanif3@gmail.com",
    pass: "" 
  },
  whatsapp: "212604203076",
  brand: "Zero Eau",
  location: "Casablanca - Mohammedia - Bouskoura"
};

// 2. LISTE DES PARTENAIRES (Hotels & Restaurants)
const clients = [
  "znbelyamani@gmail.com",
  "zeinaspa@gmail.com",
  // ... zid ga3 l-emailat li 3ndk hna
];

// 3. TRANSPORTER CONFIGURATION
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: CONFIG.auth,
  pool: true, // Bach isift l-emails b-sor3a (Optimized for multiple recipients)
  maxConnections: 5,
  maxMessages: 100
});

// 4. TEMPLATE HTML (B2B Partenariat)
const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <title>Partenariat Zero Eau</title>
</head>
<body style="margin: 0; padding: 0; background-color: #1b263b; font-family: 'Segoe UI', Arial, sans-serif;">
  <center>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #1b263b; border-collapse: collapse;">
      
      <tr>
        <td align="center" style="padding: 30px 20px 0px 20px;">
          <img src="cid:logo_zero_eau" alt="${CONFIG.brand}" style="width: 180px; height: auto; display: block; border: 0;" />
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0px 40px 30px 40px; color: #ffffff;">
          <h1 style="color: #f1c40f !important; margin: -10px 0 20px 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; line-height: 1.2;">
            Élevez l'expérience de vos clients
          </h1>
          <p style="color: #ffffff !important; font-size: 16px; line-height: 1.6; margin: 0; text-align: left;">
            Bonjour,<br><br>
            Aujourd'hui, le luxe se définit par le gain de temps et l'engagement écologique. <b>${CONFIG.brand}</b> propose d'intégrer une solution de lavage auto premium et <b>sans eau</b> directement au sein de votre établissement.
            <br><br>
            <b>Pourquoi collaborer avec nous ?</b>
          </p>
          <ul style="text-align: left; padding: 0; list-style: none; margin: 20px 0;">
            <li style="margin-bottom: 10px;">✅ <b>Service Silencieux :</b> Aucune gêne sonore pour vos résidents.</li>
            <li style="margin-bottom: 10px;">✅ <b>Zéro Déchets :</b> Aucun résidu d'eau sur votre parking.</li>
            <li style="margin-bottom: 10px;">✅ <b>Image Green :</b> Un atout marketing majeur pour votre image de marque.</li>
          </ul>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0 40px;">
          <a href="https://wa.me/${CONFIG.whatsapp}" style="text-decoration: none; display: block;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1c40f; border-radius: 12px; border-collapse: separate;">
              <tr>
                <td align="center" style="padding: 25px;">
                  <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1b263b !important;">
                    Devenir Partenaire Officiel <br>
                    <span style="font-size: 14px; font-weight: normal; opacity: 0.8;">Discuter des avantages sur WhatsApp</span>
                  </p>
                </td>
              </tr>
            </table>
          </a>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 40px 20px 20px 20px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #3e4c63; padding-top: 20px;">
            <tr>
              <td align="center" style="color: #f1c40f; font-size: 12px; font-family: sans-serif;">
                <p style="margin: 5px 0;"><strong>${CONFIG.brand}</strong> • ${CONFIG.location}</p>
                <p style="margin: 0; opacity: 0.7;">Lavage Auto Écologique à Domicile & Entreprise</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

    </table>
  </center>
</body>
</html>
`;

// 5. ENVOI DES EMAILS
async function sendPartnershipEmails() {
  console.log("🚀 Lancement de la campagne de partenariat...");

  const mailOptions = {
    from: `"${CONFIG.brand} - Direction" <${CONFIG.auth.user}>`,
    bcc: clients,
    subject: `🤝 Partenariat Stratégique : Valorisez vos services avec ${CONFIG.brand}`,
    html: htmlContent,
    attachments: [{
      filename: 'logo.png',
      path: './logo.png',
      cid: 'logo_zero_eau'
    }]
  };

  try {
    // Vérification de la connexion
    await transporter.verify();
    console.log("✅ Serveur prêt pour l'envoi.");

    // Envoi de l'email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Emails envoyés avec succès !");
    console.log("Message ID:", info.messageId);
    
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi :", error.message);
  } finally {
    transporter.close(); // Fermer la connexion
  }
}

// Lancer le script
sendPartnershipEmails();