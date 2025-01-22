export const sendEmailAction = (templateParams) => {
  emailjs.send("service_dygybw6", "template_gxzmxeq", templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
};
