"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { name: 'Início', href: '#inicio' },
  { name: 'O que você recebe', href: '#o-que-voce-recebe' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="#inicio" className="text-2xl font-black text-white font-headline tracking-tighter">
          MegaPack<span className="text-primary">2024</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:block hover:scale-105 transition-transform">
            <Link href="#inicio">Comprar Agora</Link>
          </Button>

          <div className="md:hidden">
           {isMounted && (
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900/95 backdrop-blur-lg border-l-gray-800">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b border-gray-800">
                    <Link href="#inicio" className="text-xl font-bold text-white font-headline" onClick={() => setIsMenuOpen(false)}>
                      MegaPack<span className="text-primary">2024</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <nav className="flex flex-col items-start space-y-4 p-4">
                    {navItems.map((item) => (
                      <Link key={item.name} href={item.href} className="text-lg text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-4">
                    <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                        <Link href="#inicio">Comprar Agora</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
           )}
          </div>
        </div>
      </div>
    </header>
  );
}
