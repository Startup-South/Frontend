import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
    <div className='bg-gray-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
      <div className='p-20'>
        <p className='text-gray-800 font-bold text-3xl pb-6'>
            <img className='text-2xl cursor-pointer hover:text-orange-600' src="/Logo3.png" alt="logo" width={150} height={150}/>
        </p>
        <div className='flex gap-6 pb-5'>
            <link rel="stylesheet" icon="{FaInstagram}"/>
            {/*section pour icone*/}
            <FaInstagram className='text-2xl cursor-pointer hover:text-orange-600'/>
            <FaFacebook className='text-2xl cursor-pointer hover:text-blue-600'/>
            <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600'/>
            <FaYoutube className='text-2xl cursor-pointer hover:text-red-600'/>
        </div>
      </div>
      <div className='p-5'>
        <ul>
            <p className='text-gray-800 font-bold text-2xl pb-4'>Our policies</p>
            <li className='text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer'>Terms of Sale</li>
            <li className='text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer'>Privacy Policy</li>
            <li className='text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer'>Return Policy</li>
            <li className='text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer'>Refund Policy</li>
            <li className='text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer'>Shipping Policy</li>
            <li className='text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer'>Payment Method</li>
            <li className='text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer'>Disclaimer</li>
        </ul>
      </div>
      <div className='p-5'>
        <ul>
            <p className='text-gray-800 font-bold text-2xl pb-4'>Support</p>
            <li className='text-gray-500 text-mb pb-2 font-semibold hover:text-black cursor-pointer'>My account</li>
            <li className='text-gray-500 text-mb pb-2 font-semibold hover:text-black cursor-pointer'>Account details</li>
            <li className='text-gray-500 text-mb pb-2 font-semibold hover:text-black cursor-pointer'>Order history</li>
            <li className='text-gray-500 text-mb pb-2 font-semibold hover:text-black cursor-pointer'>Contact</li>
            <li className='text-gray-500 text-mb pb-2 font-semibold hover:text-black cursor-pointer'>Blog</li>
            <li className='text-gray-500 text-mb pb-2 font-semibold hover:text-black cursor-pointer'>Search</li>
        </ul>
      </div>
      <div className='p-5'>
        <ul>
            <p className='text-gray-800 font-bold text-2xl pb-4'>Contact</p>
            <a href='mailto:contact@corten.plus' className='text-gray-500 text-mb pb-2 font-semibold hover:text-black cursor-pointer'>contact@corten.plus</a>
        </ul>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center text-center bg-gray-200'>
        <h1 className='text-gray-800 text-center'>© 2024, Corten+ LLC. Tous droits réservés.</h1></div>
    </>
    
  );
}

export default Footer
