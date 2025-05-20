import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'motion/react';
import { HeartFilledIcon, LightningBoltIcon } from '@radix-ui/react-icons';
import { ChevronRight, Users, Bot, MousePointerClick } from 'lucide-react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import { BorderGradient } from '@/components/ui/border-gradient';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

export const Hero = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <>
      <section className="relative flex min-h-[85vh] w-full flex-col items-center overflow-hidden bg-black py-16 md:py-24">
        {/* Aceternity-inspired background effects */}
        <BackgroundBeams />
        <SparklesEffect />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,175,80,0.12),transparent_70%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Light flares with enhanced animation */}
        <motion.div
          className="absolute left-1/4 top-1/4 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4CAF50]/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-1/3 w-1/3 translate-x-1/2 translate-y-1/2 rounded-full bg-[#4CAF50]/5 blur-3xl"
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ opacity: 0.6, scale: 1.1 }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />

        {/* Hero Content */}
        <div className="container z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-12 md:mt-16"
          >
            <Typography
              as="h1"
              variant="h1"
              className="mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-7xl"
            >
              Meet{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">Emma</span>,
              Your AI Therapist
            </Typography>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Typography as="p" className="mx-auto mb-8 mt-6 max-w-3xl text-lg text-zinc-400 md:text-xl">
                A compassionate AI companion designed to provide mental wellness support, guided conversations, and a
                safe space for emotional well-being.
              </Typography>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                asChild
                variant="accent"
                size="xl"
                className="group relative overflow-hidden"
                aria-label="Begin therapy session with Emma"
              >
                <Link href="/therapist">
                  <HeartFilledIcon className="mr-2 size-5" />
                  <span>Start Your Therapy Session</span>
                  <motion.span
                    className="absolute inset-0 -z-10 bg-white/10"
                    initial={{ left: '-100%' }}
                    whileHover={{ left: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                asChild
                variant="outline"
                size="xl"
                className="group relative overflow-hidden border-[#4CAF50]/30 bg-transparent text-white hover:border-[#4CAF50]/60 hover:bg-[#4CAF50]/5"
                aria-label="Learn more about Emma's features"
              >
                <Link href="#features">
                  <span className="text-white">Learn More</span>
                  <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                  <motion.span
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-[#4CAF50]/0 via-[#4CAF50]/5 to-[#4CAF50]/0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Modern chat mockup with gradient border and card component */}
          <BorderGradient containerClassName="w-full max-w-4xl mt-6 md:mt-8">
            <Card className="overflow-hidden border-none bg-zinc-900/80 backdrop-blur-sm">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <CardHeader className="border-b border-zinc-800 bg-zinc-900 p-4">
                  <div className="flex items-center gap-3">
                    <motion.span
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/20 p-1.5"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <HeartFilledIcon className="size-5 text-[#4CAF50]" />
                    </motion.span>
                    <div>
                      <Typography as="h3" variant="h4" className="font-medium text-white">
                        Emma - AI Therapist
                      </Typography>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <motion.span
                          className="h-1.5 w-1.5 rounded-full bg-green-500"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        ></motion.span>
                        <span>Online now</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="h-64 overflow-y-auto p-4 md:h-72">
                  <div className="mb-4 flex justify-end">
                    <motion.div
                      className="max-w-[80%] rounded-xl rounded-tr-none bg-zinc-800 p-3 text-white"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-sm">
                        I've been feeling really anxious about my new job. It's overwhelming me.
                      </p>
                    </motion.div>
                  </div>
                  <motion.div
                    className="mb-4 flex"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="max-w-[80%] rounded-xl rounded-tl-none bg-[#4CAF50]/10 p-3 text-zinc-200">
                      <p className="text-sm">
                        I understand that new jobs can bring a lot of uncertainty and pressure. It's completely normal
                        to feel anxious in this situation. Would you like to talk about what specifically feels
                        overwhelming?
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="mb-4 flex justify-end"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="max-w-[80%] rounded-xl rounded-tr-none bg-zinc-800 p-3 text-white">
                      <p className="text-sm">
                        I think it's the expectations. I'm afraid I won't be able to perform well.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="max-w-[80%] rounded-xl rounded-tl-none bg-[#4CAF50]/10 p-3 text-zinc-200">
                      <p className="text-sm">
                        That concern is very common. Let's explore some strategies that might help you manage these
                        feelings and build confidence in your abilities...
                      </p>
                    </div>
                  </motion.div>
                </CardContent>

                {/* Chat input bar */}
                <CardFooter className="border-t border-zinc-800 bg-zinc-900/50 p-3">
                  <div className="flex w-full items-center gap-2">
                    <motion.div
                      className="flex flex-1 items-center rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2"
                      whileHover={{ borderColor: 'rgba(76, 175, 80, 0.5)' }}
                    >
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                        disabled
                        aria-label="Chat message input (display only)"
                      />
                      <motion.button
                        className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#4CAF50] text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        aria-label="Send message (display only)"
                      >
                        <ChevronRight className="size-4" />
                      </motion.button>
                    </motion.div>
                  </div>
                </CardFooter>
              </motion.div>
            </Card>
          </BorderGradient>

          {/* Stats bar with improved animations */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0 }}
            animate={isStatsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
          >
            {[
              {
                value: '98%',
                label: 'Satisfaction Rate',
                icon: <Users className="size-5" />,
                ariaLabel: '98 percent satisfaction rate',
              },
              {
                value: '24/7',
                label: 'Support Availability',
                icon: <HeartFilledIcon className="size-5" />,
                ariaLabel: '24/7 support availability',
              },
              {
                value: '500ms',
                label: 'Avg. Response Time',
                icon: <LightningBoltIcon className="size-5" />,
                ariaLabel: '500 millisecond average response time',
              },
              {
                value: 'AI',
                label: 'Powered by GPT-4',
                icon: <Bot className="size-5" />,
                ariaLabel: 'Powered by GPT-4 AI',
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 400, damping: 10 },
                }}
                aria-label={stat.ariaLabel}
              >
                <motion.div
                  className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[#4CAF50]"
                  whileHover={{
                    backgroundColor: 'rgba(76, 175, 80, 0.15)',
                    rotate: [0, 10, -10, 10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className="text-sm text-zinc-400"
                  initial={{ opacity: 0 }}
                  animate={isStatsInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="relative top-14 max-sm:top-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <Typography as="span" variant="small" className="text-zinc-500">
                Scroll to explore
              </Typography>
              <MousePointerClick className="size-5 text-[#4CAF50]" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
