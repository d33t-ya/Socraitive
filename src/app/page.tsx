import React from 'react';

import { NextPage } from 'next';
import { Home } from '@/features/landing/components';
import { Header, Footer } from '@/components/custom';

const HomePage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 flex-col p-4 sm:p-6 md:p-16">
        <Home />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
