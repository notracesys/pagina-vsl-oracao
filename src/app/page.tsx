'use client';

import { useEffect, useState } from 'react';
import AnnouncementBar from '@/components/landing/announcement-bar';
import VideoHero from '@/components/landing/video-hero';
import SocialProof from '@/components/landing/social-proof';
import CommentsFeed from '@/components/landing/comments-feed';
import FooterVSL from '@/components/landing/footer-vsl';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AnnouncementBar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        <VideoHero />
        <SocialProof />
        <CommentsFeed />
      </main>
      <FooterVSL />
    </div>
  );
}
