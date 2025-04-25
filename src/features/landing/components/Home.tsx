import React from 'react';
import Link from 'next/link';

import { cn } from '@/features/landing/lib/utils';
import { PersonIcon, PlayIcon, HeartFilledIcon } from '@radix-ui/react-icons';
import { accentButtonClassnames, AccentText } from '@/components/custom';

export const Home = () => {
  return (
    <section className="my-auto flex w-full items-center justify-center gap-8">
      {/* AI Interviewer Card */}
      <div className="flex flex-col rounded-lg bg-white px-8 shadow-md">
        <h1 className="mx-auto w-full border-b border-[#3a63ff]/30 py-5 text-center text-2xl font-bold text-[#3a63ff]">
          AI Interviewer
        </h1>

        <div className="flex items-start gap-2 py-5">
          <span className="flex aspect-square items-center justify-center rounded-full bg-border p-1.5">
            <PersonIcon className="size-4" />
          </span>
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold leading-tight">Career Development</h2>
            <p className="text-sm text-muted-foreground">
              Powered by&nbsp;<AccentText>Socraitive</AccentText>
            </p>
          </div>
        </div>

        <div className="my-4 flex flex-col items-center justify-center gap-2">
          <p className="text-balance text-center">Welcome to your AI Interview Experience.</p>
          <p className="text-balance text-center">Here you can take interviews and get feedback from AI.</p>
          <p className="text-balance text-center">
            Click &quot;Let&apos;s Get Started&quot; button to begin your interview. The AI will guide you through a
            series of questions.
          </p>
          <p className="text-balance border-b border-current text-center text-sm text-muted-foreground">
            Ensure your microphone is enabled for the best experience.
          </p>
        </div>

        <Link href="/interview" className={cn(accentButtonClassnames, 'mb-8 mt-6')}>
          <PlayIcon className="mr-2 size-4" />
          Let&apos;s Get Started
        </Link>
      </div>

      {/* AI Therapist Card */}
      <div className="flex flex-col rounded-lg bg-white px-8 shadow-md">
        <h1 className="mx-auto w-full border-b border-[#4CAF50]/30 py-5 text-center text-2xl font-bold text-[#4CAF50]">
          AI Therapist
        </h1>

        <div className="flex items-start gap-2 py-5">
          <span className="flex aspect-square items-center justify-center rounded-full bg-border p-1.5">
            <HeartFilledIcon className="size-4" />
          </span>
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold leading-tight">Mental Wellness</h2>
            <p className="text-sm text-muted-foreground">
              Powered by&nbsp;<AccentText>Socraitive</AccentText>
            </p>
          </div>
        </div>

        <div className="my-4 flex flex-col items-center justify-center gap-2">
          <p className="text-balance text-center">Welcome to your AI Therapy Experience.</p>
          <p className="text-balance text-center">Here you can have supportive conversations about mental wellness.</p>
          <p className="text-balance text-center">
            Click &quot;Start Session&quot; button to begin your therapy session. The AI will provide a safe space for
            discussion.
          </p>
          <p className="text-balance border-b border-current text-center text-sm text-muted-foreground">
            Ensure your microphone is enabled for the best experience.
          </p>
        </div>

        <Link
          href="/therapy"
          className={cn(
            'mb-8 mt-6 inline-flex h-10 items-center justify-center rounded-md bg-[#4CAF50] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3e8e41] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50'
          )}
        >
          <HeartFilledIcon className="mr-2 size-4" />
          Start Session
        </Link>
      </div>
    </section>
  );
};
