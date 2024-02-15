import Mailjet from 'node-mailjet';
export const prerender = false;

async function sendEmail(email, name) {
  const mailjet = Mailjet.apiConnect(import.meta.env.MJ_APIKEY, import.meta.env.MJ_SECRET);

  try {
    const send = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'daukhacminh006@gmail.com',
            Name: 'Thomas Investment Bank',
          },
          To: [
            {
              Email: 'daukhacminh006@gmail.com',
              Name: 'CEO',
            },
          ],
          Subject: 'TIB New Sign Up',
          TemplateID: 5697483,
          TemplateLanguage: true,
          Variables: {
            name: name,
            email: email,
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
