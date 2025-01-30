'use client'
import React, { useState } from 'react';
import Navigations from "../partials/navigation/Navigations";
import Setting from "../partials/setting/page";
import ChatBot from "../partials/chatbot/page";
import Loader from '../partials/loader/page';
import MobileNavigation from '@/component/partials/navigation/mobileNavigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <>
    <Loader/>
           <MobileNavigation/>
      <Setting />
      <main>{children}</main>

<div className='md:flex hidden'>
      <Navigations />
</div>
      <ChatBot />
    </>
  );
}
