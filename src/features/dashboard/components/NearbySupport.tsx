import React from 'react';
import Link from 'next/link';

import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const NearbySupport = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 space-y-5"
      >
        <h2 className="text-xl font-semibold">Nearby Support</h2>
        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/20">
                  <MapPin className="h-5 w-5 text-[#4CAF50]" />
                </div>
                <div>
                  <h3 className="mb-2 font-medium text-zinc-100">Local Therapy Centers</h3>
                  <p className="text-xs text-zinc-400">3 therapy centers within 5 miles</p>
                </div>
              </div>
              <Link href="/dashboard/clinics">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#4CAF50]/20 text-[#4CAF50] hover:bg-[#4CAF50]/10 hover:text-[#4CAF50]"
                >
                  View Map
                </Button>
              </Link>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-4">
              <h4 className="mb-2 font-medium text-zinc-300">Mind Wellness Center</h4>
              <p className="mb-2 text-sm text-zinc-400">
                Professional therapists specializing in anxiety, depression, and stress management.
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="default" className="bg-[#4CAF50]/10 text-[#4CAF50]">
                  1.2 miles away
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-[#4CAF50] hover:bg-transparent hover:text-[#4CAF50]"
                >
                  Get directions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};
