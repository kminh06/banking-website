import Mailjet from 'node-mailjet';
export const prerender = false;

async function sendEmail(email, name, message) {
  const mailjet = Mailjet.apiConnect(import.meta.env.MJ_APIKEY, import.meta.env.MJ_SECRET);

  try {
    const send = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: email,
            Name: name,
          },
          To: [
            {
              Email: 'support@thomasinvestmentbank.com',
              Name: 'Thomas Investment Bank Team',
            },
          ],
          Subject: 'TIB Contact Message',
          TemplateID: 5713211,
          TemplateLanguage: true,
          Variables: {
            name: name,
            email: email,
            message: message,
          },
        },
      ],
    });

    console.log(send.body.Messages[0].To[0].Email);
  } catch (error) {
    console.log(error);
  }
}

export const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    await sendEmail(email, name, message);

    return new Response(
      JSON.stringify({
        message: 'Success',
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(null, { status: 500 });
  }
};
