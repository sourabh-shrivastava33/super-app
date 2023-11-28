import React from "react";
import controllerCss from "./TimerController.module.css";
import increase from "../../../assets/icons/increase.svg";
import decrease from "../../../assets/icons/decrease.svg";
const TimerController = ({
  hours,
  seconds,
  minutes,
  onClick,
  handleStartStopButton,
  start,
}) => {
  const hour = hours === 0 ? "00" : hours < 10 ? `0${hours}` : hours;
  const minute = minutes === 0 ? "00" : minutes < 10 ? `0${minutes}` : minutes;
  const second = seconds === 0 ? "00" : seconds < 10 ? `0${seconds}` : seconds;
  return (
    <>
      <div className={controllerCss.timerController}>
        <div className={controllerCss.hourController}>
          <p className={controllerCss.controllerName}>Hours</p>
          <img
            src={increase}
            alt="increase"
            className={controllerCss.icon}
            id="hoursinc"
            onClick={onClick}
          />
          <span className={controllerCss.timer}>{hour}</span>
          <img
            src={decrease}
            alt="decrease"
            className={controllerCss.icon}
            id="hoursdec"
            onClick={onClick}
          />
        </div>
        <span className={controllerCss.divide}>:</span>
        <div className={controllerCss.minuteController}>
          <p className={controllerCss.controllerName}>Minutes</p>
          <img
            src={increase}
            alt="increase"
            className={controllerCss.icon}
            id="minutesinc"
            onClick={onClick}
          />
          <span className={controllerCss.timer}>{minute}</span>
          <img
            src={decrease}
            alt="decrease"
            className={controllerCss.icon}
            id="minutesdec"
            onClick={onClick}
          />
        </div>
        <span className={controllerCss.divide}>:</span>
        <div className={controllerCss.secondController}>
          <p className={controllerCss.controllerName}>Seconds</p>
          <img
            src={increase}
            alt="increase"
            className={controllerCss.icon}
            id="secondsinc"
            onClick={onClick}
          />
          <span className={controllerCss.timer}>{second}</span>
          <img
            src={decrease}
            alt="decrease"
            className={controllerCss.icon}
            id="secondsdec"
            onClick={onClick}
          />
        </div>
      </div>
      <button className={controllerCss.button} onClick={handleStartStopButton}>
        {start ? "Stop" : "Start"}
      </button>
    </>
  );
};

export default TimerController;
