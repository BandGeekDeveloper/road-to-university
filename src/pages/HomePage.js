import { NavMenu } from '@/components/NavMenu';
import React from 'react';

export const HomePage = () => {
  return (
    <div className='w-full h-screen'>
      <NavMenu />
      <div className='flex flex-col mt-5 lg:flex-row'>
        <div className='w-1/2 h-screen'></div>
        <div className='flex justify-center w-1/2 h-screen py-8 mt-auto'>
          <h1 className='text-4xl'>You Decide where go next</h1>
        </div>
      </div>
    </div>
  );
};
