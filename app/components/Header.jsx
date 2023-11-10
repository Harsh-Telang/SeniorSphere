"use client"
import Link from 'next/link'
import { FaBars } from 'react-icons/fa';
import SideNav from './SideNav'
import { useState } from 'react';

const Header = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
      setIsSideNavOpen(!isSideNavOpen);
    };
  return (
    <>
        <nav className='flex justify-around p-5 w-full sm:h-24 h-32 shadow-md'>
        <div className="menu-icon" onClick={toggleSideNav}>
          <FaBars />
        </div>
      <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
        <div id="logo" className='flex items-center gap-1'>
        <img src="/Assets/logo.svg" alt="logo" className='w-24'></img>
        <p className='text-2xl font-semibold'>SENIOR SPHERE</p></div>
        <div id="logincart" className='flex items-center gap-10'>
            <Link href="/CustomerSpt"><button className='w-20 md:w-40 h-14 outline-none border-gray-300 border  rounded-full text-lg cursor-pointer text-gray-700'>Service</button></Link>
            <Link href="/Health"><button className='w-20 md:w-40 h-14 outline-none border-gray-300 border  rounded-full text-lg cursor-pointer text-gray-700'>Health</button></Link>
        </div>
       
    </nav>
    </>
  )
}

export default Header