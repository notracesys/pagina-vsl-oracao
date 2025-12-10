"use client";

import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/shared/countdown-timer";
import { Reveal } from "../shared/reveal";
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Pricing() {
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
  }, []);

  return (
    <section id="comprar" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Acesso Imediato a um Preço Simbólico</h2>
            <p className="text-lg text-gray-400 mb-8">
              Esta oferta especial é por tempo limitado. Garanta seu pack antes que o cronômetro zere!
            </p>

            <div className="glassmorphism p-8 md:p-12">
              <p className="text-xl text-gray-400">De <span className="line-through">R$97,00</span> por apenas:</p>
              <div className="my-4">
                <span className="text-5xl md:text-7xl font-black text-primary">12x</span>
                <span className="text-7xl md:text-9xl font-black text-white ml-2">R$2,25</span>
              </div>
              <p className="font-bold text-white text-xl mb-8">ou R$27,00 à vista</p>
              
              <Link href="https://pay.kirvano.com/415dda1a-220b-4514-983c-c51283359309" target="_blank">
                <Button size="lg" className="w-full text-xl py-8 animate-button-pulse hover:scale-105 transition-transform shine-effect">
                  QUERO GARANTIR MINHAS DEZENAS
                </Button>
              </Link>
              <p className="text-xs text-gray-500 mt-4">Compra segura e entrega automática no seu e-mail.</p>
            </div>

            <div className="mt-12">
              <p className="text-accent font-semibold mb-4">TEMPO RESTANTE PARA O SORTEIO DA MEGA DA VIRADA:</p>
              {targetDate && <CountdownTimer targetDate={targetDate} />}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
