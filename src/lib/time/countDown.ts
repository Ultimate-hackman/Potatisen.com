import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
function countDown(date: string): number[] {
  const now: Dayjs = dayjs();

  const past: Dayjs = dayjs(date);

  const days: number = now.diff(past, "day");
  const hours: number = now.diff(past, "hour") - days * 24;
  const minutes: number = now.diff(past, "minute") - (hours * 60 + (days * 24) * 60);
  const seconds: number = now.diff(past, "second") - (minutes * 60 + (hours * 60 + (days * 24) * 60) * 60);

  return [days, hours, minutes, seconds];
}

export default function Bruh(date: string): number[] {
  const [text, setText] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const output: number[] = countDown(date);

      setText(output);
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    text
  );
}
