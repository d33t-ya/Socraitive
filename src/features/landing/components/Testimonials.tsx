import React, { useRef } from 'react';
import { GalaxySpots } from '@/components/ui/galaxy-spots';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { StarFilledIcon, QuoteIcon } from '@radix-ui/react-icons';
import { Users } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';

const testimonials = [
  {
    text: 'Emma has been a lifesaver for me. The AI understands my anxiety and provides practical advice that actually helps.',
    name: 'Sarah K.',
    title: 'Marketing Professional',
    ariaLabel: 'Testimonial from Sarah K., Marketing Professional',
  },
  {
    text: 'I was skeptical at first, but Emma genuinely feels like talking to a real therapist. The voice interactions make it so natural.',
    name: 'Michael T.',
    title: 'Software Engineer',
    ariaLabel: 'Testimonial from Michael T., Software Engineer',
  },
  {
    text: "Having Emma available 24/7 has made a huge difference in managing my stress levels. It's like having support whenever I need it.",
    name: 'Jessica L.',
    title: 'Healthcare Worker',
    ariaLabel: 'Testimonial from Jessica L., Healthcare Worker',
  },
];

export const Testimonials = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <>
      <section ref={sectionRef} className="w-full bg-zinc-950 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-transparent to-[#4CAF50]"
                initial={{ width: 0 }}
                animate={isSectionInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.8 }}
              ></motion.div>
              <motion.span
                className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-sm font-medium uppercase tracking-wider text-transparent"
                initial={{ opacity: 0 }}
                animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Testimonials
              </motion.span>
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-[#4CAF50] to-transparent"
                initial={{ width: 0 }}
                animate={isSectionInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.8 }}
              ></motion.div>
            </div>
            <Typography
              as="h2"
              variant="h2"
              className="mb-6 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
            >
              What Our Users Say
            </Typography>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => {
              const cardRef = useRef(null);
              const isCardInView = useInView(cardRef, { once: true, amount: 0.1 });

              return (
                <GlowingEffect key={index} containerClassName="h-full">
                  <motion.div
                    ref={cardRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    aria-label={testimonial.ariaLabel}
                    className="h-full"
                  >
                    <Card className="relative h-full border-zinc-800 bg-zinc-900 p-6 transition-all duration-200 hover:border-[#4CAF50]/30">
                      {/* Add Galaxy Spots for decoration */}
                      <GalaxySpots count={12} />

                      {/* Quote icon */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isCardInView ? { opacity: 0.1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                        className="absolute -right-2 -top-2 text-[#4CAF50]"
                      >
                        <QuoteIcon className="size-16" />
                      </motion.div>

                      <CardContent className="p-0">
                        <div className="mb-4 flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isCardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.1 + i * 0.1 }}
                            >
                              <StarFilledIcon className="mr-1 inline size-4 text-yellow-400" />
                            </motion.div>
                          ))}
                        </div>

                        <Typography as="p" className="mb-6 text-zinc-300">
                          "{testimonial.text}"
                        </Typography>

                        <div className="flex items-center">
                          <motion.div
                            className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/20 text-[#4CAF50]"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: 'rgba(76, 175, 80, 0.3)',
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          >
                            <Users className="size-5" />
                          </motion.div>
                          <div>
                            <Typography as="h4" variant="h4" className="font-semibold text-white">
                              {testimonial.name}
                            </Typography>
                            <Typography as="p" className="text-xs text-zinc-500">
                              {testimonial.title}
                            </Typography>
                          </div>
                        </div>
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
