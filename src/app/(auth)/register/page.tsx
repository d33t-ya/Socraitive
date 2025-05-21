import React from 'react';
import { NextPage } from 'next';
import { Register } from '@/features/auth/register/components';

const RegisterPage: NextPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <div className="relative flex flex-1 items-center justify-center py-12">
          <Register />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
