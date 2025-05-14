'use client';
import React from 'react';
import { motion } from 'motion/react';
import { HeartFilledIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import { StarIcon } from 'lucide-react';

export const FloatingCards = () => {
  return (
    <div className="absolute right-[5%] top-[20%] md:right-[10%] lg:right-[15%]">
      <div className="relative h-60 w-60 sm:h-72 sm:w-72">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute left-0 top-0 h-40 w-48 rounded-xl bg-white p-3 shadow-lg"
          style={{
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/10">
              <HeartFilledIcon className="size-5 text-[#4CAF50]" />
            </div>
            <div>
              <p className="text-sm font-medium">Emma.ai</p>
              <p className="text-xs text-gray-500">AI Therapist</p>
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-lg bg-[#4CAF50]/5 px-2 py-1">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <p className="text-xs text-green-600">Mood improving • 96%</p>
          </div>
          <div className="mt-2 flex items-center text-xs text-gray-500">
            <span className="mr-2 text-sm font-medium text-gray-700">4.9</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="size-3 text-yellow-400" />
              ))}
            </div>
            <span className="ml-1">(2.5k reviews)</span>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-0 right-0 h-40 w-48 rounded-xl bg-white p-3 shadow-lg"
          style={{
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4CAF50]/10">
              <ChatBubbleIcon className="size-4 text-[#4CAF50]" />
            </div>
            <p className="text-sm font-medium">Therapy Session</p>
          </div>
          <div className="mb-2 rounded-md bg-gray-100 p-2">
            <p className="text-xs text-gray-600">"Thanks for listening to me today Emma, I feel much better now."</p>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>12:30 PM</span>
            <span className="text-[#4CAF50]">Session complete</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
