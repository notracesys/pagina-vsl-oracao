'use client';

import { useEffect, useRef } from 'react';

export default function VideoHero() {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/cfe133ca-d157-45df-954e-0c2201e206c8/players/6a6e30ea779ba028a9fd1a92/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Limpeza opcional se necessário
    };
  }, []);

  return (
    <section className="text-center mb-8">
      <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-8 text-[#1a1a1a]">
        Ative o Poder da <span className="text-primary">Oração Sagrada de São Bento</span> que Está Destravando Prosperidade, Curando Doenças e Restaurando Famílias em Todo o Brasil...
      </h1>

      <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black aspect-[3/4] max-w-[400px] mx-auto">
        <div id="vid-6a6e30ea779ba028a9fd1a92" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}>
          <div className="vturb-player-placeholder" style={{ position: 'relative', width: '100%', padding: '133.33333333333331% 0 0', zIndex: 0, backgroundColor: 'black' }}></div>
        </div>
      </div>
    </section>
  );
}
