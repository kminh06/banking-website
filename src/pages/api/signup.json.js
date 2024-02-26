import Mailjet from 'node-mailjet';
export const prerender = false;

async function sendEmail(email, name) {
  const mailjet = Mailjet.apiConnect(import.meta.env.MJ_APIKEY, import.meta.env.MJ_SECRET);

  try {
    const send = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'support@thomasinvestmentbank.com',
            Name: 'Thomas Investment Bank',
          },
          To: [
            {
              Email: email,
              Name: name,
            },
          ],
          Subject: 'Account Opening Request Received',
          TemplateID: 5729636,
          TemplateLanguage: true,
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
    const { name, email } = body;
    await sendEmail(email, name);

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
