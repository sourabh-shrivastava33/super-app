import React from "react";
import formFooterCss from "./FormFooter.module.css";
const FormFooter = () => {
  return (
    <>
      <p className={formFooterCss.para1}>
        By clicking on Sign up. you agree to Superapp{" "}
        <span>Terms and Conditions of Use</span>
      </p>
      <p className={formFooterCss.para1}>
        To learn more about how Superapp collects, uses, shares and protects
        your personal data please head Superapp <span>Privacy Policy</span>
      </p>
    </>
  );
};

export default FormFooter;
