import React from 'react';
import { motion } from 'motion/react';
import { PlayIcon } from '@radix-ui/react-icons';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import { steps } from '../constants/howItWorks';

export const HowItWorks = () => {
  return (
    <>
      <section className="relative w-full bg-black py-20 md:py-32">
        <SparklesEffect count={35} />

        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4CAF50]"></div>
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-sm font-medium uppercase tracking-wider text-transparent">
                Process
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-[#4CAF50] to-transparent"></div>
            </div>
            <h2 className="mb-6 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-zinc-400">
              Emma uses voice interaction to create a natural and engaging therapeutic experience
            </p>
          </motion.div>{' '}
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Connecting Line */}
            <div className="absolute top-10 z-0 hidden h-1 w-full translate-y-1 bg-gradient-to-r from-[#4CAF50]/20 via-[#8BC34A]/20 to-[#4CAF50]/20 lg:block"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#4CAF50] bg-black text-white">
                  <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-2xl font-bold text-transparent">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">{step.title}</h3>
                <p className="max-w-xs text-zinc-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="group flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]">
                <PlayIcon className="size-5 text-white" />
              </div>
              <span>See how Emma works</span>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
