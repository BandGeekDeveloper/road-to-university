import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { LiaSearchLocationSolid } from 'react-icons/lia';
import { RiAccountCircleFill } from 'react-icons/ri';

export const NavMenu = () => {
  return (
    <div className='nav-menu-container'>
      <div className='navbar bg-neutral w-[92%] rounded-box mt-6 shadow-lg'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label
              tabIndex={0}
              className='btn btn-ghost btn-circle text-base-100'
            >
              <BiMenuAltLeft className='w-5 h-5' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>School Search</a>
              </li>
              <li>
                <a>College Timeline</a>
              </li>
              <li>
                <a>Student Resources</a>
              </li>
              <li>
                <a>Career Exploration</a>
              </li>
              <li>
                <a>Parent Resources</a>
              </li>
              <li>
                <a>Support</a>
              </li>
              <li>
                <a>Accessibility</a>
              </li>
              <li>
                <a>Calculators</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-xl navbar-center text-base-100'>
          Road to University
        </div>
        <div className='navbar-end'>
          <button className='btn btn-ghost btn-circle text-base-100'>
            <LiaSearchLocationSolid className='w-8 h-8' />
          </button>
          <button className='btn btn-ghost btn-circle text-base-100'>
            <RiAccountCircleFill className='w-8 h-8' />
          </button>
        </div>
      </div>
    </div>
  );
};
