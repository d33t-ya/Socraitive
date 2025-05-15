'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { GalaxySpots } from '@/components/ui/galaxy-spots';
import { faqs } from '../constants/faq';

type FAQItemProps = {
  question: string;
  answer: string;
  value: string;
};

export const FAQSection = () => {
  return (
    <>
      <section id="faq" className="relative w-full bg-black py-20 md:py-32">
        <div
          className="fixed-background absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,175,80,0.03),transparent_70%)]"
          style={{ pointerEvents: 'none' }}
        />
        <div className="fixed-galaxy-spots absolute inset-0" style={{ pointerEvents: 'none' }}>
          <GalaxySpots count={50} />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-4">
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
                FAQ
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-[#4CAF50] to-transparent"></div>
            </div>
            <h2 className="mb-6 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-zinc-400">
              Find answers to common questions about Emma AI Therapist and how it can help with your mental wellness
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mx-auto w-full max-w-4xl"
            >
              <Accordion type="single" collapsible className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FAQItem question={faq.question} answer={faq.answer} value={`item-${index}`} />
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const FAQItem = ({ question, answer, value }: FAQItemProps) => {
  return (
    <div className="group relative w-full rounded-xl bg-gradient-to-r from-[#4CAF50]/30 to-[#8BC34A]/20 p-[1px] hover:from-[#4CAF50]/40 hover:to-[#8BC34A]/30">
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#4CAF50]/30 to-[#8BC34A]/20 opacity-0 transition-opacity duration-300 group-hover:from-[#4CAF50]/40 group-hover:to-[#8BC34A]/30 group-hover:opacity-100 group-data-[state=open]:from-[#4CAF50] group-data-[state=open]:via-[#7CB342] group-data-[state=open]:to-[#8BC34A] group-data-[state=open]:opacity-100" />

      <div className="relative overflow-hidden rounded-xl bg-black">
        <AccordionItem value={value} className="border-none">
          <AccordionTrigger className="p-6 text-lg font-medium text-white transition-all duration-300 hover:no-underline data-[state=open]:bg-black/95 sm:text-xl">
            {question}
          </AccordionTrigger>
          <AccordionContent className="border-t border-zinc-800/50 bg-black/95 p-6 pt-4 text-zinc-300">
            {answer}
          </AccordionContent>
        </AccordionItem>
      </div>
    </div>
  );
};
