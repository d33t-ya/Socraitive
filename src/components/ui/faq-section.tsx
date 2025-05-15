'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { BorderGradient } from './border-gradient';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BorderGradient
      containerClassName="w-full"
      gradientClassName={isOpen ? 'from-[#4CAF50] via-[#7CB342] to-[#8BC34A]' : 'from-zinc-700 to-zinc-800'}
    >
      <motion.div
        className={cn('overflow-hidden rounded-xl transition-all', isOpen ? 'bg-zinc-900' : 'bg-zinc-900/50')}
      >
        <button className="flex w-full items-center justify-between p-6 text-left" onClick={() => setIsOpen(!isOpen)}>
          <h3 className="text-lg font-medium text-white sm:text-xl">{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              'flex h-8 w-8 items-center justify-center rounded-full transition-colors',
              isOpen ? 'bg-[#4CAF50]/20 text-[#4CAF50]' : 'bg-zinc-800 text-zinc-400'
            )}
          >
            <ChevronDown className="size-5" />
          </motion.div>
        </button>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="border-t border-zinc-800 p-6 pt-4 text-zinc-400">
            <p>{answer}</p>
          </div>
        </motion.div>
      </motion.div>
    </BorderGradient>
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
    <div className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};
