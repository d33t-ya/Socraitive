'use client';

import { useState, useEffect } from 'react';
import { Square, FileText } from 'lucide-react';
import { AccentButton } from '@/components/custom';
import { vapi, vapiToken } from '@/lib/vapi.sdk';

import { AI } from './AI';
import { Patient } from './Patient';
import { TherapyEnd } from './TherapyEnd';
import { TherapyStart } from './TherapyStart';
import { TherapyHeader } from './TherapyHeader';
import { FeedbackReport } from './FeedbackReport';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { SparklesEffect } from '@/components/ui/sparkles-effect';

type TherapyStatus = 'notStarted' | 'ongoing' | 'ended' | 'error' | 'report';

export enum CallStatus {
  INACTIVE = 'INACTIVE',
  CONNECTING = 'CONNECTING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR',
}

interface SavedMessage {
  role: 'user' | 'ai';
  content: string;
}

export const Therapy = () => {
  const [therapyStatus, setTherapyStatus] = useState<TherapyStatus>('notStarted');
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [callId, setCallId] = useState<string>('');
  const [analysisData, setAnalysisData] = useState<any>(null);
  const [isFetchingAnalysis, setIsFetchingAnalysis] = useState(false);

  const fetchCallData = async (id: string) => {
    if (!id) {
      console.log('No call ID to fetch');
      return;
    }

    setIsFetchingAnalysis(true);
    try {
      const response = await fetch(`https://api.vapi.ai/call/${id}`, {
        headers: {
          Authorization: `Bearer ${vapiToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`API call failed: ${response.status}`);
      }

      const data = await response.json();
      console.log('Call data retrieved:', data);

      // Check if analysis data exists and log it
      if (data?.analysis?.structuredData) {
        console.log('ANALYSIS STRUCTURED DATA:', data.analysis.structuredData);
        setAnalysisData(data.analysis.structuredData);
      }

      return data;
    } catch (error) {
      console.error('Error fetching call data:', error);
    } finally {
      setIsFetchingAnalysis(false);
    }
  };

  useEffect(() => {
    const onCallStart = () => {
      setCallStatus(CallStatus.ACTIVE);
      setTherapyStatus('ongoing');
      setErrorMessage('');
    };

    const onCallEnd = async (data?: any) => {
      console.log('Call ended:', data);
      setCallStatus(CallStatus.FINISHED);
      setTherapyStatus('ended');
      setIsSpeaking(false);

      if (callId) {
        console.log(`Will fetch analysis data for call ${callId} after delay`);
        setTimeout(() => {
          fetchCallData(callId);
        }, 5000);
      }

      handleDisconnect();
    };

    const onMessage = (message: any) => {
      if (message.type === 'transcript' && message.transcriptType === 'final') {
        const newMessage = { role: message.role, content: message.transcript };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const onSpeechStart = () => {
      console.log('speech start');
      if (messages.length > 0 && messages[messages.length - 1]?.role === 'ai') {
      } else {
        setIsSpeaking(true);
      }
    };

    const onSpeechEnd = () => {
      console.log('speech end');
      setIsSpeaking(false);
    };

    const onError = (error: any) => {
      console.log('Error:', error);
    };

    vapi.on('call-start', onCallStart);
    vapi.on('call-end', onCallEnd);
    vapi.on('message', onMessage);
    vapi.on('speech-start', onSpeechStart);
    vapi.on('speech-end', onSpeechEnd);
    vapi.on('error', onError);

    return () => {
      vapi.off('call-start', onCallStart);
      vapi.off('call-end', onCallEnd);
      vapi.off('message', onMessage);
      vapi.off('speech-start', onSpeechStart);
      vapi.off('speech-end', onSpeechEnd);
      vapi.off('error', onError);
    };
  }, [callId, messages]);

  const handleCall = async () => {
    try {
      setCallStatus(CallStatus.CONNECTING);

      const call = await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID, {
        variableValues: {
          userName: 'Honey',
        },
      });
      console.log('CALL DATA:', call);

      if (call && call.id) {
        console.log('Setting call ID:', call.id);
        setCallId(call.id);
      }
    } catch (error: any) {
      console.error('Error starting therapy session:', error);
      setErrorMessage(error?.message || error?.msg || error?.errorMsg || 'Failed to start therapy session');
      setCallStatus(CallStatus.ERROR);
      setTherapyStatus('error');
    }
  };

  const handleRetry = () => {
    setCallStatus(CallStatus.INACTIVE);
    setTherapyStatus('notStarted');
    setErrorMessage('');
    setCallId('');
    setAnalysisData(null);
  };

  const handleDisconnect = () => {
    setCallStatus(CallStatus.FINISHED);
    vapi.stop();
  };

  const handleFetchAnalysis = () => {
    if (callId) {
      fetchCallData(callId);
    } else {
      console.log('No call ID available to fetch analysis data');
    }
  };

  const handleViewReport = () => {
    if (analysisData) {
      setTherapyStatus('report');
    } else {
      handleFetchAnalysis();
    }
  };

  const handleBackFromReport = () => {
    setTherapyStatus('ended');
  };

  return (
    <section className="flex w-full max-w-4xl flex-col px-4 py-4 backdrop-blur-sm">
      <BackgroundBeams />
      <SparklesEffect />
      <TherapyHeader />

      {therapyStatus === 'report' ? (
        <FeedbackReport analysisData={analysisData} onBack={handleBackFromReport} />
      ) : (
        <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Patient isSpeaking={!isSpeaking && therapyStatus === 'ongoing'} />

          <div className="flex h-96 flex-col gap-4">
            {therapyStatus === 'ongoing' && <AI isSpeaking={isSpeaking} />}
            {therapyStatus === 'ongoing' && (
              <div className="flex flex-col gap-2">
                <AccentButton className="w-full bg-red-700 hover:bg-red-800" onClick={handleDisconnect}>
                  <Square className="mr-2 size-4" />
                  End Session
                </AccentButton>
              </div>
            )}
            {therapyStatus === 'notStarted' && <TherapyStart callStatus={callStatus} handleCall={handleCall} />}
            {therapyStatus === 'ended' && (
              <>
                <TherapyEnd setTherapyStatus={setTherapyStatus} />
                <div className="mt-2 flex flex-col gap-2">
                  {isFetchingAnalysis ? (
                    <div className="text-center text-sm text-[#4CAF50]">
                      <p className="animate-pulse">Fetching analysis data...</p>
                    </div>
                  ) : (
                    <>
                      {analysisData && (
                        <AccentButton
                          className="w-full bg-gradient-to-r from-[#4CAF50] to-[#3e8e41] transition-all duration-300 hover:from-[#3e8e41] hover:to-[#4CAF50]"
                          onClick={handleViewReport}
                        >
                          <FileText className="mr-2 size-4" />
                          View Your Report
                        </AccentButton>
                      )}
                      {!analysisData && (
                        <AccentButton
                          className="w-full border border-[#4CAF50] bg-transparent text-[#4CAF50] transition-all duration-300 hover:bg-[#4CAF50]/10"
                          onClick={handleFetchAnalysis}
                          disabled={isFetchingAnalysis}
                        >
                          Fetch Analysis Data
                        </AccentButton>
                      )}
                    </>
                  )}
                </div>
              </>
            )}{' '}
            {therapyStatus === 'error' && (
              <div className="my-auto flex flex-col items-center gap-4">
                <div className="rounded-md border border-red-700/30 bg-black/50 p-4 backdrop-blur-sm">
                  <p className="text-center text-red-400">
                    {errorMessage || 'An error occurred with the therapy session'}
                  </p>
                </div>
                <AccentButton
                  className="mt-2 w-full bg-gradient-to-r from-[#4CAF50] to-[#3e8e41] transition-all duration-300 hover:from-[#3e8e41] hover:to-[#4CAF50]"
                  onClick={handleRetry}
                >
                  Retry Connection
                </AccentButton>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
