import { NavMenu } from '@/components/NavMenu';
import React from 'react';

export const HomePage = () => {
  return (
    <div className='w-full h-screen'>
      <NavMenu />
      <div className='flex flex-col mt-5 lg:flex-row'>
        <div className='w-full h-screen lg:w-1/2'></div>
        <div className='flex flex-col justify-center items-center w-full lg:w-1/2 h-screen py-8 m-auto'>
          <h1 className='text-3xl lg:text-4xl'>You Decide where go next</h1>
          <p className='mt-8 text-center'>
            As you stand at the crossroads of your future, remember that this is
            your journey, and you have the power to shape it in ways you can't
            even imagine yet. Embrace the uncertainty, follow your passions, and
            trust in your abilities. The world is full of opportunities waiting
            for you to explore and create your own path.
          </p>
          <div className='mt-8 flex space-x-10'>
            <button className='btn btn-primary shadow-lg'>
              Begin your Journey
            </button>
            <button className='btn btn-accent shadow-lg'>
              Begin your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
