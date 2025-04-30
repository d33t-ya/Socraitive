import React from 'react';

import { NextPage } from 'next';
import { Therapy } from '@/features/therapist/components';

const TherapyPage: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-2 sm:p-4 md:p-6">
      <Therapy />
    </div>
  );
};

export default TherapyPage;
