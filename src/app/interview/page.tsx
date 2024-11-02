import React from 'react';

import { NextPage } from 'next';
import { Interview } from '@/modules/interview';

const InterviewPage: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Interview />
    </div>
  );
};

export default InterviewPage;
