import React from "react";
import headerCss from "./BrowserHeader.module.css";
import avatar from "../../assets/Image/avatar.png";
const BrowseHeader = () => {
  return (
    <header className={headerCss.header}>
      <p className={headerCss.logo}>Super app</p>
      <img src={avatar} alt="avatar" />
    </header>
  );
};

export default BrowseHeader;
