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

          {/* Video demo with gradient border */}
          <BorderGradient containerClassName="w-full max-w-4xl mt-6 md:mt-8">
            <Card className="overflow-hidden border-none bg-zinc-900/80 backdrop-blur-sm">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative"
              >
                <div className="relative">
                  {/* Video player that plays infinitely without controls */}
                  <video autoPlay loop muted playsInline className="h-auto w-full" style={{ aspectRatio: '16/9' }}>
                    <source src="/emma_demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
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
