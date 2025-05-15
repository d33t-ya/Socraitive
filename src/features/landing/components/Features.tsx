import React from 'react';
import { motion } from 'motion/react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { GalaxySpots } from '@/components/ui/galaxy-spots';

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
  },
  {
    title: 'Personalized Conversations',
    description: 'Each session is tailored to your unique needs, concerns, and emotional state.',
    icon: <ChatBubbleIcon className="size-6 text-[#4CAF50]" />,
  },
  {
    title: 'Voice Interaction',
    description: 'Natural voice conversations make therapy sessions feel more personal and engaging.',
    icon: <MixerHorizontalIcon className="size-6 text-[#4CAF50]" />,
  },
  {
    title: 'Progress Tracking',
    description: 'Review your emotional journey and see how your mental well-being improves over time.',
    icon: <StarFilledIcon className="size-6 text-[#4CAF50]" />,
  },
  {
    title: 'Quick Response',
    description: 'Emma responds instantly to your concerns with thoughtful, therapeutic guidance.',
    icon: <LightningBoltIcon className="size-6 text-[#4CAF50]" />,
  },
  {
    title: 'Complete Privacy',
    description: 'Your conversations remain private and secure, giving you peace of mind.',
    icon: <ShieldIcon className="size-6 text-[#4CAF50]" />,
  },
];

export const Features = () => {
  return (
    <>
      <section id="features" className="w-full bg-zinc-950 py-20 md:py-32">
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
                Features
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-[#4CAF50] to-transparent"></div>
            </div>
            <h2 className="mb-6 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              How Emma Can Help You
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-zinc-400">
              Emma combines advanced AI with therapeutic techniques to provide personalized support for your mental
              well-being.
            </p>
          </motion.div>{' '}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <GlowingEffect key={index} containerClassName="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-200 hover:border-[#4CAF50]/50 hover:bg-zinc-900/80"
                >
                  {/* Add Galaxy Spots for decoration */}
                  <GalaxySpots count={15} />

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#4CAF50]/10 text-[#4CAF50]">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </motion.div>
              </GlowingEffect>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
