'use client';

import React, { useState } from 'react';
import { NextPage } from 'next';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AccentButton } from '@/components/custom';
import { motion } from 'motion/react';
import { MessageSquare, Calendar, Search, Filter, ChevronDown, Download, Heart, Clock } from 'lucide-react';
import { SparklesEffect } from '@/components/ui/sparkles-effect';

// Mock conversation data
const mockConversations = [
  {
    id: '1',
    date: 'May 19, 2025',
    time: '11:30 AM',
    duration: '24 minutes',
    title: 'Work Anxiety Discussion',
    previewText: "I've been feeling really overwhelmed at work lately...",
    messages: [
      {
        role: 'user',
        content:
          "I've been feeling really overwhelmed at work lately. There's so much to do and I feel like I can't keep up.",
      },
      {
        role: 'ai',
        content:
          'I understand how challenging that can feel. Being overwhelmed at work is something many people experience. Can you tell me more about what specifically feels most overwhelming?',
      },
      {
        role: 'user',
        content:
          "It's the constant stream of emails and meetings. I never get time to actually complete my tasks. And my manager keeps adding more to my plate.",
      },
      {
        role: 'ai',
        content:
          'That sounds really difficult - trying to stay on top of communications while also completing your core work, especially with new responsibilities being added. Have you been able to discuss your workload with your manager?',
      },
      {
        role: 'user',
        content: "No, I'm worried about seeming like I can't handle the job. Everyone else seems to manage fine.",
      },
      {
        role: 'ai',
        content:
          "It's common to worry about how we're perceived at work, but it's important to remember that we often don't see the full picture of how others are coping. Many people who \"seem fine\" might be struggling too. Would you feel comfortable discussing some specific time management strategies that might help?",
      },
      { role: 'user', content: 'Yes, I think that would be helpful. I need some practical ways to handle this.' },
      {
        role: 'ai',
        content:
          'Great. One approach many find helpful is time blocking. This involves designating specific periods for emails and meetings, and protecting other blocks of time for focused work. Would you like to explore how that might work in your schedule?',
      },
    ],
  },
  {
    id: '2',
    date: 'May 17, 2025',
    time: '4:15 PM',
    duration: '32 minutes',
    title: 'Sleep Pattern Analysis',
    previewText: "I've been having trouble sleeping lately. I keep waking up...",
    messages: [
      {
        role: 'user',
        content:
          "I've been having trouble sleeping lately. I keep waking up in the middle of the night and can't fall back asleep.",
      },
      {
        role: 'ai',
        content:
          "I'm sorry to hear you're struggling with sleep disruptions. That can be really frustrating and affect your daytime functioning too. Can you share a bit more about your sleep routine and when these wake-ups typically occur?",
      },
      {
        role: 'user',
        content:
          "I usually go to bed around 11 PM and I wake up around 2 or 3 AM. Then I end up looking at my phone because I can't sleep, which probably makes it worse.",
      },
      {
        role: 'ai',
        content:
          "You're right that looking at your phone likely makes it harder to fall back asleep. The blue light from screens can suppress melatonin, which helps regulate sleep. What do you typically do in the hour or two before bedtime?",
      },
      {
        role: 'user',
        content:
          "I'm usually watching TV or scrolling through social media. Sometimes I'll have a glass of wine to help me relax.",
      },
      {
        role: 'ai',
        content:
          'Thank you for sharing that. Both screen time and alcohol can affect sleep quality, even if they might feel relaxing in the moment. Would you be open to trying some adjustments to your evening routine to see if they help with those middle-of-the-night wake-ups?',
      },
    ],
  },
  {
    id: '3',
    date: 'May 14, 2025',
    time: '10:00 AM',
    duration: '40 minutes',
    title: 'Relationship Boundaries',
    previewText: 'I need help with setting boundaries with my friend. She keeps...',
    messages: [
      {
        role: 'user',
        content:
          'I need help with setting boundaries with my friend. She keeps asking me to do things for her, and I feel bad saying no.',
      },
      {
        role: 'ai',
        content:
          "Setting boundaries can be really challenging, especially with people we care about. It's thoughtful that you're considering how to navigate this. Can you tell me a bit more about what kind of requests she makes and how they affect you?",
      },
      {
        role: 'user',
        content:
          "She asks me to drive her places, watch her dog last minute, or lend her money. I want to be a good friend, but it's becoming too much and I feel taken advantage of.",
      },
      {
        role: 'ai',
        content:
          "I can understand why you'd feel that way. It sounds like there's a pattern of requests that might be creating an imbalance in the friendship. Setting boundaries isn't about being unkind - it's about taking care of yourself while still being in the relationship. What makes it difficult for you to say no when these requests come up?",
      },
      {
        role: 'user',
        content:
          "I worry she'll be upset or think I don't care about her. We've been friends since childhood and I don't want to damage the relationship.",
      },
      {
        role: 'ai',
        content:
          "That makes a lot of sense - long-term friendships carry a lot of history and meaning, and it's natural to want to preserve that connection. Many people find that healthy boundaries actually strengthen relationships in the long run, though the transition can be uncomfortable. Would it help to talk about some ways to communicate boundaries that feel authentic to you?",
      },
    ],
  },
  {
    id: '4',
    date: 'May 10, 2025',
    time: '2:45 PM',
    duration: '28 minutes',
    title: 'Stress Management Techniques',
    previewText: 'My stress levels have been through the roof lately...',
    messages: [
      {
        role: 'user',
        content: 'My stress levels have been through the roof lately. I need some new techniques to manage it better.',
      },
      {
        role: 'ai',
        content:
          "I'm sorry to hear you've been experiencing such high stress levels. That can be really taxing both mentally and physically. I'd be happy to explore some techniques with you. First, could you share what you've tried already for stress management?",
      },
      {
        role: 'user',
        content:
          "I've tried some deep breathing and going for walks, but it doesn't seem to be enough with everything going on.",
      },
      {
        role: 'ai',
        content:
          "Thank you for sharing that. It's great that you've already incorporated some helpful strategies like breathing exercises and physical activity. When stress is particularly intense, we sometimes need to expand our toolkit. Would you be interested in exploring some additional approaches that might complement what you're already doing?",
      },
    ],
  },
  {
    id: '5',
    date: 'May 7, 2025',
    time: '9:15 AM',
    duration: '35 minutes',
    title: 'Self-Compassion Development',
    previewText: "I'm always so hard on myself. I can never seem to...",
    messages: [
      {
        role: 'user',
        content:
          "I'm always so hard on myself. I can never seem to meet my own standards and I constantly feel like I'm failing.",
      },
      {
        role: 'ai',
        content:
          "It sounds really painful to be caught in that cycle of self-criticism. Living with such high standards for yourself can be exhausting. I'm wondering, would you speak to a friend the way you speak to yourself when they make a mistake?",
      },
      {
        role: 'user',
        content:
          "No, I'm much kinder to others. I know it's a double standard but I can't seem to stop being so critical of myself.",
      },
      {
        role: 'ai',
        content:
          'That awareness is actually a really important first step. Many people who struggle with self-compassion find it much easier to extend kindness to others. Would you be willing to explore some practices that might help you start treating yourself with the same understanding you naturally offer to friends?',
      },
    ],
  },
];

const ConversationsPage: NextPage = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  const handleConversationClick = (id: string) => {
    setSelectedConversation(id);
  };

  const filteredConversations = mockConversations.filter(
    (convo) =>
      convo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      convo.previewText.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedConvo = mockConversations.find((c) => c.id === selectedConversation);

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
          <h1 className="text-2xl font-bold">Past Conversations</h1>
          <p className="mt-1 text-zinc-400">Review and reflect on your therapy conversations</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search conversations..."
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

                  <p className="text-sm font-medium">Sort by</p>
                  <div className="flex gap-2">
                    <select className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-sm">
                      <option value="newest">Newest first</option>
                      <option value="oldest">Oldest first</option>
                      <option value="longest">Longest duration</option>
                      <option value="shortest">Shortest duration</option>
                    </select>
                  </div>

                  <AccentButton className="w-full bg-[#4CAF50]">Apply Filters</AccentButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Conversations list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 lg:col-span-1"
        >
          {filteredConversations.length > 0 ? (
            filteredConversations.map((convo) => (
              <motion.div
                key={convo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * parseInt(convo.id) }}
              >
                <Card
                  className={`cursor-pointer border-zinc-800 transition-all hover:bg-zinc-800/30 ${
                    selectedConversation === convo.id ? 'border-[#4CAF50] bg-zinc-800/50' : 'bg-zinc-900/50'
                  } backdrop-blur-sm`}
                  onClick={() => handleConversationClick(convo.id)}
                >
                  <CardContent className="p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4CAF50]/20">
                          <MessageSquare className="h-4 w-4 text-[#4CAF50]" />
                        </div>
                        <h3 className="font-medium">{convo.title}</h3>
                      </div>
                    </div>
                    <p className="line-clamp-2 text-sm text-zinc-400">{convo.previewText}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{convo.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{convo.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-900/30 p-6 text-center">
              <p className="text-zinc-400">No conversations match your search</p>
              <AccentButton
                className="mt-4 border border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </AccentButton>
            </div>
          )}
        </motion.div>

        {/* Conversation detail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          {selectedConvo ? (
            <Card className="h-full border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between border-b border-zinc-800 p-4">
                <div>
                  <CardTitle className="text-lg font-medium">{selectedConvo.title}</CardTitle>
                  <p className="text-xs text-zinc-400">
                    {selectedConvo.date} · {selectedConvo.time} · {selectedConvo.duration}
                  </p>
                </div>
                <div className="flex gap-2">
                  <AccentButton className="border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
                    <Heart className="mr-2 h-4 w-4" />
                    Save
                  </AccentButton>
                  <AccentButton className="border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </AccentButton>
                </div>
              </CardHeader>
              <CardContent className="h-[calc(100vh-300px)] overflow-y-auto p-0">
                <div className="flex flex-col gap-4 p-6">
                  {selectedConvo.messages.map((message: { role: string; content: string }, idx: number) => (
                    <div key={idx} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === 'user'
                            ? 'rounded-tr-none bg-[#4CAF50]/20 text-white'
                            : 'rounded-tl-none bg-zinc-800 text-zinc-200'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="flex h-[60vh] flex-col items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-900/30 p-6 text-center">
              <MessageSquare className="mb-4 h-12 w-12 text-zinc-700" />
              <h3 className="mb-2 text-lg font-medium">Select a Conversation</h3>
              <p className="text-sm text-zinc-400">Choose a conversation from the list to view the full dialogue</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Pagination */}
      {filteredConversations.length > 0 && (
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-zinc-400">
            Showing {filteredConversations.length} of {mockConversations.length} conversations
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

export default ConversationsPage;
