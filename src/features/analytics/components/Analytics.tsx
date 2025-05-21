'use client';
import React, { useState } from 'react';

import { motion } from 'motion/react';
import { AccentButton } from '@/components/custom';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, BarChart3, LineChart, PieChart, Download, Clock, Clipboard, ChevronDown } from 'lucide-react';

export const Analytics = () => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter' | 'year'>('month');
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };

  return (
    <div className="relative space-y-6">
      <div className="absolute inset-0 -z-10">
        <SparklesEffect />
      </div>

      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-between gap-4 md:flex-row md:items-center"
      >
        <div>
          <h1 className="text-2xl font-bold">Analytics & Progress</h1>
          <p className="mt-1 text-zinc-400">Track your therapy journey and wellbeing trends</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="inline-flex rounded-md border border-zinc-700 bg-zinc-800 p-1">
            {(['week', 'month', 'quarter', 'year'] as const).map((range) => (
              <button
                key={range}
                className={`rounded-sm px-3 py-1.5 text-xs font-medium transition-colors ${
                  timeRange === range ? 'bg-[#4CAF50] text-white' : 'text-zinc-400 hover:text-white'
                }`}
                onClick={() => setTimeRange(range)}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
          <AccentButton className="border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </AccentButton>
        </div>
      </motion.div>

      {/* Summary stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 md:grid-cols-4"
      >
        {[
          {
            title: 'Total Sessions',
            value: timeRange === 'week' ? '3' : timeRange === 'month' ? '12' : timeRange === 'quarter' ? '28' : '52',
            change: '+20%',
            icon: <Calendar className="h-5 w-5 text-[#4CAF50]" />,
            positive: true,
          },
          {
            title: 'Therapy Hours',
            value: timeRange === 'week' ? '1.5' : timeRange === 'month' ? '6' : timeRange === 'quarter' ? '14' : '26',
            change: '+15%',
            icon: <Clock className="h-5 w-5 text-[#4CAF50]" />,
            positive: true,
          },
          {
            title: 'Avg. Mood Score',
            value: '7.8',
            change: '+1.2',
            icon: <LineChart className="h-5 w-5 text-[#4CAF50]" />,
            positive: true,
          },
          {
            title: 'Goals Completed',
            value: timeRange === 'week' ? '2' : timeRange === 'month' ? '8' : timeRange === 'quarter' ? '19' : '36',
            change: '+4',
            icon: <Clipboard className="h-5 w-5 text-[#4CAF50]" />,
            positive: true,
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
          >
            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4CAF50]/10">
                    {stat.icon}
                  </div>
                  <span className={`text-xs font-medium ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-medium text-zinc-400">{stat.title}</h3>
                <p className="mt-1 text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Mood Tracking Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`${expanded === 'mood' ? 'col-span-full' : ''}`}
        >
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Mood Tracking</CardTitle>
              <div className="flex items-center gap-2">
                <button
                  className="rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  onClick={() => toggleExpanded('mood')}
                >
                  <ChevronDown className={`h-5 w-5 transition-transform ${expanded === 'mood' ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              {/* This would be a chart component */}
              <div className={`${expanded === 'mood' ? 'h-96' : 'h-60'} w-full rounded-md bg-zinc-800 p-4`}>
                <div className="flex h-full flex-col items-center justify-center">
                  <LineChart className="mb-2 h-10 w-10 text-[#4CAF50]" />
                  <p className="text-center text-sm text-zinc-400">
                    Mood trend visualization showing improving pattern over time
                  </p>
                  <p className="mt-2 text-center text-xs text-zinc-500">
                    (This would be an actual chart in a real implementation)
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Average Mood: 7.8/10</p>
                  <p className="text-xs text-zinc-400">Trending upward from 6.3 last {timeRange}</p>
                </div>
                <button className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs hover:bg-zinc-700">
                  View Details
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Session Frequency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`${expanded === 'sessions' ? 'col-span-full' : ''}`}
        >
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Session Frequency</CardTitle>
              <div className="flex items-center gap-2">
                <button
                  className="rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  onClick={() => toggleExpanded('sessions')}
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${expanded === 'sessions' ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className={`${expanded === 'sessions' ? 'h-96' : 'h-60'} w-full rounded-md bg-zinc-800 p-4`}>
                <div className="flex h-full flex-col items-center justify-center">
                  <BarChart3 className="mb-2 h-10 w-10 text-[#4CAF50]" />
                  <p className="text-center text-sm text-zinc-400">
                    Bar chart showing consistent weekly therapy sessions
                  </p>
                  <p className="mt-2 text-center text-xs text-zinc-500">
                    (This would be an actual chart in a real implementation)
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Most Active: Tuesdays</p>
                  <p className="text-xs text-zinc-400">Avg. session length: 30 mins</p>
                </div>
                <button className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs hover:bg-zinc-700">
                  View Details
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Topic Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`${expanded === 'topics' ? 'col-span-full' : ''}`}
        >
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Session Topics</CardTitle>
              <div className="flex items-center gap-2">
                <button
                  className="rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  onClick={() => toggleExpanded('topics')}
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${expanded === 'topics' ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className={`${expanded === 'topics' ? 'h-96' : 'h-60'} w-full rounded-md bg-zinc-800 p-4`}>
                <div className="flex h-full flex-col items-center justify-center">
                  <PieChart className="mb-2 h-10 w-10 text-[#4CAF50]" />
                  <p className="text-center text-sm text-zinc-400">Topic distribution across your therapy sessions</p>
                  <p className="mt-2 text-center text-xs text-zinc-500">
                    (This would be an actual chart in a real implementation)
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#4CAF50]"></div>
                  <span className="text-xs">Anxiety (35%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#8BC34A]"></div>
                  <span className="text-xs">Work Stress (25%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#CDDC39]"></div>
                  <span className="text-xs">Relationships (20%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#FFC107]"></div>
                  <span className="text-xs">Sleep Issues (12%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#FF9800]"></div>
                  <span className="text-xs">Other (8%)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`${expanded === 'progress' ? 'col-span-full' : ''}`}
        >
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Progress Indicators</CardTitle>
              <div className="flex items-center gap-2">
                <button
                  className="rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  onClick={() => toggleExpanded('progress')}
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${expanded === 'progress' ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Anxiety Management</p>
                    <p className="text-xs font-medium text-[#4CAF50]">75%</p>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-700">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Sleep Quality</p>
                    <p className="text-xs font-medium text-[#4CAF50]">60%</p>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-700">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Stress Reduction</p>
                    <p className="text-xs font-medium text-[#4CAF50]">80%</p>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-700">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Self-Compassion</p>
                    <p className="text-xs font-medium text-[#4CAF50]">65%</p>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-700">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                </div>

                {expanded === 'progress' && (
                  <>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Emotional Regulation</p>
                        <p className="text-xs font-medium text-[#4CAF50]">70%</p>
                      </div>
                      <div className="h-2 w-full rounded-full bg-zinc-700">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                          style={{ width: '70%' }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Mindfulness Practice</p>
                        <p className="text-xs font-medium text-[#4CAF50]">55%</p>
                      </div>
                      <div className="h-2 w-full rounded-full bg-zinc-700">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                          style={{ width: '55%' }}
                        ></div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Insights */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>AI Generated Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border border-[#4CAF50]/20 bg-[#4CAF50]/5 p-4">
                <h3 className="mb-2 font-medium">Progress Pattern</h3>
                <p className="text-sm text-zinc-300">
                  Your anxiety levels show significant improvement on days following therapy sessions. Consider
                  scheduling shorter but more frequent check-ins to maintain this positive trend.
                </p>
              </div>

              <div className="rounded-lg border border-[#4CAF50]/20 bg-[#4CAF50]/5 p-4">
                <h3 className="mb-2 font-medium">Topic Correlation</h3>
                <p className="text-sm text-zinc-300">
                  Sessions focusing on workplace stress management have shown the strongest correlation with overall
                  mood improvement. Your toolkit for handling workplace challenges is expanding effectively.
                </p>
              </div>

              <div className="rounded-lg border border-[#4CAF50]/20 bg-[#4CAF50]/5 p-4">
                <h3 className="mb-2 font-medium">Recommended Focus</h3>
                <p className="text-sm text-zinc-300">
                  Based on your progress patterns, sleep quality improvements could help accelerate your progress in
                  anxiety management. Consider dedicating your next few sessions to sleep-related challenges.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Journal Entries Analysis */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Wellness Journal</CardTitle>
            <AccentButton className="border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
              View All Entries
            </AccentButton>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-zinc-400">
                You've made 8 journal entries this {timeRange}. Here are some key patterns observed:
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-1 text-sm font-medium">Morning Mood</h3>
                  <div className="mb-2 flex items-center">
                    <div className="h-2 w-full rounded-full bg-zinc-700">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                        style={{ width: '70%' }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs">7.0</span>
                  </div>
                  <p className="text-xs text-zinc-400">Trending upward</p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-1 text-sm font-medium">Evening Mood</h3>
                  <div className="mb-2 flex items-center">
                    <div className="h-2 w-full rounded-full bg-zinc-700">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                        style={{ width: '65%' }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs">6.5</span>
                  </div>
                  <p className="text-xs text-zinc-400">Stable pattern</p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-1 text-sm font-medium">Overall Wellness</h3>
                  <div className="mb-2 flex items-center">
                    <div className="h-2 w-full rounded-full bg-zinc-700">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                        style={{ width: '75%' }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs">7.5</span>
                  </div>
                  <p className="text-xs text-zinc-400">Improving gradually</p>
                </div>
              </div>

              <p className="text-sm text-zinc-300">
                <span className="font-medium">Common themes:</span> Work-life balance, morning routine, relationship
                reflections
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
