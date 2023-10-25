import { NavMenu } from '@/components/NavMenu';
import React from 'react';

export const HomePage = () => {
  return (
    <div className='w-full h-screen'>
      <NavMenu />
      <div className='flex flex-col my-20 lg:flex-row'>
        <div></div>
      </div>
    </div>
  );
};
