import React from 'react';
import Link from 'next/link';

import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, MessageCircle } from 'lucide-react';

export const RecentActivity = () => {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-5"
        >
          <h2 className="text-xl font-semibold">Recent Sessions</h2>
          <div className="space-y-3">
            {[
              {
                title: 'Anxiety Management',
                date: 'May 19, 2025',
                duration: '45 min',
                insights: 5,
              },
              {
                title: 'Stress Reduction',
                date: 'May 15, 2025',
                duration: '30 min',
                insights: 3,
              },
              {
                title: 'Sleep Improvement',
                date: 'May 8, 2025',
                duration: '40 min',
                insights: 4,
              },
            ].map((session, index) => (
              <Card key={index} className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/20">
                      <MessageCircle className="h-5 w-5 text-[#4CAF50]" />
                    </div>
                    <div>
                      <h3 className="pb-3 font-medium text-zinc-100">{session.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{session.date}</span>
                        <span>•</span>
                        <Clock className="h-3.5 w-3.5" />
                        <span>{session.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="default" className="bg-[#4CAF50]/10 text-[#4CAF50]">
                    {session.insights} insights
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Link href="/dashboard/conversations" className="block">
            <Button variant="outline" className="w-full border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:text-white">
              View All Sessions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-5"
        >
          <h2 className="text-xl font-semibold">Wellness Progress</h2>
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-medium text-zinc-100">Mood Trends</h3>
                <Badge variant="default" className="bg-[#4CAF50] text-white hover:bg-[#4CAF50]/70">
                  Improving
                </Badge>
              </div>

              {/* Simple progress visualization */}
              <div className="mb-0 space-y-4">
                {[
                  { label: 'Anxiety', value: 35, improvement: -12 },
                  { label: 'Sleep Quality', value: 72, improvement: 15 },
                  { label: 'Energy', value: 60, improvement: 8 },
                  { label: 'Calmness', value: 65, improvement: 20 },
                ].map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm text-zinc-300">
                      <span>{item.label}</span>
                      <span className={item.improvement > 0 ? 'text-[#4CAF50]' : 'text-rose-500'}>
                        {item.improvement > 0 ? '+' : ''}
                        {item.improvement}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Link href="/dashboard/analytics">
            <Button
              variant="outline"
              className="mt-4 w-full border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:text-white"
            >
              View Detailed Analytics
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};
