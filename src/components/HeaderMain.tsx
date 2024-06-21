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

        <a href="/">

            <img className='h-12 w-auto' src="/Logo4.png" alt=""/>
        </a>
        </div>
        <div className='flex items-center w-fit gap-10 mx-auto font-bold py-4 text-white space-x-5'>
          <Link className='navbar__link relative' href='/'>HOME</Link>
          <Link className='navbar__link relative' href='/pages/shop'>SHOP</Link>
          <Link className='navbar__link relative' href='/pages/faqs'>FAQS</Link>
          <Link className='navbar__link relative' href='/pages/contact'>CONTACT</Link>
          <div className='navbar__link relative group'>
            <Link href='/pages/my-account'>MY ACCOUNT</Link>
            <div className='absolute hidden group-hover:block bg-white text-black py-4'>
              <Link className='block px-4 py-2 hover:bg-gray-200' href='/pages/my-account'>My account</Link>
              <Link className='block px-4 py-2 hover:bg-gray-200' href='/pages/account-details'>Account details</Link>
              <Link className='block px-4 py-2 hover:bg-gray-200' href='/pages/order-history'>Order history</Link>
            </div>
          </div>
          <Link className='navbar__link relative' href='/pages/blog'>BLOG</Link>
        </div>


        <div className='lg:justify-end relative'>
    <input type="text" id='search' className='relative z-10 bg-transparent w-12 h-12 border rounded-full cursor-pointer outline-none pl-12 focus:w-full focus:border-black focus:cursor-text focus:pl-16 focus:pr-4' placeholder='Search...' />
    <i className="fas fa-search absolute top-3 left-4 text-gray-500 peer-focus:text-black"></i>
</div>
<div className='hidden lg:flex gap-4 text-white text-[30px] cursor-pointer'>
    <a href="/user-profile" className='flex items-center'>
        <CiUser />
    </a>
    <div className='relative'>
        <a href="/cart" className='flex items-center'>
            <MdOutlineShoppingCart />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
                {/* <!-- Vous pouvez ajouter du contenu ici, comme le nombre d'articles dans le panier --> */}
            </div>
        </a>
    </div>
</div>


      </div>
    </div>
  )
}

export default HeaderMain
