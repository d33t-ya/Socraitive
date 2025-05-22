'use client';

import React from 'react';
import { WelcomeHeader } from './WelcomeHeader';
import { StatsOverview } from './StatsOverview';
import { NearbySupport } from './NearbySupport';
import { RecentActivity } from './RecentActivity';
import { RecommendedResources } from './RecommendedResources';
import { SparklesEffect } from '@/components/ui/sparkles-effect';

export const Dashboard = () => {
  return (
    <div className="relative space-y-8">
      <div className="absolute inset-0 -z-10">
        <SparklesEffect />
      </div>

      <WelcomeHeader />
      <StatsOverview />
      <RecentActivity />
      <RecommendedResources />
      <NearbySupport />
    </div>
  );
};
