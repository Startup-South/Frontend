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
        <a href="#" class="">
            <img className='h-12 w-auto' src="/Logo4.png" alt=""/>
        </a>
        </div>


          <div className='flex items-center w-fit gap-10 mx-auto font-bold py-4 text-white space-x-5'>
              <Link className='navbar__link relative' href='#'>HOME</Link>
              <Link className='navbar__link relative' href='#'>SHOP</Link>
              <Link className='navbar__link relative' href='#'>FAQS</Link>
              <Link className='navbar__link relative' href='#'>CONTACT</Link>
              <Link className='navbar__link relative' href='#'>MY ACCOUNT</Link>
              <Link className='navbar__link relative' href='#'>BLOG</Link>
        </div>


        <div className='lg:justify-end'>
            <input type="text" id='search' className='relative peer z-10 bg-transparent w-12 h-12 border rounded-full cursor-pointer outline-none pl-12 focus:w-full focus:border-black focus:cursor-text focus:pl-16 focus:pr-4' placeholder='Search...' />
            <svg aria-hidden="true" focusable="false" role="presentation" className="absolute inset-y-0 my-auto h-8 w-12 px-3.5 border-r border-transparent peer-focus:border-black peer-focus:stroke-black6" viewBox="0 0 37 40">
              <path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z"></path>
            </svg>
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
