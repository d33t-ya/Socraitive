'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { HeartFilledIcon, ReloadIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GalaxySpots } from '@/components/ui/galaxy-spots';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';

import { loginSchema } from '../schema';
import { z } from 'zod';

export const Login = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setError(null);
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

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-zinc-200">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="name@example.com"
                          className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white focus:border-[#4CAF50] focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <div className="flex items-center justify-between">
                        <FormLabel className="text-sm font-medium text-zinc-200">Password</FormLabel>
                        <Link
                          href="/forgot-password"
                          className="text-xs text-[#4CAF50] hover:text-[#4CAF50] hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white focus:border-[#4CAF50] focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-zinc-500 data-[state=checked]:border-[#4CAF50] data-[state=unchecked]:border-zinc-700 data-[state=checked]:bg-[#4CAF50] data-[state=unchecked]:bg-zinc-300"
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-medium text-zinc-300">Remember me</FormLabel>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#4CAF50] to-[#3e8e41]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>

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
