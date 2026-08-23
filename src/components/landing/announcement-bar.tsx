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
    <header className="bg-primary py-2 px-4 text-center">
      <p className="text-white text-sm md:text-base font-bold">
        Você não chegou aqui por acaso, essa live ficará disponível até hoje dia: <span>{currentDate}</span>
      </p>
    </header>
  );
}
