const nodemailer = require("nodemailer");
const path = require("path");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
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
</head>
<body style="margin: 0; padding: 0; background-color: #1b263b;">
  <center>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #1b263b;">
      
      <tr>
        <td align="center" style="padding: 20px 20px 0px 20px;">
          <img src="cid:logo_zero_eau" alt="Zero Eau" style="width: 180px; height: auto; display: block; margin: 0; padding: 0;" />
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0px 40px 20px 40px; color: #ffffff; font-family: Helvetica, Arial, sans-serif;">
          <h2 style="color: #f1c40f !important; margin: -15px 0 10px 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; line-height: 1.2;">
            Lavage auto écologique
          </h2>
          <p style="color: #ffffff !important; font-size: 16px; line-height: 1.4; margin: 0;">
            Bonjour, <br>
            Plus besoin de vous déplacer ! Nous venons chez vous ou au bureau avec notre technique <b style="color: #f1c40f !important;">SANS EAU</b>.
          </p>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0 40px;">
          <a href="https://wa.me/212604203076" style="text-decoration: none; display: block;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1c40f; border-radius: 8px;">
              <tr>
                <td align="center" style="padding: 20px;">
                  <p style="margin: 0; font-size: 18px; font-weight: 600; color: #1b263b !important; text-decoration: none;">
                    Lavage à Domicile à partir de <br>
                    <span style="color: #1b263b !important; font-size: 38px; font-weight: 900;">60DH</span>
                  </p>
                </td>
              </tr>
            </table>
          </a>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 30px;">
          <a href="https://wa.me/212604203076" style="color: #f1c40f !important; border: 2px solid #f1c40f; padding: 12px 30px; text-decoration: none; font-weight: bold; border-radius: 50px; font-size: 17px; display: inline-block;">
            Réserver par WhatsApp maintenant !
          </a>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0px 0px 20px 0px;">
            <a href="https://www.facebook.com/zeroeauwash" style="text-decoration: none; margin: 0 8px;">
                <img src="cid:icon_fb" alt="Facebook" width="32" height="32" style="display: inline-block;" />
            </a>
            <a href="https://www.instagram.com/zeroeau/" style="text-decoration: none; margin: 0 8px;">
                <img src="cid:icon_insta" alt="Instagram" width="32" height="32" style="display: inline-block;" />
            </a>
            <a href="https://www.tiktok.com/@zeroeau0" style="text-decoration: none; margin: 0 8px;">
                <img src="cid:icon_tiktok" alt="TikTok" width="32" height="32" style="display: inline-block;" />
            </a>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 20px; border-top: 1px solid #f1c40f; color: #f1c40f; font-family: sans-serif; font-size: 12px;">
          <p style="margin: 5px 0;"><strong>Zero Eau</strong> • Casablanca - Mohammedia - Bouskoura - Dar bouazza </p>
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
    },
    // Zid had les icônes f dossier dyalek:
    {
        filename: 'fb.png',
        path: './fb.png',
        cid: 'icon_fb'
    },
    {
        filename: 'insta.png',
        path: './insta.png',
        cid: 'icon_insta'
    },
    {
        filename: 'tiktok.png',
        path: './tiktok.png',
        cid: 'icon_tiktok'
    }
  ]
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) return console.log(error);
  console.log("✅ Email sent!");
});