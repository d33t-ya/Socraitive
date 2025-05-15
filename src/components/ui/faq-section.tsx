'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BorderGradient } from './border-gradient';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

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

export const FAQSection = () => {
  const faqs = [
    {
      question: 'What is Emma AI Therapist?',
      answer:
        'Emma is an AI-powered mental wellness companion designed to provide supportive conversations, emotional guidance, and a safe space to discuss your feelings and concerns. Using advanced natural language processing, Emma can understand your emotions and respond with empathy and personalized support.',
    },
    {
      question: 'How private are my conversations with Emma?',
      answer:
        'Your privacy is our top priority. All conversations with Emma are completely private and encrypted. We do not share your personal information or conversation details with third parties. You can use Emma with confidence knowing your data is secure.',
    },
    {
      question: 'Is Emma meant to replace professional therapy?',
      answer:
        'No, Emma is designed to complement professional therapy, not replace it. While Emma can provide support and guidance for everyday mental wellness concerns, she should not be used for crisis situations or as a substitute for professional mental health treatment. For serious mental health issues, please consult with a licensed therapist or counselor.',
    },
    {
      question: 'How does voice interaction work with Emma?',
      answer:
        'Emma uses advanced speech recognition technology to understand your spoken words and responds with a natural-sounding voice. Simply enable your microphone when prompted and speak normally. This creates a more natural and engaging therapeutic experience compared to text-only interactions.',
    },
    {
      question: 'Can I use Emma on different devices?',
      answer:
        'Yes, Emma is designed to work across multiple devices including smartphones, tablets, and computers. You can start a conversation on one device and continue it on another, making it convenient to access support whenever and wherever you need it.',
    },
  ];
  return (
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
  );
};
