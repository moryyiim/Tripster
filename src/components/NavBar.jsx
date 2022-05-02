import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className='shadow-2xl flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>
          Tripster
        </h1>
      </div>
      <ul className='hidden md:flex mr-32'>
        <li className='cursor-pointer hover:border-b'>Home</li>
        <li className='cursor-pointer hover:border-b'>Destinations</li>
        <li className='cursor-pointer hover:border-b'>Home</li>
        <li className='cursor-pointer hover:border-b'>Travel</li>
        <li className='cursor-pointer hover:border-b'>Book</li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='mr-2 cursor-pointer' size={20} />
        <BsPerson onClick={handleNav} className='cursor-pointer' size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10 cursor-pointer'>
        {nav ? (
          <AiOutlineClose className='text-black' size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'absolute text-black left-0 top-0  w-full bg-gray-100/80 px-4 py-5 flex flex-col'
            : 'absolute left-[-100%]'
        }
      >
        <ul>
          <h1>Tripster</h1>
          <li className='border-b border-zinc-400 cursor-pointer'>Home</li>
          <li className='border-b border-zinc-400 cursor-pointer'>
            Destinations
          </li>
          <li className='border-b border-zinc-400 cursor-pointer'>Home</li>
          <li className='border-b border-zinc-400 cursor-pointer'>Travel</li>
          <li className='border-b border-zinc-400 cursor-pointer'>Book</li>
          <div className='flex flex-col justify-center md:mr-64 md:ml-64 ml-20 mr-20 border-none'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-center my-8'>
            <FaFacebook className='icon mx-2' />
            <FaInstagram className='icon mx-2' />
            <FaTwitter className='icon mx-2' />
            <FaYoutube className='icon mx-2' />
            <FaPinterest className='icon mx-2' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
