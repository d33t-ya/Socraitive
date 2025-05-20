'use client';

import React, { useState } from 'react';
import { NextPage } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { AccentButton } from '@/components/custom';
import { motion } from 'motion/react';
import { FileText, ChevronDown, Download, Filter, Search } from 'lucide-react';
import { SparklesEffect } from '@/components/ui/sparkles-effect';

// Mock data for therapy reports
const mockReports = [
  {
    id: '1',
    date: 'May 19, 2025',
    title: 'Work Anxiety Discussion',
    duration: '24 minutes',
    moodBefore: 'Anxious',
    moodAfter: 'Calmer',
    summary:
      'Session focused on workplace anxiety triggers and coping strategies. Identified three specific situations that cause stress and developed mindfulness techniques to apply in those moments.',
    insights: [
      'Anxiety increases most during team meetings',
      'Deep breathing helps manage immediate stress response',
      'Setting boundaries with colleagues may reduce overall stress',
    ],
    recommendations: [
      'Practice 5-minute meditation before meetings',
      'Use the 4-7-8 breathing technique when feeling overwhelmed',
      'Schedule regular short breaks during workday',
    ],
  },
  {
    id: '2',
    date: 'May 17, 2025',
    title: 'Sleep Pattern Analysis',
    duration: '32 minutes',
    moodBefore: 'Tired',
    moodAfter: 'Thoughtful',
    summary:
      'Explored ongoing sleep difficulties and established connections with daily habits. Discussed evening routine adjustments and identified technology use as a primary disruptor of sleep quality.',
    insights: [
      'Screen time within 1 hour of bedtime disrupts sleep quality',
      'Caffeine consumption after 2pm affects ability to fall asleep',
      'Inconsistent sleep schedule contributes to daytime fatigue',
    ],
    recommendations: [
      'Implement a no-screens policy 1 hour before bed',
      'Create a relaxing pre-sleep routine with reading or stretching',
      'Maintain consistent sleep-wake times, even on weekends',
    ],
  },
  {
    id: '3',
    date: 'May 14, 2025',
    title: 'Relationship Boundaries',
    duration: '40 minutes',
    moodBefore: 'Conflicted',
    moodAfter: 'Resolved',
    summary:
      'Discussed challenges with maintaining personal boundaries in close relationships. Identified patterns of people-pleasing behavior and developed assertiveness strategies.',
    insights: [
      'Difficulty saying "no" stems from fear of disappointing others',
      'Past experiences have reinforced people-pleasing tendencies',
      'Setting boundaries causes temporary anxiety but long-term relief',
    ],
    recommendations: [
      'Practice prepared phrases for setting boundaries',
      'Start with small boundaries in lower-stakes relationships',
      'Journal about feelings after setting boundaries',
    ],
  },
  {
    id: '4',
    date: 'May 10, 2025',
    title: 'Stress Management Techniques',
    duration: '28 minutes',
    moodBefore: 'Overwhelmed',
    moodAfter: 'Equipped',
    summary:
      'Focused on practical stress management techniques for daily use. Explored both preventative strategies and in-the-moment interventions for different stress scenarios.',
    insights: [
      'Physical exercise is the most effective stress reliever',
      'Catastrophizing thoughts increase perceived stress levels',
      'Brief mindfulness practices can interrupt stress cycles',
    ],
    recommendations: [
      'Schedule at least 20 minutes of movement daily',
      'Practice thought-challenging when noticing catastrophizing',
      'Use grounding techniques (5-4-3-2-1) during acute stress',
    ],
  },
  {
    id: '5',
    date: 'May 7, 2025',
    title: 'Self-Compassion Development',
    duration: '35 minutes',
    moodBefore: 'Self-critical',
    moodAfter: 'Accepting',
    summary:
      'Worked on developing greater self-compassion and reducing harsh self-judgment. Explored origins of self-criticism and practiced compassionate self-talk exercises.',
    insights: [
      'Internal critic often uses language from critical childhood figures',
      'Self-compassion improves resilience to setbacks',
      'Perfectionism contributes to unnecessary self-criticism',
    ],
    recommendations: [
      'Daily self-compassion meditation (5-10 minutes)',
      'Reframe self-talk using third-person perspective',
      'Practice treating yourself with the kindness you show others',
    ],
  },
];

const ReportsPage: NextPage = () => {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  const handleReportClick = (id: string) => {
    if (selectedReport === id) {
      setSelectedReport(null);
    } else {
      setSelectedReport(id);
    }
  };

  const filteredReports = mockReports.filter(
    (report) =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative space-y-6">
      <div className="absolute inset-0 -z-10">
        <SparklesEffect />
      </div>

      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"
      >
        <div>
          <h1 className="text-2xl font-bold">Therapy Reports</h1>
          <p className="mt-1 text-zinc-400">Review insights and progress from your therapy sessions</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 py-2 pl-10 pr-4 text-sm text-white placeholder-zinc-400 focus:border-[#4CAF50] focus:outline-none"
            />
          </div>
          <div className="relative">
            <AccentButton
              className="flex w-full items-center justify-center border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 sm:w-auto"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
            </AccentButton>

            {filterOpen && (
              <div className="absolute right-0 z-10 mt-2 w-64 rounded-md border border-zinc-700 bg-zinc-800 p-4 shadow-lg">
                <div className="space-y-3">
                  <p className="text-sm font-medium">Filter by date</p>
                  <div className="flex gap-2">
                    <select className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-sm">
                      <option value="">All time</option>
                      <option value="last-week">Last week</option>
                      <option value="last-month">Last month</option>
                      <option value="last-3-months">Last 3 months</option>
                    </select>
                  </div>

                  <p className="text-sm font-medium">Filter by mood</p>
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded-full bg-zinc-700 px-3 py-1 text-xs">Anxious</button>
                    <button className="rounded-full bg-zinc-700 px-3 py-1 text-xs">Tired</button>
                    <button className="rounded-full bg-zinc-700 px-3 py-1 text-xs">Calm</button>
                    <button className="rounded-full bg-zinc-700 px-3 py-1 text-xs">Overwhelmed</button>
                  </div>

                  <AccentButton className="w-full bg-[#4CAF50]">Apply Filters</AccentButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Reports list */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-4">
        {filteredReports.length > 0 ? (
          filteredReports.map((report) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * parseInt(report.id) }}
            >
              <Card
                className={`overflow-hidden border-zinc-800 transition-all ${selectedReport === report.id ? 'bg-zinc-800/50' : 'bg-zinc-900/50'} backdrop-blur-sm`}
              >
                <div
                  onClick={() => handleReportClick(report.id)}
                  className="flex cursor-pointer items-center justify-between p-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#4CAF50]/20">
                      <FileText className="h-6 w-6 text-[#4CAF50]" />
                    </div>
                    <div>
                      <h3 className="font-medium">{report.title}</h3>
                      <p className="text-xs text-zinc-400">
                        {report.date} · {report.duration} · Mood change: {report.moodBefore} → {report.moodAfter}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-zinc-400 transition-transform ${selectedReport === report.id ? 'rotate-180' : ''}`}
                  />
                </div>

                {selectedReport === report.id && (
                  <CardContent className="border-t border-zinc-700 px-4 py-4">
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 font-medium">Session Summary</h4>
                        <p className="text-sm text-zinc-300">{report.summary}</p>
                      </div>

                      <div>
                        <h4 className="mb-2 font-medium">Key Insights</h4>
                        <ul className="list-inside list-disc space-y-1">
                          {report.insights.map((insight, i) => (
                            <li key={i} className="text-sm text-zinc-300">
                              {insight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-2 font-medium">Recommendations</h4>
                        <ul className="list-inside list-disc space-y-1">
                          {report.recommendations.map((rec, i) => (
                            <li key={i} className="text-sm text-zinc-300">
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col gap-2 sm:flex-row">
                        <AccentButton className="bg-[#4CAF50]">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </AccentButton>
                        <AccentButton className="border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
                          Share Report
                        </AccentButton>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-900/30 p-6 text-center">
            <p className="text-zinc-400">No reports match your search criteria</p>
            <AccentButton
              className="mt-4 border border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
              onClick={() => setSearchTerm('')}
            >
              Clear Search
            </AccentButton>
          </div>
        )}
      </motion.div>

      {/* Pagination */}
      {filteredReports.length > 0 && (
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-zinc-400">
            Showing {filteredReports.length} of {mockReports.length} reports
          </p>
          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 text-zinc-400 hover:bg-zinc-700">
              1
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-md text-zinc-400 hover:bg-zinc-800">
              2
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-md text-zinc-400 hover:bg-zinc-800">
              3
            </button>
            <span className="text-zinc-400">...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsPage;
