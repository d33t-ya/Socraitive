'use client';

import { useState, useEffect, useRef } from 'react';
import { Square } from 'lucide-react';
import { AccentButton } from '@/components/custom';
import { vapi } from '@/lib/vapi.sdk';

import { AI } from './AI';
import { Patient } from './Patient';
import { TherapyEnd } from './TherapyEnd';
import { TherapyStart } from './TherapyStart';
import { TherapyHeader } from './TherapyHeader';

type TherapyStatus = 'notStarted' | 'ongoing' | 'ended' | 'error';

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
  const [lastMessage, setLastMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const onCallStart = () => {
      setCallStatus(CallStatus.ACTIVE);
      setTherapyStatus('ongoing');
      setErrorMessage('');
    };

    const onCallEnd = () => {
      setCallStatus(CallStatus.FINISHED);
      setTherapyStatus('ended');
      setIsSpeaking(false);
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
      setIsSpeaking(true);
    };

    const onSpeechEnd = () => {
      console.log('speech end');
      setIsSpeaking(false);
    };

    const onError = (error: Error) => {
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
  }, []);

  const handleCall = async () => {
    try {
      setCallStatus(CallStatus.CONNECTING);

      const call = await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID, {
        variableValues: {
          userName: 'Honey',
        },
      });
      console.log('CALL DATA:', call);
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
  };

  const handleDisconnect = () => {
    setCallStatus(CallStatus.FINISHED);
    vapi.stop();
  };

  return (
    <section className="flex w-full max-w-4xl flex-col rounded-lg bg-white px-4">
      <TherapyHeader />

      <div className="my-6 grid grid-cols-2 gap-4">
        <Patient isSpeaking={isSpeaking && messages.length > 0 && messages[messages.length - 1].role === 'user'} />

        <div className="flex h-96 flex-col gap-4">
          {therapyStatus === 'ongoing' && (
            <AI isSpeaking={isSpeaking && messages.length > 0 && messages[messages.length - 1].role === 'ai'} />
          )}
          {therapyStatus === 'ongoing' && (
            <div className="flex flex-col gap-2">
              {lastMessage && (
                <div className="max-h-24 overflow-y-auto rounded bg-gray-100 p-2 text-sm">
                  <p>{lastMessage}</p>
                </div>
              )}
              <AccentButton className="w-full bg-red-700" onClick={handleDisconnect}>
                <Square className="mr-2 size-4" />
                End Session
              </AccentButton>
            </div>
          )}

          {therapyStatus === 'notStarted' && <TherapyStart callStatus={callStatus} handleCall={handleCall} />}

          {therapyStatus === 'ended' && <TherapyEnd setTherapyStatus={setTherapyStatus} />}

          {therapyStatus === 'error' && (
            <div className="my-auto flex flex-col items-center gap-4">
              <div className="rounded-md bg-red-50 p-4">
                <p className="text-center text-red-700">
                  {errorMessage || 'An error occurred with the therapy session'}
                </p>
              </div>
              <AccentButton className="mt-2 w-full bg-[#4CAF50] hover:bg-[#3e8e41]" onClick={handleRetry}>
                Retry Connection
              </AccentButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
