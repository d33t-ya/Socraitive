import React from 'react';

import { NextPage } from 'next';
import { Therapy } from '@/features/therapist/components';

const TherapyPage: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Therapy />
    </div>
  );
};

export default TherapyPage;
