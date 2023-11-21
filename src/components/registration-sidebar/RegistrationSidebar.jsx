import sidebarCss from "./RegistrationSidebar.module.css";
const RegistrationSidebar = () => {
  return (
    <div className={sidebarCss.sidebar}>
      <h1 className={sidebarCss.heading}>
        Discover new things on <span>Superapp</span>
      </h1>
      <img
        src="register-sidebar.png"
        alt="background"
        className={sidebarCss.image}
      />
    </div>
  );
};

export default RegistrationSidebar;
