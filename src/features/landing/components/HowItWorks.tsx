import React from 'react';
import { motion } from 'motion/react';
import { PlayIcon } from '@radix-ui/react-icons';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import { Card } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { steps } from '../constants/howItWorks';

export const HowItWorks = () => {
  return (
    <>
      <section id="how-it-works" className="relative w-full bg-black py-20 md:py-32">
        <SparklesEffect count={35} />

        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-20 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-transparent to-[#4CAF50]"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8 }}
              ></motion.div>
              <motion.span
                className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-sm font-medium uppercase tracking-wider text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Process
              </motion.span>
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-[#4CAF50] to-transparent"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8 }}
              ></motion.div>
            </div>
            <Typography
              as="h2"
              variant="h2"
              className="mb-6 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
            >
              How It Works
            </Typography>
            <Typography as="p" className="mx-auto max-w-3xl text-lg text-zinc-400">
              Emma uses voice interaction to create a natural and engaging therapeutic experience
            </Typography>
          </motion.div>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Animated Connecting Line */}
            <motion.div
              className="absolute top-10 z-0 hidden h-1 w-full translate-y-1 bg-gradient-to-r from-[#4CAF50]/20 via-[#8BC34A]/20 to-[#4CAF50]/20 lg:block"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
            ></motion.div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
                aria-label={`Step ${index + 1}: ${step.title}`}
              >
                <motion.div
                  className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#4CAF50] bg-black text-white"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(76, 175, 80, 0.5)',
                    transition: { type: 'spring', stiffness: 400, damping: 10 },
                  }}
                >
                  <motion.div
                    className="absolute -inset-1 rounded-full opacity-0"
                    animate={{
                      boxShadow: ['0 0 0 0px rgba(76, 175, 80, 0.3)', '0 0 0 10px rgba(76, 175, 80, 0)'],
                      opacity: [1, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 + 0.5 }}
                  />
                  <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-2xl font-bold text-transparent">
                    {index + 1}
                  </span>
                </motion.div>

                <Card className="border-none bg-transparent">
                  <Typography as="h3" variant="h3" className="mb-4 text-2xl font-bold text-white">
                    {step.title}
                  </Typography>
                  <Typography as="p" className="max-w-xs text-zinc-400">
                    {step.description}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="group flex items-center gap-3 rounded-full bg-[#4CAF50]/15 px-6 py-8 text-white backdrop-blur-sm transition-all hover:border-[#4CAF50] hover:bg-[#4CAF50]/20"
              aria-label="Watch video demonstrating how Emma works"
            >
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute h-12 w-12 rounded-full bg-[#4CAF50]/30"
                />
                <PlayIcon className="size-5 text-white" />
              </motion.div>
              <span className="text-white">See how Emma works</span>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
