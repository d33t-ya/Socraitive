import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { HeartFilledIcon, LightningBoltIcon } from '@radix-ui/react-icons';
import { ChevronRight, Users, Bot } from 'lucide-react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import { BorderGradient } from '@/components/ui/border-gradient';

export const Hero = () => {
  return (
    <>
      <section className="relative flex min-h-[85vh] w-full flex-col items-center overflow-hidden bg-black py-16 md:py-24">
        {/* Aceternity-inspired background effects */}
        <BackgroundBeams />
        <SparklesEffect />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,175,80,0.1),transparent_70%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Light flares */}
        <div className="absolute left-1/4 top-1/4 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4CAF50]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-1/3 w-1/3 translate-x-1/2 translate-y-1/2 rounded-full bg-[#4CAF50]/5 blur-3xl" />

        {/* Hero Content */}
        <div className="container z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-12 md:mt-16"
          >
            <h1 className="mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-7xl">
              Meet{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">Emma</span>,
              Your AI Therapist
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mb-8 mt-6 max-w-3xl text-lg text-zinc-400 md:text-xl"
            >
              A compassionate AI companion designed to provide mental wellness support, guided conversations, and a safe
              space for emotional well-being.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/therapist"
              className={cn(
                'inline-flex h-14 items-center justify-center rounded-md bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] px-8 py-3 text-base font-medium text-white shadow-[0_0_20px_rgba(76,175,80,0.3)] transition-all hover:shadow-[0_0_25px_rgba(76,175,80,0.5)] focus:outline-none'
              )}
            >
              <HeartFilledIcon className="mr-2 size-5" />
              Start Your Therapy Session
            </Link>
            <Link
              href="#features"
              className="group inline-flex h-14 items-center justify-center rounded-md border border-zinc-700 bg-transparent px-8 py-3 text-base font-medium text-white transition-all hover:bg-white/5"
            >
              Learn More
              <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Modern chat mockup with gradient border */}
          <BorderGradient containerClassName="w-full max-w-4xl mt-6 md:mt-8">
            <motion.div
              className="overflow-hidden rounded-xl bg-zinc-900/80 backdrop-blur-sm"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="border-b border-zinc-800 bg-zinc-900 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/20 p-1.5">
                    <HeartFilledIcon className="size-5 text-[#4CAF50]" />
                  </span>
                  <div>
                    <h3 className="font-medium text-white">Emma - AI Therapist</h3>
                    <div className="flex items-center gap-1 text-xs text-zinc-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                      <span>Online now</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-64 overflow-y-auto p-4 md:h-72">
                <div className="mb-4 flex justify-end">
                  <div className="max-w-[80%] rounded-xl rounded-tr-none bg-zinc-800 p-3 text-white">
                    <p className="text-sm">I've been feeling really anxious about my new job. It's overwhelming me.</p>
                  </div>
                </div>
                <div className="mb-4 flex">
                  <div className="max-w-[80%] rounded-xl rounded-tl-none bg-[#4CAF50]/10 p-3 text-zinc-200">
                    <p className="text-sm">
                      I understand that new jobs can bring a lot of uncertainty and pressure. It's completely normal to
                      feel anxious in this situation. Would you like to talk about what specifically feels overwhelming?
                    </p>
                  </div>
                </div>
                <div className="mb-4 flex justify-end">
                  <div className="max-w-[80%] rounded-xl rounded-tr-none bg-zinc-800 p-3 text-white">
                    <p className="text-sm">
                      I think it's the expectations. I'm afraid I won't be able to perform well.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="max-w-[80%] rounded-xl rounded-tl-none bg-[#4CAF50]/10 p-3 text-zinc-200">
                    <p className="text-sm">
                      That concern is very common. Let's explore some strategies that might help you manage these
                      feelings and build confidence in your abilities...
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat input bar */}
              <div className="border-t border-zinc-800 bg-zinc-900/50 p-3">
                <div className="flex items-center gap-2">
                  <div className="flex flex-1 items-center rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                      disabled
                    />
                    <button className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#4CAF50] text-white">
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </BorderGradient>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
          >
            {[
              { value: '98%', label: 'Satisfaction Rate', icon: <Users className="size-5" /> },
              { value: '24/7', label: 'Support Availability', icon: <HeartFilledIcon className="size-5" /> },
              { value: '500ms', label: 'Avg. Response Time', icon: <LightningBoltIcon className="size-5" /> },
              { value: 'AI', label: 'Powered by GPT-4', icon: <Bot className="size-5" /> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[#4CAF50]">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};
