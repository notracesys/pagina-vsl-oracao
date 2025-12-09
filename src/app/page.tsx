import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import WhatYouGet from '@/components/landing/what-you-get';
import Benefits from '@/components/landing/benefits';
import Testimonials from '@/components/landing/testimonials';
import Credibility from '@/components/landing/credibility';
import Pricing from '@/components/landing/pricing';
import Faq from '@/components/landing/faq';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-black overflow-x-hidden">
      <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-b from-[#4a148c] via-[#1a237e] to-black opacity-60"></div>
      <div className="absolute inset-0 z-0 h-full w-full bg-black [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <WhatYouGet />
        <Benefits />
        <Testimonials />
        <Credibility />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
