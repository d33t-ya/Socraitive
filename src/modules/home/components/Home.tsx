import React from 'react';
import Link from 'next/link';

import { cn } from '@/common/lib/utils';
import { PersonIcon, PlayIcon } from '@radix-ui/react-icons';
import { accentButtonClassnames, AccentText } from '@/common/components';

export const Home = () => {
  return (
    <section className="my-auto flex items-center justify-center">
      <div className="flex flex-col rounded-lg bg-white px-8">
        <h1 className="mx-auto w-full border-b border-[#3a63ff]/30 py-5 text-center text-2xl font-bold text-[#3a63ff]">
          AI Interview Platform
        </h1>

        <div className="flex items-start gap-2 py-5">
          <span className="flex aspect-square items-center justify-center rounded-full bg-border p-1.5">
            <PersonIcon className="size-4" />
          </span>
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold leading-tight">AI Interviewer</h2>
            <p className="text-sm text-muted-foreground">
              Powered by&nbsp;<AccentText>Apriora</AccentText>
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
    </section>
  );
};
