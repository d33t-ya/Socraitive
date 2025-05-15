import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { HeartFilledIcon, StarFilledIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import { ShieldIcon, ChevronRight, Sparkles } from 'lucide-react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Marquee } from '@/components/ui/marquee';

export const Partnerships = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-black py-24 text-white md:py-24">
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
              <span className="text-sm text-[#4CAF50]">Trusted Partnerships</span>
            </div>
            <h2 className="mb-6 max-w-3xl bg-gradient-to-r from-white via-white to-zinc-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              Our Clinical Collaborations
            </h2>
            <p className="mb-10 max-w-2xl text-lg text-zinc-400">
              Emma partners with leading mental health clinics and counseling centers to provide AI-assisted support
              that complements professional therapy.
            </p>{' '}
            <div className="w-full overflow-hidden">
              <Marquee
                items={[
                  {
                    name: 'Mindful Health Clinic',
                    description: 'Mental wellness specialists',
                    logo: <HeartFilledIcon className="size-8 text-[#4CAF50]" />,
                  },
                  {
                    name: 'Wellness Partners',
                    description: 'Holistic therapy approach',
                    logo: <StarFilledIcon className="size-8 text-[#8BC34A]" />,
                  },
                  {
                    name: 'Better Mind Center',
                    description: 'Cognitive behavioral therapy',
                    logo: <ChatBubbleIcon className="size-8 text-[#4CAF50]" />,
                  },
                  {
                    name: 'Serenity Counseling',
                    description: 'Stress & anxiety relief',
                    logo: <ShieldIcon className="size-8 text-[#8BC34A]" />,
                  },
                  {
                    name: 'Harmony Institute',
                    description: 'Family & relationship therapy',
                    logo: <HeartFilledIcon className="size-8 text-[#4CAF50]" />,
                  },
                  {
                    name: 'Mindscape Center',
                    description: 'Depression & mood disorders',
                    logo: <ChatBubbleIcon className="size-8 text-[#8BC34A]" />,
                  },
                ]}
                className="mb-6"
                direction="left"
                speed={50}
              />

              <Marquee
                items={[
                  {
                    name: 'Tranquil Therapy',
                    description: 'PTSD & trauma recovery',
                    logo: <ShieldIcon className="size-8 text-[#8BC34A]" />,
                  },
                  {
                    name: 'Insight Psychology',
                    description: 'Psychotherapy specialists',
                    logo: <StarFilledIcon className="size-8 text-[#4CAF50]" />,
                  },
                  {
                    name: 'Hope Counseling',
                    description: 'Addiction recovery support',
                    logo: <HeartFilledIcon className="size-8 text-[#8BC34A]" />,
                  },
                  {
                    name: 'Clarity Mental Health',
                    description: 'Youth & adolescent therapy',
                    logo: <ChatBubbleIcon className="size-8 text-[#4CAF50]" />,
                  },
                  {
                    name: 'Balanced Mind',
                    description: 'Mindfulness-based therapy',
                    logo: <StarFilledIcon className="size-8 text-[#8BC34A]" />,
                  },
                ]}
                direction="right"
                speed={50}
              />
            </div>
            <Link
              href="/therapist"
              className="group mt-12 inline-flex items-center text-[#4CAF50] hover:text-[#3e8e41]"
            >
              <span className="font-medium">Learn more about our clinical partnerships</span>
              <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};
