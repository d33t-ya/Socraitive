import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { GalaxySpots } from '@/components/ui/galaxy-spots';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';

import {
  HeartFilledIcon,
  StarFilledIcon,
  ChatBubbleIcon,
  MixerHorizontalIcon,
  LightningBoltIcon,
} from '@radix-ui/react-icons';
import { ShieldIcon } from 'lucide-react';

const features = [
  {
    title: '24/7 Emotional Support',
    description: 'Emma is always available to provide support when you need it most, day or night.',
    icon: <HeartFilledIcon className="size-6 text-[#4CAF50]" />,
    ariaLabel: 'Feature: 24/7 Emotional Support',
  },
  {
    title: 'Personalized Conversations',
    description: 'Each session is tailored to your unique needs, concerns, and emotional state.',
    icon: <ChatBubbleIcon className="size-6 text-[#4CAF50]" />,
    ariaLabel: 'Feature: Personalized Conversations',
  },
  {
    title: 'Voice Interaction',
    description: 'Natural voice conversations make therapy sessions feel more personal and engaging.',
    icon: <MixerHorizontalIcon className="size-6 text-[#4CAF50]" />,
    ariaLabel: 'Feature: Voice Interaction',
  },
  {
    title: 'Progress Tracking',
    description: 'Review your emotional journey and see how your mental well-being improves over time.',
    icon: <StarFilledIcon className="size-6 text-[#4CAF50]" />,
    ariaLabel: 'Feature: Progress Tracking',
  },
  {
    title: 'Quick Response',
    description: 'Emma responds instantly to your concerns with thoughtful, therapeutic guidance.',
    icon: <LightningBoltIcon className="size-6 text-[#4CAF50]" />,
    ariaLabel: 'Feature: Quick Response',
  },
  {
    title: 'Complete Privacy',
    description: 'Your conversations remain private and secure, giving you peace of mind.',
    icon: <ShieldIcon className="size-6 text-[#4CAF50]" />,
    ariaLabel: 'Feature: Complete Privacy',
  },
];

export const Features = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });

  return (
    <>
      <section id="features" className="w-full bg-zinc-950 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="mb-20 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-transparent to-[#4CAF50]"
                initial={{ width: 0 }}
                animate={isTitleInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.8 }}
              ></motion.div>
              <motion.span
                className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-sm font-medium uppercase tracking-wider text-transparent"
                initial={{ opacity: 0 }}
                animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Features
              </motion.span>
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-[#4CAF50] to-transparent"
                initial={{ width: 0 }}
                animate={isTitleInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.8 }}
              ></motion.div>
            </div>
            <Typography
              as="h2"
              variant="h2"
              className="mb-6 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
            >
              How Emma Can Help You
            </Typography>
            <Typography as="p" className="mx-auto max-w-3xl text-lg text-zinc-400">
              Emma combines advanced AI with therapeutic techniques to provide personalized support for your mental
              well-being.
            </Typography>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const featureRef = useRef(null);
              const isFeatureInView = useInView(featureRef, { once: true, amount: 0.2 });

              return (
                <GlowingEffect key={index} containerClassName="h-full">
                  <motion.div
                    ref={featureRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isFeatureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
                    className="h-full"
                    aria-labelledby={`feature-heading-${index}`}
                  >
                    <Card className="group relative h-full border-zinc-800 bg-zinc-900 transition-all duration-200 hover:border-[#4CAF50]/50 hover:bg-zinc-900/80">
                      {/* Add Galaxy Spots for decoration */}
                      <GalaxySpots count={15} />

                      <CardContent className="p-8">
                        <motion.div
                          className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#4CAF50]/10 text-[#4CAF50]"
                          whileHover={{
                            rotate: [0, 10, -10, 10, 0],
                            backgroundColor: 'rgba(76, 175, 80, 0.2)',
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {feature.icon}
                        </motion.div>
                        <Typography
                          as="h3"
                          variant="h3"
                          id={`feature-heading-${index}`}
                          className="mb-3 text-xl font-semibold text-white"
                        >
                          {feature.title}
                        </Typography>
                        <Typography as="p" className="text-zinc-400">
                          {feature.description}
                        </Typography>

                        {/* Animated highlight glow on hover */}
                        <motion.div
                          className="absolute inset-0 -z-10 rounded-xl opacity-0 blur-xl"
                          initial={{
                            opacity: 0,
                            background: 'radial-gradient(circle at center, rgba(76, 175, 80, 0.15), transparent 70%)',
                          }}
                          whileHover={{ opacity: 0.7 }}
                          transition={{ duration: 0.3 }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </GlowingEffect>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
