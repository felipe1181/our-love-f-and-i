"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date(
        process.env.NEXT_PUBLIC_MEETING_DATE || "2025-06-06"
      );
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-pink-100 rounded-lg p-4">
        <div className="text-3xl font-bold text-pink-600">{timeLeft.days}</div>
        <div className="text-sm text-pink-800">Dias</div>
      </div>
      <div className="bg-purple-100 rounded-lg p-4">
        <div className="text-3xl font-bold text-purple-600">
          {timeLeft.hours}
        </div>
        <div className="text-sm text-purple-800">Horas</div>
      </div>
      <div className="bg-pink-100 rounded-lg p-4">
        <div className="text-3xl font-bold text-pink-600">
          {timeLeft.minutes}
        </div>
        <div className="text-sm text-pink-800">Minutos</div>
      </div>
      <div className="bg-purple-100 rounded-lg p-4">
        <div className="text-3xl font-bold text-purple-600">
          {timeLeft.seconds}
        </div>
        <div className="text-sm text-pink-800">Segundos</div>
      </div>
    </div>
  );
}
