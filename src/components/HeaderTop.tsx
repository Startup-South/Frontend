import React from 'react'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";


function HeaderTop() {

    const Styles={
        backgroundColor: 'black',
    }

    return (
        <div style={Styles} className='border-b border-blue-200 hidden sm:block'>
            <div className='container py-2'>
                <div className='flex justify-between items-center'>
                    <div className='hidden lg:flex gap-1'>
                        {/*<div className="header_top__icon_wrapper">
                        <FaFacebook />
                        </div>
                        <div className="header_top__icon_wrapper">
                        <FaTwitter />
                        </div>
                        <div className="header_top__icon_wrapper">
                        <FaInstagram />
                        </div>
                        <div className="header_top__icon_wrapper">
                        <FaLinkedin />
                        </div>*/}
                    </div>
                    <div className='text-white text-[18px]'>
                        <b>100% SUCCESS RATE | MONEY-BACK GUARANTEE | EXPRESS DELIVERY</b>
                    </div>
                   <div className="flex gap-4">
                        {/*<select className='text-gray text-[12px] w-[70px]' name="currency" id="currency">
                            <option value="USD $">USD $</select></>
                            <option value="EURO €">EURO €</option>
                            <option value="USD £">USD £</option>
                        </select>
                        <select className='text-gray text-[12px] w-[70px]' name="language" id="language">
                            <option value="English">English</option>
                            <option value="French">French</option>
                        </select>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop
