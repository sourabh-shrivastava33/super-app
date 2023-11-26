import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import registerCss from "./Registration.module.css";
import RegistrationForm from "../../components/registration-form/RegistrationForm";
import RegistrationSidebar from "../../components/registration-sidebar/RegistrationSidebar";
const Registration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("formValues")) {
      navigate("/genre", { replace: true });
    } else {
      return;
    }
  }, []);

  return (
    <div className={registerCss.register}>
      <RegistrationSidebar />
      <RegistrationForm />
    </div>
  );
};

export default Registration;
