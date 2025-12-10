"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Lock, FileText } from 'lucide-react';
import CountdownTimer from '../shared/countdown-timer';

const FloatingNumber = ({ number, style }: { number: number; style: React.CSSProperties }) => (
  <div
    className="absolute text-4xl font-bold text-white/10"
    style={style}
  >
    {String(number).padStart(2, '0')}
  </div>
);

export default function Hero() {
  const [numbers, setNumbers] = useState<Array<{ num: number; style: React.CSSProperties }>>([]);
  const [targetDate, setTargetDate] = useState('');

  useEffect(() => {
    // Set the countdown to the Mega da Virada draw time
    const currentYear = new Date().getFullYear();
    const drawDate = new Date(`${currentYear}-12-31T20:00:00-03:00`);
    // If the date has passed, set it to next year's draw
    if (drawDate.getTime() < Date.now()) {
      drawDate.setFullYear(currentYear + 1);
    }
    setTargetDate(drawDate.toISOString());

    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      const numCount = isMobile ? 8 : 15;
      const newNumbers = Array.from({ length: numCount }).map(() => {
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        return {
          num: Math.floor(Math.random() * 60) + 1,
          style: {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${size}rem`,
            animation: `float ${duration}s ease-in-out ${delay}s infinite`,
            opacity: Math.random() * 0.08 + 0.02
          },
        };
      });
      setNumbers(newNumbers);
    }
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-24">
      <div className="absolute inset-0 z-0">
        {numbers.map((item, i) => (
          <FloatingNumber key={i} number={item.num} style={item.style} />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-in fade-in slide-in-from-bottom-16 duration-1000">
          <div className="mb-8">
            <p className="text-accent font-semibold mb-4">TEMPO RESTANTE PARA O SORTEIO:</p>
            {targetDate && <CountdownTimer targetDate={targetDate} />}
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white font-headline leading-tight tracking-tighter">
            <span className="text-primary">+50 Jogos Prontos</span> Para a Mega da Virada
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            A escolha inteligente para quem quer aumentar as chances com combinações estudadas e geradas por matemáticos, economizando tempo e esforço.
          </p>
        </div>
        
        <div className="mt-10 animate-in fade-in slide-in-from-bottom-16 duration-1000" style={{animationDelay: "200ms"}}>
            <div className="glassmorphism p-8 md:p-10 max-w-lg mx-auto">
              <p className="text-xl text-gray-400">De <span className="line-through">R$20,00</span> por apenas:</p>
              <div className="my-4">
                <span className="text-7xl md:text-8xl font-black text-white ml-2">R$9,99</span>
              </div>
              
              <Link href="https://pay.kirvano.com/415dda1a-220b-4514-983c-c51283359309" target="_blank">
                <Button size="lg" className="w-full text-xl py-8 animate-button-pulse hover:scale-105 transition-transform whitespace-normal h-auto shine-effect">
                  QUERO GARANTIR MINHAS DEZENAS
                </Button>
              </Link>
              <p className="text-xs text-gray-500 mt-4">Compra segura e entrega automática no seu e-mail.</p>

              <div className="mt-6 flex items-center justify-center gap-6 text-sm font-medium text-gray-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-400" />
                    <span>Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-accent" />
                    <span>Pagamento 100% Seguro</span>
                  </div>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
}
