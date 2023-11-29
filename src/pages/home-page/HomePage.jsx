import React, { useEffect } from "react";
import homePageCss from "./HomePage.module.css";
import WidgetsContainer from "../../components/widgets/WidgetsContainer";
import NewsContainer from "../../components/news/NewsContainer";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={homePageCss.homePage}>
      <div className={homePageCss.container}>
        <div className={homePageCss.flex}>
          <WidgetsContainer />
          <NewsContainer />
        </div>
        <div className={homePageCss.browseButtonContainer}>
          <button onClick={() => navigate("/browse", { replace: true })}>
            Browse
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
