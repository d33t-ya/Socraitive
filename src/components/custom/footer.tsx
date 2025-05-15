'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { GitHubLogoIcon, HeartFilledIcon } from '@radix-ui/react-icons';

export const Footer: React.FunctionComponent = (): JSX.Element => {
  return (
    <footer className="border-t border-zinc-800 bg-black px-4 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center gap-2">
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
            </div>{' '}
            <p className="mb-4 max-w-xs text-sm text-zinc-400">
              A compassionate AI companion designed to provide mental wellness support and guided conversations.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/Swanand-Wagh/Socraitive"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
              >
                <GitHubLogoIcon className="size-4" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-12">
            <div>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-400">Product</h3>{' '}
              <ul className="space-y-2">
                {['Features', 'How It Works', 'Pricing', 'FAQ'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-xs text-zinc-400 hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-400">Support</h3>{' '}
              <ul className="space-y-2">
                {['Documentation', 'Contact', 'Privacy', 'Terms'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-xs text-zinc-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-400">Legal</h3>{' '}
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-xs text-zinc-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-zinc-800 pt-8 md:flex-row">
          <p className="mb-4 text-center text-sm text-zinc-500 md:mb-0">
            © {new Date().getFullYear()} Emma AI Therapist. All rights reserved.
          </p>

          <div className="flex items-center text-center text-sm text-zinc-500">
            <span>Developed by&nbsp;</span>
            <Link
              href="https://github.com/Swanand-Wagh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4CAF50] transition-colors hover:text-[#8BC34A]"
            >
              Swanand Wagh
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
