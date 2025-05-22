'use client';
import React, { useState } from 'react';

import { motion } from 'motion/react';
import { mockConversations } from '../constants/conversations';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import {
  MessageSquare,
  Calendar,
  Search,
  Filter,
  ChevronDown,
  Download,
  Heart,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
            <Input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-zinc-700 bg-zinc-800 pl-10 text-white placeholder-zinc-400 focus-visible:border-[#4CAF50] focus-visible:ring-[#4CAF50]/20 focus-visible:ring-offset-0"
            />
          </div>
          <div className="relative">
            <Button
              variant="outline"
              className="flex w-full items-center justify-center border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700 hover:text-white sm:w-auto"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
            </Button>

            {filterOpen && (
              <div className="absolute right-0 z-10 mt-2 w-64 rounded-md border border-zinc-700 bg-zinc-800 p-4 shadow-lg">
                <div className="space-y-3">
                  <p className="text-sm font-medium">Filter by date</p>
                  <div className="flex gap-2">
                    <Select>
                      <SelectTrigger className="w-full border-zinc-700 bg-zinc-900 text-white">
                        <SelectValue placeholder="All time" />
                      </SelectTrigger>
                      <SelectContent className="border-zinc-700 bg-zinc-800 text-white">
                        <SelectItem value="all-time">All time</SelectItem>
                        <SelectItem value="last-week">Last week</SelectItem>
                        <SelectItem value="last-month">Last month</SelectItem>
                        <SelectItem value="last-3-months">Last 3 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <p className="text-sm font-medium">Sort by</p>
                  <div className="flex gap-2">
                    <Select>
                      <SelectTrigger className="w-full border-zinc-700 bg-zinc-900 text-white">
                        <SelectValue placeholder="Newest first" />
                      </SelectTrigger>
                      <SelectContent className="border-zinc-700 bg-zinc-800 text-white">
                        <SelectItem value="newest">Newest first</SelectItem>
                        <SelectItem value="oldest">Oldest first</SelectItem>
                        <SelectItem value="longest">Longest duration</SelectItem>
                        <SelectItem value="shortest">Shortest duration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="accent" className="w-full">
                    Apply Filters
                  </Button>
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
              <Card
                key={convo.id}
                className={`cursor-pointer border-l-4 transition-all hover:bg-zinc-800/50 ${
                  selectedConversation === convo.id
                    ? 'border-zinc-700 border-l-[#4CAF50] bg-zinc-800/50'
                    : 'border-zinc-800 border-l-transparent bg-zinc-900/50'
                }`}
                onClick={() => handleConversationClick(convo.id)}
              >
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-medium">{convo.title}</h3>
                    <Badge
                      variant="outline"
                      className={
                        convo.mood === 'Positive'
                          ? 'bg-[#4CAF50]/10 text-[#4CAF50]'
                          : convo.mood === 'Neutral'
                            ? 'bg-amber-500/10 text-amber-500'
                            : 'bg-rose-500/10 text-rose-500'
                      }
                    >
                      {convo.mood}
                    </Badge>
                  </div>
                  <p className="mb-3 line-clamp-2 text-sm text-zinc-400">{convo.previewText}</p>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{convo.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{convo.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <AlertCircle className="mb-2 h-10 w-10 text-zinc-600" />
                <h3 className="mb-1 text-lg font-medium">No conversations found</h3>
                <p className="text-sm text-zinc-400">Try adjusting your search or filters</p>
              </CardContent>
            </Card>
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
            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>{selectedConvo.title}</CardTitle>
                  <div className="mt-1 flex items-center gap-3 text-sm text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{selectedConvo.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{selectedConvo.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className={
                      selectedConvo.mood === 'Positive'
                        ? 'bg-[#4CAF50]/10 text-[#4CAF50]'
                        : selectedConvo.mood === 'Neutral'
                          ? 'bg-amber-500/10 text-amber-500'
                          : 'bg-rose-500/10 text-rose-500'
                    }
                  >
                    {selectedConvo.mood}
                  </Badge>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-md border border-zinc-800 bg-zinc-900/80 p-4">
                    <h3 className="mb-2 text-sm font-medium text-[#4CAF50]">Key Insights</h3>
                    <ul className="space-y-2">
                      {selectedConvo.insights.map((insight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#4CAF50]" />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Conversation Summary</h3>
                    <div className="space-y-4">
                      {selectedConvo.messages.map((message, i) => (
                        <div
                          key={i}
                          className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                        >
                          <Avatar className="h-8 w-8">
                            {' '}
                            <AvatarFallback className={message.role === 'user' ? 'bg-zinc-700' : 'bg-[#4CAF50]/20'}>
                              {message.role === 'user' ? 'SW' : 'EM'}
                            </AvatarFallback>
                          </Avatar>
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              message.role === 'user'
                                ? 'rounded-tr-none bg-zinc-800 text-white'
                                : 'rounded-tl-none bg-[#4CAF50]/20 text-white'
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-zinc-800 px-6 py-4">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-rose-500" />
                  <span className="text-sm text-zinc-400">Added to favorites</span>
                </div>
                <Button variant="outline" className="border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
                  Continue Session
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="flex h-[450px] flex-col items-center justify-center border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 rounded-full bg-zinc-800/80 p-4">
                  <MessageSquare className="h-8 w-8 text-zinc-500" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Select a Conversation</h3>
                <p className="text-zinc-400">Choose a conversation from the list to view details</p>
              </CardContent>
            </Card>
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
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 border-zinc-700 bg-zinc-800 p-0 hover:bg-[#4CAF50]/20 hover:text-[#4CAF50]"
            >
              1
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-zinc-400 hover:bg-zinc-800">
              2
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-zinc-400 hover:bg-zinc-800">
              3
            </Button>
            <span className="text-zinc-400">...</span>
          </div>
        </div>
      )}
    </div>
  );
};
