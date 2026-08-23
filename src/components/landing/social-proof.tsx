'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SocialProof() {
  const [viewerCount, setViewerCount] = useState(19671);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 10) - 4;
      setViewerCount(prev => prev + change);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center mb-12">
      <div className="flex items-center justify-center gap-2 mb-8">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
        </span>
        <p className="text-gray-700 font-semibold text-sm md:text-base">
          <span>{viewerCount.toLocaleString('pt-BR')}</span> Pessoas assistindo agora!
        </p>
      </div>

      <div className="flex justify-center items-center px-4 opacity-90">
        <Image
          src="https://picsum.photos/seed/logos/800/200"
          alt="Logos de Credibilidade"
          width={800}
          height={200}
          className="max-w-full md:max-w-2xl h-auto"
          data-ai-hint="tv channel logos"
        />
      </div>
    </section>
  );
}
