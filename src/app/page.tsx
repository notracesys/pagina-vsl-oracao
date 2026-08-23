'use client';

import { useEffect, useState } from 'react';
import AnnouncementBar from '@/components/landing/announcement-bar';
import VideoHero from '@/components/landing/video-hero';
import SocialProof from '@/components/landing/social-proof';
import CommentsFeed from '@/components/landing/comments-feed';
import FooterVSL from '@/components/landing/footer-vsl';
import Benefits from '@/components/landing/benefits';
import CountdownTimer from '@/components/shared/countdown-timer';

export default function Home() {
  const [targetDate, setTargetDate] = useState('');

  useEffect(() => {
    // Define a data do sorteio (Mega da Virada como exemplo)
    const currentYear = new Date().getFullYear();
    const drawDate = new Date(`${currentYear}-12-31T20:00:00-03:00`);
    if (drawDate.getTime() < Date.now()) {
      drawDate.setFullYear(currentYear + 1);
    }
    setTargetDate(drawDate.toISOString());
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <AnnouncementBar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 md:py-12 bg-white shadow-xl min-h-screen">
        <VideoHero />
        
        <div className="my-12">
          <Benefits />
        </div>

        {targetDate && (
          <div className="mb-12">
            <CountdownTimer targetDate={targetDate} />
          </div>
        )}

        <SocialProof />
        <CommentsFeed />
      </main>
      <FooterVSL />
    </div>
  );
}
