'use client';
import React, { useState } from 'react';

import { motion } from 'motion/react';
import { AccentButton } from '@/components/custom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Bell,
  Lock,
  User,
  Globe,
  FileText,
  Trash2,
  Save,
  ToggleLeft,
  ToggleRight,
  ChevronDown,
  Shield,
  ExternalLink,
} from 'lucide-react';
import { SparklesEffect } from '@/components/ui/sparkles-effect';

interface SettingItemProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const SettingItem: React.FC<SettingItemProps> = ({ title, description, children }) => {
  return (
    <div className="flex flex-col justify-between gap-4 border-b border-zinc-800 py-5 sm:flex-row sm:items-center">
      <div className="space-y-1">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
      <div className="flex items-center">{children}</div>
    </div>
  );
};

interface ToggleProps {
  enabled: boolean;
  onChange: () => void;
  label?: string;
}

const Toggle: React.FC<ToggleProps> = ({ enabled, onChange, label }) => {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full ${enabled ? 'bg-[#4CAF50]' : 'bg-zinc-700'}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
      />
      {label && <span className="ml-3 text-sm">{label}</span>}
    </button>
  );
};

export const Settings = () => {
  const [expanded, setExpanded] = useState<string | null>('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [sessionReminders, setSessionReminders] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [highContrast, setHighContrast] = useState(false);

  const toggleExpanded = (id: string) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };

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
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="mt-1 text-zinc-400">Manage your account settings and preferences</p>
        </div>
        <AccentButton className="bg-gradient-to-r from-[#4CAF50] to-[#3e8e41]">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </AccentButton>
      </motion.div>

      {/* Settings sections */}
      <div className="space-y-6">
        {/* Account Settings */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-[#4CAF50]" />
                <CardTitle className="text-xl font-medium">Account Settings</CardTitle>
              </div>
              <button
                className="rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                onClick={() => toggleExpanded('account')}
              >
                <ChevronDown className={`h-5 w-5 transition-transform ${expanded === 'account' ? 'rotate-180' : ''}`} />
              </button>
            </CardHeader>

            {expanded === 'account' && (
              <CardContent className="px-6 pb-6">
                <div className="space-y-1 py-3">
                  <div className="flex flex-col gap-4 pb-4 sm:flex-row sm:items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
                      <User className="h-8 w-8 text-zinc-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-medium">Swanand Wagh</h3>
                      <p className="text-sm text-zinc-400">swanandwagh7@gmail.com</p>
                    </div>
                    <AccentButton className="border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
                      Change Avatar
                    </AccentButton>
                  </div>
                </div>

                <SettingItem title="Email Address" description="Update your email address associated with your account">
                  <div className="min-w-[260px] space-y-2">
                    <input
                      type="email"
                      value="swanandwagh7@gmail.com"
                      className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-sm text-white"
                    />
                    <AccentButton className="border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
                      Update Email
                    </AccentButton>
                  </div>
                </SettingItem>

                <SettingItem title="Change Password" description="Update your password for added security">
                  <AccentButton className="border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
                    <Lock className="mr-2 h-4 w-4" />
                    Reset Password
                  </AccentButton>
                </SettingItem>

                <SettingItem
                  title="Delete Account"
                  description="Permanently delete your account and all associated data"
                >
                  <AccentButton className="border border-red-900/30 bg-red-950/30 text-red-400 hover:bg-red-900/50 hover:text-red-200">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Account
                  </AccentButton>
                </SettingItem>
              </CardContent>
            )}
          </Card>
        </motion.div>

        {/* Notifications */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center space-x-3">
                <Bell className="h-5 w-5 text-[#4CAF50]" />
                <CardTitle className="text-xl font-medium">Notifications</CardTitle>
              </div>
              <button
                className="rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                onClick={() => toggleExpanded('notifications')}
              >
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${expanded === 'notifications' ? 'rotate-180' : ''}`}
                />
              </button>
            </CardHeader>

            {expanded === 'notifications' && (
              <CardContent className="px-6 pb-6">
                <SettingItem title="Email Notifications" description="Receive email updates about your therapy journey">
                  <Toggle enabled={emailNotifications} onChange={() => setEmailNotifications(!emailNotifications)} />
                </SettingItem>

                <SettingItem
                  title="Session Reminders"
                  description="Get notifications before your scheduled therapy sessions"
                >
                  <Toggle enabled={sessionReminders} onChange={() => setSessionReminders(!sessionReminders)} />
                </SettingItem>

                <SettingItem
                  title="Weekly Progress Reports"
                  description="Receive a summary of your therapy progress each week"
                >
                  <Toggle enabled={weeklyReports} onChange={() => setWeeklyReports(!weeklyReports)} />
                </SettingItem>
              </CardContent>
            )}
          </Card>
        </motion.div>

        {/* Privacy & Data */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-[#4CAF50]" />
                <CardTitle className="text-xl font-medium">Privacy & Data</CardTitle>
              </div>
              <button
                className="rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                onClick={() => toggleExpanded('privacy')}
              >
                <ChevronDown className={`h-5 w-5 transition-transform ${expanded === 'privacy' ? 'rotate-180' : ''}`} />
              </button>
            </CardHeader>

            {expanded === 'privacy' && (
              <CardContent className="px-6 pb-6">
                <SettingItem
                  title="Data Sharing"
                  description="Allow anonymized data to be used for improving the AI model"
                >
                  <Toggle enabled={dataSharing} onChange={() => setDataSharing(!dataSharing)} />
                </SettingItem>

                <SettingItem
                  title="Download Your Data"
                  description="Export all your conversation history and therapy data"
                >
                  <AccentButton className="border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
                    <FileText className="mr-2 h-4 w-4" />
                    Export Data
                  </AccentButton>
                </SettingItem>

                <SettingItem title="Privacy Policy" description="Read our privacy policy and terms of service">
                  <AccentButton className="border border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Policy
                  </AccentButton>
                </SettingItem>
              </CardContent>
            )}
          </Card>
        </motion.div>

        {/* Appearance */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-[#4CAF50]" />
                <CardTitle className="text-xl font-medium">Appearance & Accessibility</CardTitle>
              </div>
              <button
                className="rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                onClick={() => toggleExpanded('appearance')}
              >
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${expanded === 'appearance' ? 'rotate-180' : ''}`}
                />
              </button>
            </CardHeader>

            {expanded === 'appearance' && (
              <CardContent className="px-6 pb-6">
                <SettingItem title="Dark Mode" description="Toggle between dark and light mode">
                  <Toggle enabled={darkMode} onChange={() => setDarkMode(!darkMode)} />
                </SettingItem>

                <SettingItem title="High Contrast" description="Increase contrast for better readability">
                  <Toggle enabled={highContrast} onChange={() => setHighContrast(!highContrast)} />
                </SettingItem>

                <SettingItem title="Text Size" description="Adjust the size of text throughout the application">
                  <div className="flex w-full max-w-[200px] items-center rounded-md border border-zinc-700 bg-zinc-800 p-1">
                    {['S', 'M', 'L', 'XL'].map((size, index) => (
                      <button
                        key={size}
                        className={`flex-1 rounded px-2 py-1 text-sm ${
                          index === 1 ? 'bg-[#4CAF50] text-white' : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </SettingItem>
              </CardContent>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
