import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WelcomeHeader = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm md:flex-row md:items-center"
      >
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Swanand</h1>
          <p className="mt-1 text-zinc-400">Here's an overview of your therapy journey</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link href="/therapist">
            <Button variant="accent" size="lg" className="w-full sm:w-auto">
              <PlayCircle className="mr-2 h-4 w-4" />
              Start New Session
            </Button>
          </Link>
          <Link href="/dashboard/reports">
            <Button
              variant="outline"
              size="lg"
              className="w-full border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:text-white sm:w-auto"
            >
              View All Reports
            </Button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};
