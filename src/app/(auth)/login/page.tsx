import React from 'react';
import { NextPage } from 'next';
import { Login } from '@/features/auth/login/components';

const LoginPage: NextPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <div className="relative flex flex-1 items-center justify-center py-0">
          <Login />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
