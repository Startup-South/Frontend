// app/components/Navbar.tsx
"use client";
import Link from 'next/dist/client/link'
import React from 'react'

const Navbar: React.FC = () => {
  const Styles={
    backgroundColor: '#0093ff',
}
  return (
    <div style={Styles} className='hidden sm:block'>
      <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-bold py-4 text-blackish'>
            <Link className='navbar__link relative' href='#'>HOME</Link>
            <Link className='navbar__link relative' href='/pages/shop'>SHOP</Link>
            <Link className='navbar__link relative' href='/pages/faqs'>FAQS</Link>
            <Link className='navbar__link relative' href='/pages/contact'>CONTACT</Link>
            <Link className='navbar__link relative' href='/pages/my-account'>MY ACCOUNT</Link>
            <Link className='navbar__link relative' href='/pages/blog'>BLOG</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
