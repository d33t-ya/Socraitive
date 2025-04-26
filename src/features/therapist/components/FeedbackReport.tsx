import React from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import { AccentButton } from '@/components/custom';

type FeedbackReportProps = {
  analysisData: any;
  onBack: () => void;
};

export const FeedbackReport = ({ analysisData, onBack }: FeedbackReportProps) => {
  if (!analysisData) {
    return (
      <div className="my-10 flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 text-center">
        <p className="text-lg font-medium">No analysis data available</p>
        <AccentButton onClick={onBack} className="mt-4">
          <ArrowLeftIcon className="mr-2 size-4" />
          Back
        </AccentButton>
      </div>
    );
  }

  return (
    <div className="my-6 flex w-full flex-col rounded-lg bg-white">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Session Overview */}
        <div className="rounded-lg border border-green-100 bg-green-50 p-4 shadow-sm">
          <h3 className="mb-2 border-b border-green-200 pb-2 text-lg font-semibold text-[#3e8e41]">Session Overview</h3>
          <p className="text-sm text-gray-700">{analysisData.session_overview}</p>
        </div>

        {/* Emotional Journey */}
        <div className="rounded-lg border border-green-100 bg-green-50 p-4 shadow-sm">
          <h3 className="mb-2 border-b border-green-200 pb-2 text-lg font-semibold text-[#3e8e41]">
            Emotional Journey
          </h3>
          <p className="text-sm text-gray-700">{analysisData.emotional_journey}</p>
        </div>

        {/* Patterns */}
        <div className="rounded-lg border border-green-100 bg-green-50 p-4 shadow-sm">
          <h3 className="mb-2 border-b border-green-200 pb-2 text-lg font-semibold text-[#3e8e41]">
            Identified Patterns
          </h3>
          <p className="text-sm text-gray-700">{analysisData.patterns}</p>
        </div>

        {/* Strengths */}
        <div className="rounded-lg border border-green-100 bg-green-50 p-4 shadow-sm">
          <h3 className="mb-2 border-b border-green-200 pb-2 text-lg font-semibold text-[#3e8e41]">Your Strengths</h3>
          <p className="text-sm text-gray-700">{analysisData.strengths}</p>
        </div>

        {/* Next Steps */}
        <div className="col-span-full rounded-lg border border-green-100 bg-green-50 p-4 shadow-sm">
          <h3 className="mb-2 border-b border-green-200 pb-2 text-lg font-semibold text-[#3e8e41]">
            Recommended Next Steps
          </h3>
          <p className="text-sm text-gray-700">{analysisData.next_steps}</p>
        </div>

        {/* Ongoing Work */}
        <div className="col-span-full rounded-lg border border-green-100 bg-green-50 p-4 shadow-sm">
          <h3 className="mb-2 border-b border-green-200 pb-2 text-lg font-semibold text-[#3e8e41]">Ongoing Work</h3>
          <p className="text-sm text-gray-700">{analysisData.ongoing_work}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <AccentButton
          className="bg-[#4CAF50] px-6 text-white hover:bg-[#3e8e41]"
          onClick={() => {
            window.print();
          }}
        >
          Print Report
        </AccentButton>
      </div>
    </div>
  );
};
