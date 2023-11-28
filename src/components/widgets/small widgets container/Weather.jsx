import React, { useEffect, useState } from "react";
import line from "../../../assets/Image/line.png";
import pressure from "../../../assets/icons/pressure.svg";
import wind from "../../../assets/icons/wind.svg";
import humid from "../../../assets/icons/humid.svg";
import weatherCss from "./Weather.module.css";
import { useWeatherApi } from "../../../hooks/useWeatherApi";
import { GetTimeData } from "../../../utils/helper";
const Weather = () => {
  const { weather, loading } = useWeatherApi();
  const current = weather?.current;
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

  return (
    <div className={weatherCss.weatherCont}>
      <section className={weatherCss.dateTime}>
        <span>{date}</span>
        <span>{time}</span>
      </section>
      <section
        className={`${
          loading ? weatherCss.loading : weatherCss.weatherConditions
        }`}
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <img src={line} className={weatherCss.line1} />
            <img src={line} className={weatherCss.line2} />
            <div className={weatherCss.weatherCondition}>
              <img
                src={current?.condition?.icon}
                className={weatherCss.weatherConditionImg}
              />
              <span className={weatherCss.weatherConditionText}>
                {current?.condition?.text}
              </span>
            </div>
            <div className={weatherCss.tempPressure}>
              <span className={weatherCss.temp}>{current?.temp_c}°C</span>
              <p className={weatherCss.pressure}>
                <img src={pressure} alt="pressure" />
                <span>
                  <span>{current?.pressure_mb} mbar</span> <span>pressure</span>
                </span>
              </p>
            </div>
            <div className={weatherCss.windHumid}>
              <p className={weatherCss.wind}>
                <img src={wind} alt="wind icon" />
                <span>{current?.wind_kph}Km/h</span>
              </p>
              <p className={weatherCss.humidity}>
                <img src={humid} alt="humid icon" />
                <span>
                  <span>{current?.humidity}%</span>
                  <span>humdity</span>
                </span>
              </p>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Weather;
