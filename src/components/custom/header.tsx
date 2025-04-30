import React from 'react';
import Link from 'next/link';
import { AccentText } from './accent-text';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-10 w-full border-border/40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 md:px-12">
        <Link href="/" className="flex items-center gap-0.5 font-medium">
          <div className="font-normal text-[#3a63ff]">
            Socr<span className="font-extrabold text-[#3e8e41]">ai</span>tive
          </div>
          &nbsp;
        </Link>

        <Link
          href="https://github.com/Swanand-Wagh/Socraitive"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-foreground transition-colors hover:text-foreground/75 sm:gap-3"
        >
          <span className="text-sm font-medium sm:text-base">Swanand Wagh</span>
          <GitHubLogoIcon className="scale-125 sm:scale-150" />
        </Link>
      </div>
    </header>
  );
};
