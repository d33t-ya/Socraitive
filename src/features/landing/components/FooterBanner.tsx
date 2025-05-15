import { BorderGradient } from '@/components/ui/border-gradient';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import { HeartFilledIcon } from '@radix-ui/react-icons';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const FooterBanner = () => {
  return (
    <>
      <section className="relative mx-auto mb-10 max-w-7xl overflow-hidden px-4">
        <BorderGradient containerClassName="w-full" gradientClassName="from-[#4CAF50] via-[#7CB342] to-[#8BC34A]">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 to-black px-6 py-10 sm:px-10 sm:py-16">
            <SparklesEffect count={20} />
            <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
              <div>
                <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                  Start your mental wellness journey today
                </h3>
                <p className="max-w-md text-zinc-400">
                  Join thousands of users who have improved their mental well-being with Emma
                </p>
              </div>
              <Link
                href="/therapist"
                className="inline-flex h-14 items-center justify-center rounded-md bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] px-8 py-3 text-base font-medium text-white shadow-[0_0_20px_rgba(76,175,80,0.3)] transition-all hover:shadow-[0_0_25px_rgba(76,175,80,0.5)] focus:outline-none"
              >
                <HeartFilledIcon className="mr-2 size-5" />
                <span>Get Started for Free</span>
                <ChevronRight className="ml-2 size-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </BorderGradient>
      </section>
    </>
  );
};
