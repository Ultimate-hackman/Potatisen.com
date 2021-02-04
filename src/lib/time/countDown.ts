import React, { useState, useEffect } from "react";

export default function Bruh(date: any, type: any) {
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const text: any = countDown(date, type);

      setText(text);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    text
  );
}

function countDown(date, identity) {
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
