'use client';

import React from 'react';
import { FooterBanner } from './FooterBanner';
import { FAQSection } from './FAQ';
import { Partnerships } from './Partnerships';
import { Testimonials } from './Testimonials';
import { HowItWorks } from './HowItWorks';
import { Features } from './Features';
import { Hero } from './Hero';

export const Home = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Partnerships />
      <FAQSection />
      <FooterBanner />
    </div>
  );
};
