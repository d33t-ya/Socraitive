import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, TrendingUp, BrainCircuit } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const stats = [
  {
    id: 1,
    title: 'Total Sessions',
    value: '12',
    description: '4 sessions this month',
    icon: Calendar,
    delay: 0.1,
  },
  {
    id: 2,
    title: 'Session Hours',
    value: '8.5 hrs',
    description: '2.3 hrs this month',
    icon: Clock,
    delay: 0.2,
  },
  {
    id: 3,
    title: 'Mood Trend',
    value: 'Improving',
    description: '+12% from last month',
    icon: TrendingUp,
    delay: 0.3,
  },
  {
    id: 4,
    title: 'Insights Generated',
    value: '37',
    description: '9 new insights this month',
    icon: BrainCircuit,
    delay: 0.4,
  },
];

export const StatsOverview = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ id, title, value, description, icon: Icon, delay }) => (
        <motion.div key={id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-0">
              <CardTitle className="text-sm font-medium text-zinc-100">{title}</CardTitle>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/10">
                <Icon className="h-4 w-4 text-[#4CAF50]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-zinc-300">{value}</div>
              <p className="mt-4 text-xs text-zinc-500">{description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
