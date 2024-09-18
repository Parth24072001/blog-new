import TimerCountDown from "../components/moduls/TimerCountDown";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Timer Countdown" },
    { description: "Countdown timer and time passed since a specific date." },
  ];
};

export default function TimerPage() {
  return (
    <div>
      <h1>Timer Countdown Page</h1>
      <TimerCountDown />
    </div>
  );
}
