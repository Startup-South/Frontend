import React from 'react'
import Image from 'next/image';

const Step = () => {
  return (
    <div>
            {/*STEP BY STEP IMAGE*/}

        <div className='container pt-16 pb-16 grid-cols-2'>
            <h4 className='text-center font-medium text-2xl pb-4'>
            STEP-BY-STEP
            </h4>
            <div className='mt-12 grid sm:grid-cols-3'>
                <div className='border border-white rounded-2xl grid place-items-center p-6 lg:p-0'>
                    <div className='flex flex-col items-center gap-1'>
                        <Image 
                            className='rounded-full inline-block'
                            src='/order.png'
                            width={200}
                            height={200}
                            alt='dp'
                        />
                        <p className='text-black text-[20px]'>EASY ORDERING ONLINE</p>
                    </div>
                </div>
                
                <div className='border border-white rounded-2xl grid place-items-center p-6 lg:p-0'>
                    <div className='flex flex-col items-center gap-1'>
                        <Image className='inline-block py-2' 
                        src="/QUICK.png" 
                        alt="quotes" 
                        width={200} 
                        height={200} 
                        />
                        <p className='text-black text-[20px]'>FAST DELIVERY</p>
                    </div>
                </div>

                <div className='border border-white rounded-2xl grid place-items-center p-6 lg:p-0'>
                    <div className='flex flex-col items-center gap-1'>
                        <Image 
                            className='rounded-full inline-block'
                            src='/EASY.png'
                            width={200}
                            height={200}
                            alt='dp'
                        />
                        <p className='text-black text-[20px]'>EASY ORDERING ONLINE</p>
                    </div>
                </div>
        </div>
    </div>
    </div>
  );
};

export default Step
