import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import countdownTimerCss from "./CircularCountdown.module.css";
import useSound from "use-sound";
import timerend from "../../../assets/sound/timerend.mp3";
const renderTime = ({ remainingTime }) => {
  const hours =
    Math.floor(remainingTime / 3600) < 10
      ? `0${Math.floor(remainingTime / 3600)}`
      : Math.floor(remainingTime / 3600);
  const minutes =
    Math.floor((remainingTime % 3600) / 60) < 10
      ? `0${Math.floor((remainingTime % 3600) / 60)}`
      : Math.floor((remainingTime % 3600) / 60);

  const seconds =
    remainingTime % 60 < 10 ? `0${remainingTime % 60}` : remainingTime % 60;
  if (remainingTime === 0) {
    return <div className={countdownTimerCss.value}>00:00:00</div>;
  }

  return (
    <div className="timer">
      <div
        className={countdownTimerCss.value}
      >{`${hours}:${minutes}:${seconds}`}</div>
    </div>
  );
};
const CircularCountdown = ({
  hours,
  seconds,
  minutes,
  start,
  Key,
  setStart,
  setHours,
  setMinutes,
  setSeconds,
}) => {
  const [play] = useSound(timerend);
  return (
    <div className={countdownTimerCss.circularCountdown}>
      <div className={countdownTimerCss.timerWrapper}>
        <CountdownCircleTimer
          key={Key}
          isPlaying
          duration={start ? hours * 3600 + minutes * 60 + seconds : 0}
          colors={"#FF6A6A"}
          className="circle"
          onComplete={() => {
            setStart(false);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
            play();
          }}
          strokeWidth={6}
          rotation="counterclockwise"
          size={220}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default CircularCountdown;
