import React from "react";
import registrationFormCss from "./RegistrationForm.module.css";
import Form from "../form/Form";
const RegistrationForm = () => {
  return (
    <div className={registrationFormCss.registerForm}>
      <div className={registrationFormCss.container}>
        <h1 className={registrationFormCss.head}>Super app</h1>
        <p className={registrationFormCss.para}>Create your new account</p>
        <Form />
      </div>
    </div>
  );
};

export default RegistrationForm;
