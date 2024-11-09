import React from 'react';
import Link from 'next/link';
import { AccentText } from './accent-text';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-10 w-full border-border/40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-3xl flex h-14 items-center justify-between gap-8 px-12">
        <Link href="/" className="flex items-center gap-0.5 font-medium">
          <AccentText>Socraitive</AccentText>&nbsp;Assignment
        </Link>

        <Link
          href="https://github.com/Swanand-Wagh/Socraitive"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-foreground transition-colors hover:text-foreground/75"
        >
          <span className="font-medium">Swanand Wagh</span>
          <GitHubLogoIcon className="scale-150" />
        </Link>
      </div>
    </header>
  );
};
