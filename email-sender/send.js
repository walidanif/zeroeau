const nodemailer = require("nodemailer");
const path = require("path");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "walidanif3@gmail.com",
    pass: "" 
  },
});

const clients = [
  "walidanif2@gmail.com",
  "walidanif3@gmail.com"
];

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>Zero Eau - Lavage Auto</title>
</head>
<body style="margin: 0; padding: 0; background-color: #1b263b;">

  <div style="display:none;font-size:1px;color:#333333;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    Ne vous déplacez plus ! Lavage auto professionnel à domicile à partir de 60DH. Réservez maintenant 🚗✨
  </div>

  <center>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #1b263b; font-family: Helvetica, Arial, sans-serif;">
      
      <tr>
        <td align="center" style="padding: 30px 20px 10px 20px;">
          <img src="cid:logo_zero_eau" alt="Zero Eau" style="width: 160px; height: auto; display: block; margin: 0; padding: 0;" />
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 8px 35px 18px 37px; color: #ffffff;">
          <h2 style="color: #f1c40f !important; margin: 0 0 10px 0; font-size: 18px; text-transform: uppercase; letter-spacing: 1px;">
            Lavage auto écologique
          </h2><br>
          <p style="color: #fff !important; font-size: 15px; line-height: 1.5; margin: 0;">
            Bonjour, <br>
            Plus besoin de vous déplacer ! Nous venons chez vous ou au bureau avec notre technique <b style="color: #f1c40f !important;">SANS EAU</b>.
          </p>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0 20px 20px 20px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="center" width="33%" style="color: #ffffff; font-size: 12px;">
                        <img src="https://img.icons8.com/ios-filled/50/f1c40f/clock--v1.png" width="30" style="display:block; margin-bottom:5px;">
                        <strong href="https://wa.me/212604203076">Rapide</strong>
                    </td>
                    <td align="center" width="33%" style="color: #ffffff; font-size: 12px;">
                        <img src="https://img.icons8.com/ios-filled/50/f1c40f/leaf.png" width="30" style="display:block; margin-bottom:5px;">
                        <strong href="https://wa.me/212604203076">Écologique</strong>
                    </td>
                    <td align="center" width="33%" style="color: #ffffff; font-size: 12px;">
                        <img src="https://img.icons8.com/ios-filled/50/f1c40f/guarantee.png" width="30" style="display:block; margin-bottom:5px;">
                        <strong href="https://wa.me/212604203076">Qualité</strong>
                    </td>
                </tr>
            </table>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 10px 40px;">
          <a href="https://wa.me/212604203076" style="text-decoration: none; display: block;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1c40f; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
              <tr>
                <td align="center" style="padding: 25px;">
                  <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1b263b !important; text-decoration: none; text-transform: uppercase;">
                    Lavage à Domicile à partir de <br>
                    <span style="color: #1b263b !important; font-size: 42px; font-weight: 900; line-height: 1.1;">60DH</span>
                  </p>
                </td>
              </tr>
            </table>
          </a>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 30px;">
          <a href="https://wa.me/212604203076" style="background-color: transparent; color: #f1c40f !important; border: 2px solid #f1c40f; padding: 14px 30px; text-decoration: none; font-weight: bold; border-radius: 50px; font-size: 16px; display: inline-block; letter-spacing: 0.5px;">
            Réserver par WhatsApp
          </a>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0 40px;">
            <div style="height: 1px; background-color: #f1c40f; opacity: 0.3; width: 100%;"></div>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 25px 0 10px 0;">
            <p style="color: #fff; font-size: 12px; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px;">Suivez-nous sur</p>
            <a href="https://www.facebook.com/zeroeauwash" style="text-decoration: none; margin: 0 10px;">
                <img src="https://img.icons8.com/ios-filled/50/f1c40f/facebook-new.png" alt="Facebook" width="32" height="32" style="display: inline-block;" />
            </a>
            <a href="https://www.instagram.com/zeroeau.wash/" style="text-decoration: none; margin: 0 10px;">
                <img src="https://img.icons8.com/ios-filled/50/f1c40f/instagram-new.png" alt="Instagram" width="32" height="32" style="display: inline-block;" />
            </a>
            <a href="https://www.tiktok.com/@zeroeau0" style="text-decoration: none; margin: 0 10px;">
                <img src="https://img.icons8.com/ios-filled/50/f1c40f/tiktok.png" alt="TikTok" width="32" height="32" style="display: inline-block;" />
            </a>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 20px; color: #fff; font-size: 11px; line-height: 1.6;">
          <p style="margin: 5px 0; color: #f1c40f;"><strong>Zero Eau</strong> • Casablanca - Mohammedia - Bouskoura - Dar bouazza</p>
          <p style="margin: 5px 0; color: #fff;">
             Contactez-nous: <a href="mailto:contact@zeroeau.ma" style="color: #f1c40f; text-decoration: none;">contact@zeroeau.ma</a>
          </p>
          <p style="margin: 15px 0 0 0; border-top: 1px solid #fff; padding-top: 10px;">
            Vous recevez cet email car vous êtes client ou partenaire de <br style="color: #f1c40f;"> Zero Eau.<br>
     
          </p>
        </td>
      </tr>

    </table>
  </center>
</body>
</html>
`;

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

transporter.sendMail(mailOptions, (error, info) => {
  if (error) return console.log(error);
  console.log("✅ Email sent!");
});