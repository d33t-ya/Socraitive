import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Heart, Users, ArrowRight } from 'lucide-react';

export const RecommendedResources = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 space-y-5"
      >
        <h2 className="text-xl font-semibold">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Mindfulness for Anxiety',
              description: 'Learn techniques to manage anxious thoughts through mindfulness practice.',
              icon: <BrainCircuit className="h-5 w-5 text-[#4CAF50]" />,
            },
            {
              title: 'Cognitive Behavioral Therapy',
              description: 'Explore cognitive restructuring to change negative thought patterns.',
              icon: <Users className="h-5 w-5 text-[#4CAF50]" />,
            },
            {
              title: 'Sleep Improvement Guide',
              description: 'Practical tips and routines to enhance your sleep quality.',
              icon: <Heart className="h-5 w-5 text-[#4CAF50]" />,
            },
          ].map((resource, index) => (
            <Card
              key={index}
              className="flex flex-col border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-colors hover:border-[#4CAF50]/50"
            >
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/20">
                  {resource.icon}
                </div>
                <h3 className="mb-4 font-semibold text-zinc-100">{resource.title}</h3>
                <p className="mb-4 flex-1 text-sm text-zinc-400">{resource.description}</p>
                <Button
                  variant="ghost"
                  className="ml-auto px-4 text-[#4CAF50] hover:bg-[#4CAF50]/10 hover:text-[#4CAF50]"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </>
  );
};
