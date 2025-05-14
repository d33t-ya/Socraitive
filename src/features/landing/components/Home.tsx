'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';
import {
  PersonIcon,
  PlayIcon,
  HeartFilledIcon,
  StarFilledIcon,
  ChatBubbleIcon,
  CheckIcon,
  MixerHorizontalIcon,
  LightningBoltIcon,
} from '@radix-ui/react-icons';
import { ShieldIcon, ChevronRight, Users, Sparkles, Bot } from 'lucide-react';
import { accentButtonClassnames, AccentText } from '@/components/custom';

// Features data for the features section
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

// Steps data for how it works section
const steps = [
  {
    title: 'Start a Session',
    description: "Click the 'Start Session' button to begin your conversation with Emma, your AI therapist.",
  },
  {
    title: 'Share Your Thoughts',
    description: "Speak naturally about your feelings, concerns, or anything you'd like to discuss.",
  },
  {
    title: 'Receive Support',
    description: 'Emma listens, responds with empathy, and provides personalized therapeutic guidance.',
  },
];

// Import our new components
import { BackgroundBeams } from '@/components/ui/background-beams';
import { FloatingCards } from '@/components/ui/floating-cards';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import { BorderGradient } from '@/components/ui/border-gradient';

export const Home = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="flex w-full flex-1 flex-col items-center">
      {/* Hero Section */}
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
          {/* Secondary floating decorations */}
          <FloatingCards />

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
              className="mb-8 mt-6 max-w-3xl text-lg text-zinc-400 md:text-xl"
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
              { value: '5s', label: 'Avg. Response Time', icon: <LightningBoltIcon className="size-5" /> },
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
      </section>{' '}
      {/* Features Section */}
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
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-200 hover:border-[#4CAF50]/50 hover:bg-zinc-900/80"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 -z-10 rounded-xl bg-[radial-gradient(circle_at_center,rgba(76,175,80,0.15),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#4CAF50]/10 text-[#4CAF50]">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>{' '}
      {/* How It Works */}
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
          </motion.div>

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Connecting Line */}
            <div className="absolute top-10 z-0 hidden h-1 w-full translate-y-1 bg-gradient-to-r from-[#4CAF50]/20 via-[#8BC34A]/20 to-[#4CAF50]/20 md:block"></div>

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

          {/* Demo Button */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setIsVideoPlaying(true)}
              className="group flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]">
                <PlayIcon className="size-5 text-white" />
              </div>
              <span>See how Emma works</span>
            </button>
          </motion.div>
        </div>
      </section>{' '}
      {/* Testimonials Section */}
      <section className="w-full bg-zinc-950 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4CAF50]"></div>
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-sm font-medium uppercase tracking-wider text-transparent">
                Testimonials
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-[#4CAF50] to-transparent"></div>
            </div>
            <h2 className="mb-6 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              What Our Users Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                text: 'Emma has been a lifesaver for me. The AI understands my anxiety and provides practical advice that actually helps.',
                name: 'Sarah K.',
                title: 'Marketing Professional',
              },
              {
                text: 'I was skeptical at first, but Emma genuinely feels like talking to a real therapist. The voice interactions make it so natural.',
                name: 'Michael T.',
                title: 'Software Engineer',
              },
              {
                text: "Having Emma available 24/7 has made a huge difference in managing my stress levels. It's like having support whenever I need it.",
                name: 'Jessica L.',
                title: 'Healthcare Worker',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-xl border border-zinc-800 bg-zinc-900 p-6"
              >
                <div className="mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarFilledIcon key={i} className="mr-1 inline size-4 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-zinc-300">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/20 text-[#4CAF50]">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-xs text-zinc-500">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative w-full overflow-hidden bg-black py-24 text-white md:py-32">
        <BackgroundBeams />

        {/* Gradient orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#4CAF50]/5 blur-3xl"></div>
          <div className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-[#8BC34A]/5 blur-3xl"></div>
        </motion.div>

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 inline-flex items-center justify-center rounded-full border border-[#4CAF50]/30 bg-[#4CAF50]/10 px-4 py-2">
              <Sparkles className="mr-2 size-4 text-[#4CAF50]" />
              <span className="text-sm text-[#4CAF50]">Start Your Journey Today</span>
            </div>

            <h2 className="mb-6 max-w-3xl bg-gradient-to-r from-white via-white to-zinc-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              Ready to Experience Better Mental Well-being?
            </h2>

            <p className="mb-10 max-w-2xl text-lg text-zinc-400">
              Take the first step toward better mental health with Emma, your AI therapy companion. All conversations
              are private and designed to support your well-being.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] opacity-70 blur-lg"></div>
              <Link
                href="/therapist"
                className="relative inline-flex h-16 items-center justify-center rounded-xl bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] px-10 py-4 text-lg font-medium text-white shadow-lg transition-all hover:shadow-xl"
              >
                <HeartFilledIcon className="mr-2 size-5" />
                Start Your Session Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>{' '}
      {/* Services Section */}
      <section className="container mx-auto my-24 max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4CAF50]"></div>
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-sm font-medium uppercase tracking-wider text-transparent">
              Services
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-[#4CAF50] to-transparent"></div>
          </div>
          <h2 className="mb-6 bg-gradient-to-b from-black to-zinc-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Our AI Solutions
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600">
            Choose from our specialized AI-powered experiences designed to support different aspects of your life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* AI Therapist Card */}
          <BorderGradient containerClassName="h-full" gradientClassName="from-[#4CAF50] via-[#7CB342] to-[#8BC34A]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex h-full flex-1 flex-col overflow-hidden rounded-xl bg-white"
            >
              <div className="border-b border-[#4CAF50]/30 bg-gradient-to-r from-[#4CAF50]/5 to-transparent px-6 py-5 sm:px-8">
                <div className="flex items-start gap-3">
                  <div className="flex aspect-square items-center justify-center rounded-full bg-[#4CAF50]/10 p-2">
                    <HeartFilledIcon className="size-5 text-[#4CAF50]" />
                  </div>
                  <div className="flex flex-col items-start">
                    <h2 className="text-xl font-bold text-[#4CAF50]">Emma AI Therapist</h2>
                    <p className="text-sm text-gray-600">Mental Wellness Support</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="mb-6 flex flex-col gap-3">
                  <p className="text-balance text-center text-base sm:text-lg">Welcome to your AI Therapy Experience</p>
                  <p className="text-balance text-center text-base">
                    Here you can have supportive conversations about mental wellness in a safe and private space.
                  </p>
                  <ul className="my-6 space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4CAF50]/10">
                        <CheckIcon className="size-4 text-[#4CAF50]" />
                      </div>
                      <span>Personalized emotional support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4CAF50]/10">
                        <CheckIcon className="size-4 text-[#4CAF50]" />
                      </div>
                      <span>Voice-enabled natural conversations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4CAF50]/10">
                        <CheckIcon className="size-4 text-[#4CAF50]" />
                      </div>
                      <span>Available 24/7 for your well-being</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4CAF50]/10">
                        <CheckIcon className="size-4 text-[#4CAF50]" />
                      </div>
                      <span>Science-based therapeutic approaches</span>
                    </li>
                  </ul>
                  <p className="text-balance border-b border-zinc-200 pb-2 text-center text-xs text-zinc-500 sm:text-sm">
                    Ensure your microphone is enabled for the best experience
                  </p>
                </div>

                <div className="mt-auto">
                  <Link
                    href="/therapist"
                    className="group flex h-14 w-full items-center justify-center rounded-md bg-[#4CAF50] px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-[#3e8e41] hover:shadow-xl"
                  >
                    <HeartFilledIcon className="mr-2 size-5" />
                    <span>Start Therapy Session</span>
                    <ChevronRight className="ml-2 size-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </BorderGradient>

          {/* AI Interviewer Card */}
          <BorderGradient containerClassName="h-full" gradientClassName="from-[#3a63ff] via-[#5f7fff] to-[#849fff]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex h-full flex-1 flex-col overflow-hidden rounded-xl bg-white"
            >
              <div className="border-b border-[#3a63ff]/30 bg-gradient-to-r from-[#3a63ff]/5 to-transparent px-6 py-5 sm:px-8">
                <div className="flex items-start gap-3">
                  <div className="flex aspect-square items-center justify-center rounded-full bg-[#3a63ff]/10 p-2">
                    <PersonIcon className="size-5 text-[#3a63ff]" />
                  </div>
                  <div className="flex flex-col items-start">
                    <h2 className="text-xl font-bold text-[#3a63ff]">AI Interviewer</h2>
                    <p className="text-sm text-gray-600">Career Development</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="mb-6 flex flex-col gap-3">
                  <div className="inline-flex items-center justify-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                    Coming Soon
                  </div>
                  <p className="text-balance text-center text-base sm:text-lg">
                    Welcome to your AI Interview Experience
                  </p>
                  <p className="text-balance text-center text-base">
                    Practice interviews and receive professional feedback to advance your career.
                  </p>
                  <ul className="my-6 space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3a63ff]/10">
                        <CheckIcon className="size-4 text-[#3a63ff]" />
                      </div>
                      <span>Realistic interview scenarios</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3a63ff]/10">
                        <CheckIcon className="size-4 text-[#3a63ff]" />
                      </div>
                      <span>Detailed performance feedback</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3a63ff]/10">
                        <CheckIcon className="size-4 text-[#3a63ff]" />
                      </div>
                      <span>Industry-specific questions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3a63ff]/10">
                        <CheckIcon className="size-4 text-[#3a63ff]" />
                      </div>
                      <span>Post-interview skill improvement tips</span>
                    </li>
                  </ul>
                  <p className="text-balance border-b border-zinc-200 pb-2 text-center text-xs text-zinc-500 sm:text-sm">
                    Ensure your microphone is enabled for the best experience
                  </p>
                </div>

                <div className="mt-auto">
                  <button className="flex h-14 w-full cursor-not-allowed items-center justify-center rounded-md bg-[#3a63ff]/60 px-6 py-3 text-base font-medium text-white">
                    <PlayIcon className="mr-2 size-5" />
                    Coming Soon
                  </button>
                  <p className="mt-2 text-center text-xs text-zinc-500">Join our waitlist for early access</p>
                </div>
              </div>
            </motion.div>
          </BorderGradient>
        </div>
      </section>
      {/* Footer Banner */}
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
                className="group flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-[#4CAF50] transition-all hover:bg-opacity-90"
              >
                <HeartFilledIcon className="mr-2 size-5" />
                <span>Get Started for Free</span>
                <ChevronRight className="ml-2 size-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </BorderGradient>
      </section>
    </div>
  );
};
