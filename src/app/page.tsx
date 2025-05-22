import React from 'react';

import { NextPage } from 'next';
import { Home } from '@/features/landing/components';
import { Header, Footer } from '@/components/custom';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emma AI Therapist - Your AI Mental Health Companion',
  description: 'Emma is an AI therapist designed to provide mental health support through natural conversations.',
};

const HomePage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <main className="flex flex-1 flex-col">
        <Home />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
