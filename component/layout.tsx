'use client'
import React, { useState } from 'react';
import Navigations from "./partials/navigation/Navigations";
import Setting from "@/component/partials/setting";
import ChatBot from "@/component/partials/chatbot/page";
import Animation from '@/component/partials/animation';
import MobileNavigation from '@/component/partials/navigation/mobileNavigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <>
    <Animation/>
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
