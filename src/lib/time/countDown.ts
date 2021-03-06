import { useState, useEffect } from "react";

function countDown(date: string, identity: boolean): number[] {
  const past: number = new Date(date).getTime();
  const now: number = new Date().getTime();

  const difference: number = identity ? now - past : past - now;

  const totalHour: number = Math.floor(difference / (1000 * 60 * 60));
  const totalMinutes: number = Math.floor((difference / 1000) / 60);
  const totaldays: number = Math.floor(difference / (1000 * 60 * 60 * 24));
  const totalMonths: number = Math.floor(difference / (1000 * 60 * 60 * 24 * 31));

  const days: number = Math.floor(difference / (1000 * 60 * 60 * 24) - totalMonths);
  const hours: number = Math.floor((((difference / 1000) / 60) / 60) - totaldays * 24);
  const minutes: number = Math.floor(((difference / 1000) / 60) - totalHour * 60);
  const seconds: number = Math.floor((difference / 1000) - totalMinutes * 60);

  return [days, hours, minutes, seconds];
}

export default function Bruh(date: string, identity: boolean): number[] {
  const [text, setText] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const output: number[] = countDown(date, identity);

      setText(output);
    }, 1000);
    return () => clearInterval(interval);
  }, [date, identity]);

  return (
    text
  );
}
