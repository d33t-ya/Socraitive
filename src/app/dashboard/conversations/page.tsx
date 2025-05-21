import React from 'react';
import { NextPage } from 'next';
import { Conversations } from '@/features/conversations/components';

const ConversationsPage: NextPage = () => {
  return (
    <>
      <Conversations />
    </>
  );
};

export default ConversationsPage;
