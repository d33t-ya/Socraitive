'use client';

import React from 'react';
import { NextPage } from 'next';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AccentButton } from '@/components/custom';
import { motion } from 'motion/react';
import { Calendar, Clock, TrendingUp, BrainCircuit, Heart, Users, PlayCircle } from 'lucide-react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import Link from 'next/link';

const DashboardPage: NextPage = () => {
  return (
    <div className="relative space-y-8">
      <div className="absolute inset-0 -z-10">
        <SparklesEffect />
      </div>

      {/* Welcome header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm md:flex-row md:items-center"
      >
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Swanand</h1>
          <p className="mt-1 text-zinc-400">Here's an overview of your therapy journey</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link href="/therapist">
            <AccentButton className="bg-gradient-to-r from-[#4CAF50] to-[#3e8e41]">
              <PlayCircle className="mr-2 h-4 w-4" />
              Start New Session
            </AccentButton>
          </Link>
          <Link href="/dashboard/reports">
            <AccentButton className="border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
              View All Reports
            </AccentButton>
          </Link>
        </div>
      </motion.div>

      {/* Stats overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Total Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-[#4CAF50]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="mt-1 text-xs text-zinc-400">4 sessions this month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Session Hours</CardTitle>
              <Clock className="h-4 w-4 text-[#4CAF50]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.5 hrs</div>
              <p className="mt-1 text-xs text-zinc-400">2.3 hrs this month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Mood Trend</CardTitle>
              <TrendingUp className="h-4 w-4 text-[#4CAF50]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Improving</div>
              <p className="mt-1 text-xs text-zinc-400">+12% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Insights Generated</CardTitle>
              <BrainCircuit className="h-4 w-4 text-[#4CAF50]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">37</div>
              <p className="mt-1 text-xs text-zinc-400">9 new insights this month</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent activity and progress */}
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
                date: 'Today',
                time: '11:30 AM',
                duration: '24 min',
                topic: 'Managing work anxiety',
              },
              {
                date: 'Yesterday',
                time: '4:15 PM',
                duration: '32 min',
                topic: 'Stress reduction techniques',
              },
              {
                date: 'May 17, 2025',
                time: '10:00 AM',
                duration: '45 min',
                topic: 'Building healthy habits',
              },
            ].map((session, index) => (
              <Card key={index} className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <CardContent className="flex items-center p-4">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#4CAF50]/20">
                    <Heart className="h-5 w-5 text-[#4CAF50]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{session.topic}</h3>
                    <p className="mt-1 text-xs text-zinc-400">
                      {session.date} · {session.time} · {session.duration}
                    </p>
                  </div>
                  <Link href="/dashboard/reports">
                    <AccentButton className="ml-4 border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs hover:bg-zinc-700">
                      View Report
                    </AccentButton>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link href="/dashboard/conversations">
            <AccentButton className="w-full border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
              View All Sessions
            </AccentButton>
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
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium">Anxiety Level</p>
                <p className="text-sm font-medium text-[#4CAF50]">Improving</p>
              </div>
              <div className="mb-4 h-2 w-full rounded-full bg-zinc-800">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                  style={{ width: '60%' }}
                ></div>
              </div>
              <div className="flex justify-between text-xs">
                <span>8 weeks ago</span>
                <span>Now</span>
              </div>

              <div className="mb-4 mt-6 flex items-center justify-between">
                <p className="text-sm font-medium">Mood Stability</p>
                <p className="text-sm font-medium text-[#4CAF50]">Stable</p>
              </div>
              <div className="mb-4 h-2 w-full rounded-full bg-zinc-800">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                  style={{ width: '75%' }}
                ></div>
              </div>
              <div className="flex justify-between text-xs">
                <span>8 weeks ago</span>
                <span>Now</span>
              </div>

              <div className="mb-4 mt-6 flex items-center justify-between">
                <p className="text-sm font-medium">Sleep Quality</p>
                <p className="text-sm font-medium text-[#4CAF50]">Needs Focus</p>
              </div>
              <div className="mb-4 h-2 w-full rounded-full bg-zinc-800">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                  style={{ width: '40%' }}
                ></div>
              </div>
              <div className="flex justify-between text-xs">
                <span>8 weeks ago</span>
                <span>Now</span>
              </div>
            </CardContent>
          </Card>
          <Link href="/dashboard/analytics">
            <AccentButton className="w-full border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
              View Detailed Analytics
            </AccentButton>
          </Link>
        </motion.div>
      </div>

      {/* Recommended resources */}
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
            <Card key={index} className="flex flex-col border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/20">
                  {resource.icon}
                </div>
                <h3 className="mb-2 font-semibold">{resource.title}</h3>
                <p className="mb-4 flex-1 text-sm text-zinc-400">{resource.description}</p>
                <AccentButton className="w-full border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
                  Explore Resource
                </AccentButton>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Upcoming appointments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 space-y-5"
      >
        <h2 className="text-xl font-semibold">Nearby Support</h2>
        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-medium">Local Therapists & Support Groups</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Find professional therapists and support groups in your area to complement your AI therapy sessions.
                </p>
              </div>
              <Link href="/dashboard/clinics">
                <AccentButton className="bg-gradient-to-r from-[#4CAF50] to-[#3e8e41]">Find Near Me</AccentButton>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
