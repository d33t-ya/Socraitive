'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { motion } from 'motion/react';
import { AccentButton } from '@/components/custom';
import { HeartFilledIcon } from '@radix-ui/react-icons';
import { GalaxySpots } from '@/components/ui/galaxy-spots';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Mock authentication - normally this would call an API
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <>
      <BackgroundBeams />
      <GalaxySpots count={30} />
      <SparklesEffect />

      <div className="container w-full max-w-md px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <Link href="/" className="inline-flex items-center justify-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4CAF50] to-[#8BC34A]">
              <HeartFilledIcon className="size-5 text-white" />
            </div>
            <div className="font-normal">
              <span className="font-bold text-white">Emma</span>
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">
                {' '}
                | AI Therapist
              </span>
            </div>
          </Link>
        </motion.div>

        <Card className="border-zinc-800 bg-zinc-900/70 backdrop-blur-sm">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-xl font-bold text-white">Welcome Back</CardTitle>
            <CardDescription>Sign in to your account to continue</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="mb-4 rounded-md border border-red-700/30 bg-red-900/20 p-3 text-sm text-red-200">
                {error}
              </div>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-200">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white focus:border-[#4CAF50] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-zinc-200">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-xs text-[#4CAF50] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white focus:border-[#4CAF50] focus:outline-none"
                />
              </div>

              <AccentButton
                type="submit"
                className="w-full bg-gradient-to-r from-[#4CAF50] to-[#3e8e41]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </AccentButton>
            </form>
          </CardContent>{' '}
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-white">
              Don't have an account?{' '}
              <Link href="/register" className="text-[#4CAF50] hover:text-[#4CAF50] hover:underline">
                <span className="text-[#4CAF50]">Sign up</span>
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Emma AI Therapist. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
