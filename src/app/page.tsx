import React from 'react';

import { NextPage } from 'next';
import { Home } from '@/features/landing/components';
import { Header, Footer } from '@/components/custom';

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
