import React, { useEffect } from "react";
import homePageCss from "./HomePage.module.css";
import WidgetsContainer from "../../components/widgets/WidgetsContainer";
import NewsContainer from "../../components/news/NewsContainer";

const HomePage = () => {
  return (
    <div className={homePageCss.homePage}>
      <div className={homePageCss.container}>
        <div className={homePageCss.flex}>
          <WidgetsContainer />
          <NewsContainer />
        </div>
        <div>
          <button>Browse</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
