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

  const timerItems = Object.entries(timeLeft);

  return (
    <div className="glassmorphism p-4 rounded-xl flex flex-col items-center gap-2">
      {timeLeft.dias === 0 && timeLeft.horas === 0 && timeLeft.minutos === 0 && timeLeft.segundos === 0 
        ? <span className="text-xl font-bold text-red-500">Sorteio em andamento!</span>
        : (
          <div className="flex justify-center items-center gap-2 md:gap-4 font-digital">
            {timerItems.map(([interval, value], index) => (
              <div key={interval} className="flex items-center gap-2 md:gap-4">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-white">{String(value).padStart(2, '0')}</div>
                  <div className="text-xs uppercase text-gray-400 font-body">{interval}</div>
                </div>
                {index < timerItems.length - 1 && (
                  <div className="text-4xl md:text-5xl font-black text-primary -translate-y-2">:</div>
                )}
              </div>
            ))}
          </div>
        )
      }
      <p className="font-semibold text-sm gold-shine">TEMPO RESTANTE PARA O SORTEIO DA MEGA DA VIRADA:</p>
    </div>
  );
};

export default CountdownTimer;
