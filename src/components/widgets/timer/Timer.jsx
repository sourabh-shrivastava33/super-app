import React, { useState } from "react";
import timerCss from "./Timer.module.css";

import CircularCountdown from "./CircularCountdown";
import TimerController from "./TimerController";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const [key, setKey] = useState(1);
  function timerButtonClick(e) {
    switch (e.target.id) {
      case "hoursinc":
        return setHours((prev) => prev + 1);
      case "hoursdec":
        return setHours((prev) => (prev === 0 ? prev : prev - 1));
      case "minutesinc":
        return setMinutes((prev) => {
          prev === 59 ? setHours((prev) => prev + 1) : "";
          return prev === 59 ? 0 : prev + 1;
        });
      case "minutesdec":
        return setMinutes((prev) => {
          prev === 0 && hours !== 0 ? setHours((prev) => prev - 1) : "";
          return prev === 0 ? (hours !== 0 ? 59 : 0) : prev - 1;
        });
      case "secondsinc":
        return setSeconds((prev) => {
          if (prev === 59 && minutes === 59) {
            setMinutes(0);
            setHours((prev) => prev + 1);
          }
          if (prev === 59 && minutes !== 59) {
            setMinutes((prev) => prev + 1);
          }
          return prev === 59 ? 0 : prev + 1;
        });
      case "secondsdec":
        return setSeconds((prev) => {
          if (prev === 0 && minutes === 0 && hours !== 0) {
            setHours((prev) => prev - 1);
            setMinutes(59);
          }
          if (prev === 0 && minutes !== 0) {
            setMinutes((prev) => prev - 1);
          }

          return prev === 0
            ? minutes !== 0 || hours !== 0
              ? 59
              : 0
            : prev - 1;
        });
    }
  }

  function handleStartStopButton(e) {
    if (e.target.innerText === "Start") {
      if (!hours && !minutes && !seconds) return;
      setKey((prev) => prev + 1);
      setStart(true);
    } else {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      setStart(false);
    }
  }
  return (
    <div className={timerCss.timerComponent}>
      <CircularCountdown
        hours={hours}
        seconds={seconds}
        minutes={minutes}
        start={start}
        Key={key}
        setStart={setStart}
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />

      <TimerController
        hours={hours}
        seconds={seconds}
        minutes={minutes}
        onClick={timerButtonClick}
        start={start}
        handleStartStopButton={handleStartStopButton}
      />
    </div>
  );
};
export default Timer;
