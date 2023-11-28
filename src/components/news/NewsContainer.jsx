import React, { memo, useEffect, useState } from "react";
import newsCss from "./NewsContainer.module.css";

import { useNewsApi } from "../../hooks/useNewsApi";
import { GetTimeData, randomNum } from "../../utils/helper";

const NewsContainer = () => {
  const { news, loading } = useNewsApi();
  const [randomNumber, setRandomNumber] = useState(randomNum());
  const [time, setTime] = useState(() => {
    return GetTimeData("time");
  });
  const date = GetTimeData().replaceAll("/", "-");

  useEffect(() => {
    const id = setInterval(() => {
      setTime(GetTimeData("time"));
    }, 1000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const id = setInterval(() => setRandomNumber(randomNum()), 30000);
    return () => clearInterval(id);
  }, [randomNum]);

  const randNews = news?.articles?.[randomNumber];

  const content = randNews?.content.split("[")[0];
  if (loading) {
    return <div className={newsCss.loading}>Loading....</div>;
  } else
    return (
      <div className={newsCss.news}>
        <img src={randNews?.urlToImage} alt="" />
        <div className={newsCss.head}>
          <span>{randNews?.title}</span>
          <div className={newsCss.dateTime}>
            <span>{date}</span> | <span>{time}</span>
          </div>
        </div>
        <div className={newsCss.details}>{content}</div>
      </div>
    );
};

export default memo(NewsContainer);
