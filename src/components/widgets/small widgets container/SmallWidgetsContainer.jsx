import React from "react";
import smallWidgetsCss from "./SmallWidgetsContainer.module.css";
import Profile from "./Profile";
import Notes from "./Notes";
import Weather from "./Weather";
const SmallWidgetsContainer = () => {
  return (
    <div className={smallWidgetsCss.smallWidgetesCont}>
      <Profile />
      <Notes />
      <Weather />
    </div>
  );
};

export default SmallWidgetsContainer;
