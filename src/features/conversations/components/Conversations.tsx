'use client';
import React, { useState } from 'react';

import { motion } from 'motion/react';
import { AccentButton } from '@/components/custom';
import { mockConversations } from '../constants/conversations';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MessageSquare, Calendar, Search, Filter, ChevronDown, Download, Heart, Clock } from 'lucide-react';

export const Conversations = () => {
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
