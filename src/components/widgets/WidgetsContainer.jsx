import React from "react";
import widgetsCss from "./WidgetsContainer.module.css";
import SmallWidgetsContainer from "./small widgets container/SmallWidgetsContainer";
import Timer from "./timer/Timer";
const WidgetsContainer = () => {
  return (
    <div className={widgetsCss.widgets}>
      <SmallWidgetsContainer />
      <Timer />
    </div>
  );
};

export default WidgetsContainer;
