import Link from 'next/link';
import React from 'react'
import { CiUser } from 'react-icons/ci';
import { FaSearch } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa6';
import { MdOutlineShoppingCart } from 'react-icons/md';


const HeaderMain = () => {
 const Styles ={
    backgroundColor:'#0093ff',
 }

  return (    
    <div style={Styles} className='border-0093ff py-6'>
      <div className='container sm:flex justify-between items-center'>
        <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish'>
<<<<<<< HEAD
        <a href="/" class="">
=======
        <a href="#">
>>>>>>> 9f62ce009674dfabd2a6f5cf3fbf64d9b8ee5e3a
            <img className='h-12 w-auto' src="/Logo4.png" alt=""/>
        </a>
        </div>


<<<<<<< HEAD
        <div className='flex items-center w-fit gap-10 mx-auto font-bold py-4 text-white space-x-5'>
          <Link className='navbar__link relative' href='/'>HOME</Link>
          <Link className='navbar__link relative' href='/pages/shop'>SHOP</Link>
          <Link className='navbar__link relative' href='/pages/faqs'>FAQS</Link>
          <Link className='navbar__link relative' href='/pages/contact'>CONTACT</Link>
          <Link className='navbar__link relative' href='/pages/my-account'>MY ACCOUNT</Link>
          <Link className='navbar__link relative' href='/pages/blog'>BLOG</Link>
=======
          <div className='flex items-center w-fit gap-10 mx-auto font-bold py-4 text-white space-x-5'>
             <Link className='navbar__link relative' href='/'>HOME</Link>
            <Link className='navbar__link relative' href='/pages/shop'>SHOP</Link>
            <Link className='navbar__link relative' href='/pages/faqs'>FAQS</Link>
            <Link className='navbar__link relative' href='/pages/contact'>CONTACT</Link>
            <Link className='navbar__link relative' href='/pages/my-account'>MY ACCOUNT</Link>
            <Link className='navbar__link relative' href='/pages/blog'>BLOG</Link>
>>>>>>> 9f62ce009674dfabd2a6f5cf3fbf64d9b8ee5e3a
        </div>


        <div className='lg:justify-end'>
            <input type="text" id='search' className='relative peer z-10 bg-transparent w-12 h-12 border rounded-full cursor-pointer outline-none pl-12 focus:w-full focus:border-black focus:cursor-text focus:pl-16 focus:pr-4' placeholder='Search...' />
            
        </div>
        <div className='hidden lg:flex gap-4 text-white text-[30px] cursor-pointer'>
          <CiUser  />
          <div className='relative'>
            <MdOutlineShoppingCart />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
            0
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMain
