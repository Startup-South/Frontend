import React from 'react'
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div>
        <div className='container pt-16 pb-16 grid-cols-2'>
            <h2 className='text-center font-medium text-2xl pb-4'>
            STEP-BY-STEP
            </h2>
            <div className='grid lg:grid-cols-[300px, 1fr] gap-4'>
                <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
                    <div className='text-center flex flex-col items-center gap-1'>
                        <Image 
                            className='rounded-full inline-block'
                            src='/order.png'
                            width={200}
                            height={200}
                            alt='dp'
                        />
                        <h2 className='text-gray-500 font-black text-[20px]'>EASY ORDERING ONLINE</h2>
                    </div>
                </div>
            <div className='grid lg:grid-cols-[300px, 1fr] gap-4'>
                <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
                    <div className='text-center flex flex-col items-center gap-1'>
                        <Image className='inline-block py-2' 
                        src="/QUICK.png" 
                        alt="quotes" 
                        width={200} 
                        height={200} 
                        />
                        <h2 className='text-gray-500 font-black text-[20px]'>FAST DELIVERY</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Testimonial
