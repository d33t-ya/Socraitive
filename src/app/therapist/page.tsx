'use client';

import React from 'react';
import { NextPage } from 'next';
import { Therapy } from '@/features/therapist/components';
import { ResizableNavbar } from '@/components/ui/resizable-navbar';
import { Footer } from '@/components/custom/footer';
import { GalaxySpots } from '@/components/ui/galaxy-spots';

const TherapyPage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <ResizableNavbar />

      <div className="md:pb-21 relative flex flex-1 items-center justify-center pt-24 md:pt-32">
        <GalaxySpots count={30} />

        <Therapy />
      </div>
      <Footer />
    </div>
  );
};

export default TherapyPage;
