const sendGridMail = require('@sendgrid/mail');

exports.handler = async function (event) {
  try {
    const { name, email, message } = JSON.parse(event.body).payload.data;

    console.log(`name: ${name}, email: ${email}, message: ${message}`);

    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
    const html = `
      <div> 
         Hi ${name}! <br><br>
         Thanks for getting in touch.
         I have received your message
         and will get in
         touch with you shortly
         <br><br>
         Best, <br>
         Coley
      </div>
    `;
    const mail = {
      from: 'youngtechinds@gmail.com',
      to: email,
      subject: 'We have received your message',
      html,
    };
    await sendGridMail.send(mail);
    return {
      statusCode: 200,
    };
  } catch (error) {
    return { statusCode: 422, body: String(error) };
  }
};
