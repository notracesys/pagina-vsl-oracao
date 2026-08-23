'use client';

import { useEffect } from 'react';

export default function VideoHero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/cfe133ca-d157-45df-954e-0c2201e206c8/players/6a6e30ea779ba028a9fd1a92/v4/player.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <section className="text-center mb-8">
      <div className="inline-block bg-primary text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded mb-4 animate-pulse uppercase tracking-tighter">
        Plantão Urgente
      </div>
      <h1 className="text-2xl md:text-5xl font-black leading-tight mb-8 text-[#1a1a1a] tracking-tight">
        Ative o Poder da <span className="text-primary underline decoration-4 underline-offset-4">Oração Sagrada de São Bento</span> que está Destravando Prosperidade...
      </h1>

      <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-black aspect-[3/4] max-w-[420px] mx-auto border-4 border-white">
        {/* Badge AO VIVO no player */}
        <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1.5 shadow-lg">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
          AO VIVO
        </div>
        
        <div id="vid-6a6e30ea779ba028a9fd1a92" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}>
          <div className="vturb-player-placeholder" style={{ position: 'relative', width: '100%', padding: '133.33333333333331% 0 0', zIndex: 0, backgroundColor: 'black' }}></div>
        </div>
      </div>
    </section>
  );
}
