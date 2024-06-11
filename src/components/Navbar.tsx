import Link from 'next/dist/client/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
            <Link className='navbar__link relative' href='#'>HOME</Link>
            <Link className='navbar__link relative' href='#'>SHOP</Link>
            <Link className='navbar__link relative' href='#'>ABOUT US</Link>
            <Link className='navbar__link relative' href='#'>FAQS</Link>
            <Link className='navbar__link relative' href='#'>CONTACT</Link>
            <Link className='navbar__link relative' href='#'>MY ACCOUNT</Link>
            <Link className='navbar__link relative' href='#'>BLOG</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
