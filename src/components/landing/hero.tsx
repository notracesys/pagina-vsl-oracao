"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

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

  useEffect(() => {
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
          <h1 className="text-4xl md:text-6xl font-black text-white font-headline leading-tight tracking-tighter">
            <span className="text-primary">+50 Jogos Prontos</span> Para a Mega da Virada
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            A escolha inteligente para quem quer aumentar as chances com combinações estudadas, economizando tempo e esforço.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000" style={{animationDelay: "200ms"}}>
          <Button size="lg" className="w-full sm:w-auto text-lg py-7 px-10 animate-button-pulse hover:scale-105 transition-transform" asChild>
            <Link href="#comprar">QUERO AUMENTAR MINHAS CHANCES</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-transform" asChild>
            <Link href="#o-que-voce-recebe">Ver Mais</Link>
          </Button>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-16 duration-1000" style={{animationDelay: "400ms"}}>
          <Card className="glassmorphism max-w-sm w-full">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <FileText className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-lg font-bold text-white">Mockup do Produto</h3>
              <p className="text-sm text-gray-400">PDF Premium com +50 Jogos</p>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-300">
                  <ShieldCheck className="h-5 w-5 text-green-400" />
                  <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-gray-300">
                  <Lock className="h-5 w-5 text-accent" />
                  <span>Pagamento 100% Seguro</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
