'use client';

import { useEffect, useState } from 'react';

export default function AnnouncementBar() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    setCurrentDate(`${dd}/${mm}/${yyyy}`);
  }, []);

  return (
    <header className="bg-primary py-3 px-4 text-center sticky top-0 z-50 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <p className="text-white text-xs md:text-sm font-black uppercase tracking-widest">
          Transmissão Especial - Disponível até: <span className="underline">{currentDate}</span>
        </p>
      </div>
    </header>
  );
}
