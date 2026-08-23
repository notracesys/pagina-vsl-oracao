'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';

export default function SocialProof() {
  const [viewerCount, setViewerCount] = useState(19671);

  useEffect(() => {
    const interval = setInterval(() => {
      // Variação realista para simular entrada e saída de pessoas
      const change = Math.floor(Math.random() * 21) - 10; 
      setViewerCount(prev => Math.max(18000, prev + change));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center mb-12">
      <div className="flex flex-col items-center justify-center gap-4 mb-8">
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
          <Users className="w-4 h-4 text-gray-600" />
          <p className="text-gray-800 font-bold text-xs md:text-sm">
            <span className="text-red-600 tabular-nums">{viewerCount.toLocaleString('pt-BR')}</span> assistindo agora
          </p>
        </div>
        
        <div className="w-full max-w-[300px] h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-red-600 w-3/4 animate-pulse"></div>
        </div>
      </div>

      <div className="flex justify-center items-center px-4 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
        <Image
          src="https://picsum.photos/seed/logos/800/200"
          alt="Logos de Credibilidade"
          width={600}
          height={150}
          className="max-w-full md:max-w-xl h-auto"
          data-ai-hint="tv network logos"
        />
      </div>
    </section>
  );
}
