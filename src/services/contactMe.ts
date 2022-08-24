import axios from 'axios';

export function sendEmail(template: object) {
  const data = {
    service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
    template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    user_id: process.env.NEXT_PUBLIC_USER_ID,
    template_params: {
      to_name: 'lucas',
      from_name: 'carlos',
      message: 'hello',
      subject: 'contratação',
      reply_to: 'email@email.com',
    },
  };
  try {
    return axios
      .post(`${process.env.NEXT_PUBLIC_SEND_EMAIL}`, JSON.stringify(data))
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  } catch (error) {}
}
