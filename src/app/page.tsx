'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Benefits from '@/components/landing/benefits';
import Testimonials from '@/components/landing/testimonials';
import Footer from '@/components/landing/footer';
import CountdownTimer from '@/components/shared/countdown-timer';
import { Reveal } from '@/components/shared/reveal';

export default function Home() {
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
    <div className="flex flex-col min-h-screen w-full bg-[#0c1a12] overflow-x-hidden">
      <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-b from-primary/30 via-background/10 to-[#0c1a12] opacity-80"></div>
      <div className="absolute inset-0 z-0 h-full w-full bg-[#0c1a12] [background:radial-gradient(125%_125%_at_50%_10%,#0c1a12_40%,#3d8b58_100%)] opacity-30"></div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <Benefits />
        <div className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              {targetDate && <CountdownTimer targetDate={targetDate} />}
            </Reveal>
          </div>
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
