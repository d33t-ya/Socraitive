'use client';

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AccentButton } from '@/components/custom';
import { HeartFilledIcon } from '@radix-ui/react-icons';
import { GalaxySpots } from '@/components/ui/galaxy-spots';
import { Home, FileText, MessageCircle, BarChart3, MapPin, Settings, LogOut, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const sidebarItems = [
  { icon: <Home className="h-5 w-5" />, label: 'Overview', href: '/dashboard' },
  { icon: <FileText className="h-5 w-5" />, label: 'Reports', href: '/dashboard/reports' },
  { icon: <MessageCircle className="h-5 w-5" />, label: 'Conversations', href: '/dashboard/conversations' },
  { icon: <MapPin className="h-5 w-5" />, label: 'Nearby Clinics', href: '/dashboard/clinics' },
  { icon: <BarChart3 className="h-5 w-5" />, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: <Settings className="h-5 w-5" />, label: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Mobile Header */}
      <header className="sticky top-0 z-30 flex w-full items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 py-3 backdrop-blur-md md:hidden">
        <button className="rounded-full p-2 hover:bg-zinc-800" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#4CAF50] to-[#8BC34A]">
            <HeartFilledIcon className="size-4 text-white" />
          </div>
          <div className="font-normal">
            <span className="font-bold text-white">Emma</span>
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">
              {' '}
              | Dashboard
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <button className="rounded-full bg-zinc-800 p-2">
            <User className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div className="relative flex flex-1">
        <GalaxySpots count={30} />

        {/* Sidebar - Desktop */}
        <aside className="sticky top-0 hidden h-screen w-64 flex-shrink-0 flex-col border-r border-zinc-800 bg-zinc-900/80 backdrop-blur-md md:flex">
          <div className="flex items-center gap-2 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4CAF50] to-[#8BC34A]">
              <HeartFilledIcon className="size-5 text-white" />
            </div>
            <div className="font-normal">
              <span className="font-bold text-white">Emma</span>
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">
                {' '}
                | Dashboard
              </span>
            </div>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive ? 'bg-[#4CAF50]/20 text-white' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.label}
                  {isActive && <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#4CAF50]"></div>}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-zinc-800 p-4">
            <div className="flex items-center gap-3 rounded-lg px-3 py-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800">
                <User className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Swanand Wagh</p>
                <p className="text-xs text-zinc-400">swanandwagh7@gmail.com</p>
              </div>
            </div>

            <AccentButton
              onClick={handleLogout}
              className="mt-2 w-full justify-center border border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </AccentButton>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              <motion.aside
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: 'spring', damping: 30 }}
                className="fixed left-0 top-0 z-30 h-full w-64 bg-zinc-900 shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-2 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4CAF50] to-[#8BC34A]">
                    <HeartFilledIcon className="size-5 text-white" />
                  </div>
                  <div className="font-normal">
                    <span className="font-bold text-white">Emma</span>
                    <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">
                      {' '}
                      | Dashboard
                    </span>
                  </div>
                </div>

                <div className="border-b border-zinc-800 pb-4">
                  <div className="flex items-center gap-3 px-6 py-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800">
                      <User className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Swanand Wagh</p>
                      <p className="text-xs text-zinc-400">swanandwagh7@gmail.com</p>
                    </div>
                  </div>
                </div>

                <nav className="space-y-1 px-3 py-4">
                  {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                          isActive
                            ? 'bg-[#4CAF50]/20 text-white'
                            : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
                        }`}
                      >
                        {item.icon}
                        {item.label}
                        {isActive && <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#4CAF50]"></div>}
                      </Link>
                    );
                  })}
                </nav>

                <div className="absolute bottom-8 left-0 w-full px-6">
                  <AccentButton
                    onClick={handleLogout}
                    className="w-full justify-center border border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </AccentButton>
                </div>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden bg-black px-4 py-8 md:px-8 lg:px-12">{children}</main>
      </div>
    </div>
  );
}
