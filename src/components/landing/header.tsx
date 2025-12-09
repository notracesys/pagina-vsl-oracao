"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-black/50 backdrop-blur-lg border-b border-gray-800" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-20">
        <Link href="#inicio" className="flex items-center gap-2 text-2xl font-black text-white font-headline tracking-tighter">
          Dezenas da <span className="text-primary">Virada</span>
        </Link>
      </div>
    </header>
  );
}
