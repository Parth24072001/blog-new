/* eslint-disable react-hooks/exhaustive-deps */
// app/components/TimerCountDown.tsx
import { useState, useEffect } from "react";

const TimerCountDown = () => {
  const targetDate = new Date("2025-10-01T00:00:00Z");
  const august28Date = new Date("2024-08-26T00:00:00Z");

  const calculateTime = (startDate: Date, endDate: Date) => {
    const difference = endDate.getTime() - startDate.getTime();
    const absDifference = Math.abs(difference);

    const days = Math.floor(absDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (absDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (absDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((absDifference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((absDifference % 1000) / 10);

    return {
      difference,
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
    };
  };

  const initialTime = {
    difference: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [timeSinceAug28, setTimeSinceAug28] = useState(initialTime);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setTimeLeft(calculateTime(new Date(), targetDate));
      setTimeSinceAug28(calculateTime(august28Date, new Date()));
    }, 10);

    return () => clearInterval(myInterval);
  }, [targetDate]);

  const {
    days: timeLeftDays,
    hours: timeLeftHours,
    minutes: timeLeftMinutes,
    seconds: timeLeftSeconds,
    milliseconds: timeLeftMilliseconds,
  } = timeLeft;

  const {
    days: timeSinceAug28Days,
    hours: timeSinceAug28Hours,
    minutes: timeSinceAug28Minutes,
    seconds: timeSinceAug28Seconds,
    milliseconds: timeSinceAug28Milliseconds,
  } = timeSinceAug28;

  return (
    <div className="bg-slate-400">
      <div className="time-box-wrapper">
        <h2>Time Left Until Target Date</h2>
        <div className="single-box">
          <h1>{timeLeftDays}</h1>
          <p>Days</p>
        </div>

        <div className="single-box">
          <h1>{timeLeftHours}</h1>
          <p>Hours</p>
        </div>

        <div className="single-box">
          <h1>{timeLeftMinutes}</h1>
          <p>Minutes</p>
        </div>

        <div className="single-box">
          <h1>{timeLeftSeconds}</h1>
          <p>Seconds</p>
        </div>

        <div className="single-box">
          <h1>{timeLeftMilliseconds}</h1>
          <p>Milliseconds</p>
        </div>
      </div>

      <div className="time-box-wrapper bg-slate-400">
        <h2>Time Passed Since August 28, 2024</h2>
        <div className="single-box">
          <h1>{timeSinceAug28Days}</h1>
          <p>Days</p>
        </div>

        <div className="single-box">
          <h1>{timeSinceAug28Hours}</h1>
          <p>Hours</p>
        </div>

        <div className="single-box">
          <h1>{timeSinceAug28Minutes}</h1>
          <p>Minutes</p>
        </div>

        <div className="single-box">
          <h1>{timeSinceAug28Seconds}</h1>
          <p>Seconds</p>
        </div>

        <div className="single-box">
          <h1>{timeSinceAug28Milliseconds}</h1>
          <p>Milliseconds</p>
        </div>
      </div>
    </div>
  );
};

export default TimerCountDown;
