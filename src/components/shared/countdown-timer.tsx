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
  
  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <div key={interval} className="flex flex-col items-center glassmorphism p-3 w-20 rounded-lg">
      <span className="text-3xl font-bold text-white">{String(value).padStart(2, '0')}</span>
      <span className="text-xs uppercase text-gray-400">{interval}</span>
    </div>
  ));

  return (
    <div className="flex justify-center gap-2 sm:gap-4">
      {timeLeft.dias === 0 && timeLeft.horas === 0 && timeLeft.minutos === 0 && timeLeft.segundos === 0 
        ? <span className="text-xl font-bold text-red-500">Sorteio em andamento!</span>
        : timerComponents}
    </div>
  );
};

export default CountdownTimer;
