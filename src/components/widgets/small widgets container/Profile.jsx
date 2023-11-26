import React from "react";
import profileCss from "./Profile.module.css";
import profilePic from "../../../assets/Image/profile.png";
import SelectedGenre from "./SelectedGenre";
const Profile = () => {
  const { Name, UserName, Email } = JSON.parse(
    localStorage.getItem("formValues")
  );
  return (
    <div className={profileCss.profileCont}>
      <img src={profilePic} alt="profile" className={profileCss.profileImg} />
      <section className={profileCss.details}>
        <p className={profileCss.name}>{Name}</p>
        <p className={profileCss.email}>{Email}</p>
        <h2 className={profileCss.username}>{UserName}</h2>
        <SelectedGenre />
      </section>
    </div>
  );
};

export default Profile;
