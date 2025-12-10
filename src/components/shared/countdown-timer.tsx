"use client";
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        return {
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60),
        };
      }
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    };

    // Set initial value
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = (Object.keys(timeLeft) as Array<keyof typeof timeLeft>).map((interval, index) => (
    <div key={interval} className="flex items-center">
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-black text-white tabular-nums tracking-tighter">
          {String(timeLeft[interval]).padStart(2, '0')}
        </span>
        <span className="text-xs uppercase text-gray-400 tracking-wider">{interval}</span>
      </div>
      {index < 3 && (
        <span className="text-4xl md:text-5xl font-black text-primary mx-2 md:mx-4 -mt-4">:</span>
      )}
    </div>
  ));

  return (
    <div className="flex justify-center items-start p-4 bg-black/20 rounded-xl">
      {timeLeft.dias === 0 && timeLeft.horas === 0 && timeLeft.minutos === 0 && timeLeft.segundos === 0 
        ? <span className="text-xl font-bold text-red-500">Sorteio em andamento!</span>
        : timerComponents}
    </div>
  );
};

export default CountdownTimer;
