'use client';

import { useState } from 'react';
import { InterviewHeader } from './InterviewHeader';

type InterviewStatus = 'notStarted' | 'ongoing' | 'ended';

export const Interview = () => {
  return (
    <section className="flex w-full max-w-4xl flex-col rounded-lg bg-white px-4">
      <InterviewHeader />
    </section>
  );
};
