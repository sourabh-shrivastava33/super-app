import React from "react";
import browseCss from "./Browser.module.css";
import BrowseHeader from "../../components/browser-header/BrowseHeader";
import BrowserBody from "../../components/browser-body/BrowserBody";

const Browser = () => {
  return (
    <div className={browseCss.browser}>
      <BrowseHeader />
      <BrowserBody />
    </div>
  );
};

export default Browser;
