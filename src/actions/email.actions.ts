export const sendEmailAction = async (templateParams) => {
  try {
    const res = await emailjs.send(
      "service_dygybw6",
      "template_gxzmxeq",
      templateParams
    );
    return(res.status)
  } catch (error) {
   return(400)
  }
};
