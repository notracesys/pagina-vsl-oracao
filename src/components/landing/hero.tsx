"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Lock, FileText } from 'lucide-react';
import CountdownTimer from '../shared/countdown-timer';

export default function Hero() {
  
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-24">
      <div className="absolute inset-0 z-0">
        {/* Floating numbers removed */}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        <div className="animate-in fade-in slide-in-from-bottom-16 duration-1000">
          <h1 className="text-4xl md:text-6xl font-black text-white font-headline leading-tight tracking-tighter">
            <span className="text-primary">+50 Jogos Prontos</span> Para a Mega da Virada
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            A escolha inteligente para quem quer aumentar as chances com combinações estudadas e geradas por matemáticos, economizando tempo и esforço.
          </p>
        </div>
        
        <div className="mt-10 animate-in fade-in slide-in-from-bottom-16 duration-1000 w-full" style={{animationDelay: "200ms"}}>
            <div className="glassmorphism p-8 md:p-10 max-w-lg mx-auto">
              <p className="text-xl text-white">De <span className="line-through">R$20,00</span> por apenas:</p>
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
