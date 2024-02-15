import Mailjet from 'node-mailjet';

const prerender = false;
async function sendEmail(email, name) {
  const mailjet = Mailjet.apiConnect("d6a358b86211c698ef89593271fc7189", "7a262d3acd2acaadf919be3d214b613b");
  try {
    const send = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "daukhacminh006@gmail.com",
            Name: "Thomas Investment Bank"
          },
          To: [
            {
              Email: "daukhacminh006@gmail.com",
              Name: "CEO"
            }
          ],
          Subject: "TIB New Sign Up",
          TemplateID: 5697483,
          TemplateLanguage: true,
          Variables: {
            name,
            email
          }
        }
      ]
    });
    console.log(send.body.Messages[0].To[0].Email);
  } catch (error) {
    console.log(error);
  }
}
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email } = body;
    await sendEmail(email, name);
    return new Response(
      JSON.stringify({
        message: "Success"
      }),
      {
        status: 200
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(null, { status: 500 });
  }
};

export { POST, prerender };
