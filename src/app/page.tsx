import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import WhatYouGet from '@/components/landing/what-you-get';
import Benefits from '@/components/landing/benefits';
import Testimonials from '@/components/landing/testimonials';
import Credibility from '@/components/landing/credibility';
import Faq from '@/components/landing/faq';
import Pricing from '@/components/landing/pricing';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0c1a12] overflow-x-hidden">
      <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-b from-primary/30 via-background/10 to-[#0c1a12] opacity-80"></div>
      <div className="absolute inset-0 z-0 h-full w-full bg-[#0c1a12] [background:radial-gradient(125%_125%_at_50%_10%,#0c1a12_40%,#3d8b58_100%)] opacity-30"></div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
