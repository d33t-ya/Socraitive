import React from 'react';

import { NextPage } from 'next';
import { Home } from '@/modules/home';
import { Header, Footer } from '@/common/components';

const HomePage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 flex-col p-12">
        <Home />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
