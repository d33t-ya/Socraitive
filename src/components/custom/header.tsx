'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { AccentText } from './accent-text';
import { GitHubLogoIcon, HeartFilledIcon } from '@radix-ui/react-icons';

export const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/60"
    >
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 md:px-12">
        <Link href="/" className="flex items-center gap-2 font-medium">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#4CAF50] to-[#8BC34A]">
            <HeartFilledIcon className="size-5 text-white" />
          </div>
          <div className="font-normal">
            <span className="font-bold text-white">Emma</span>
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">
              {' '}
              | AI Therapist
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {['Features', 'How it Works', 'Testimonials'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="https://github.com/Swanand-Wagh/Socraitive"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-400 transition-colors hover:text-white sm:gap-2"
          >
            <span className="text-sm font-medium">Github</span>
            <GitHubLogoIcon className="size-4" />
          </Link>

          <Link
            href="/therapist"
            className="hidden rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-[0_0_10px_rgba(76,175,80,0.5)] md:block"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.header>
  );
};
