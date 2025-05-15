import React from 'react';
import { GalaxySpots } from '@/components/ui/galaxy-spots';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { Users } from 'lucide-react';
import { motion } from 'motion/react';

export const Testimonials = () => {
  return (
    <>
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
              <GlowingEffect key={index} containerClassName="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-full rounded-xl border border-zinc-800 bg-zinc-900 p-6"
                >
                  {/* Add Galaxy Spots for decoration */}
                  <GalaxySpots count={12} />

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
              </GlowingEffect>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
