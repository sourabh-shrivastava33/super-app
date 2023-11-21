import RegistrationForm from "../../components/registration-form/RegistrationForm";
import RegistrationSidebar from "../../components/registration-sidebar/RegistrationSidebar";
import registerCss from "./Registration.module.css";
const Registration = () => {
  return (
    <div className={registerCss.register}>
      <RegistrationSidebar />
      <RegistrationForm />
    </div>
  );
};

export default Registration;
