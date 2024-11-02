'use client';

import { useState } from 'react';

import { Square } from 'lucide-react';
import { AccentButton } from '@/common/components';

import { AI } from './AI';
import { Candidate } from './Candidate';
import { InterviewEnd } from './InterviewEnd';
import { InterviewStart } from './InterviewStart';
import { InterviewHeader } from './InterviewHeader';

type InterviewStatus = 'notStarted' | 'ongoing' | 'ended';

export const Interview = () => {
  const [aiSpeaking, setAISpeaking] = useState<boolean>(false);
  const [personSpeaking, setPersonSpeaking] = useState<boolean>(false);
  const [interviewStatus, setInterviewStatus] = useState<InterviewStatus>('notStarted');

  return (
    <section className="flex w-full max-w-4xl flex-col rounded-lg bg-white px-4">
      <InterviewHeader />

      <div className="my-6 grid grid-cols-2 gap-4">
        <Candidate personSpeaking={personSpeaking} />

        <div className="flex h-96 flex-col gap-4">
          {interviewStatus === 'ongoing' && (
            <span className="ml-auto w-max rounded-2xl bg-[#3a63ff] px-4 py-1 text-sm text-white">00:05:35</span>
          )}

          {interviewStatus === 'ongoing' && <AI aiSpeaking={aiSpeaking} />}

          {interviewStatus === 'ongoing' && (
            <AccentButton className="w-full bg-red-700" onClick={() => setInterviewStatus('ended')}>
              <Square className="mr-2 size-4" />
              End Interview
            </AccentButton>
          )}

          {interviewStatus === 'notStarted' && <InterviewStart setInterviewStatus={setInterviewStatus} />}

          {interviewStatus === 'ended' && <InterviewEnd setInterviewStatus={setInterviewStatus} />}
        </div>
      </div>
    </section>
  );
};
