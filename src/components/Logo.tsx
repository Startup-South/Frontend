import React from 'react'
import Image from 'next/image';

const Logo = () => {
    return (
      <div>
              {/*TRUSTED BY THESE FAMOUS BRANDS*/}
  
        <div className='container pt-16 pb-16 grid-cols-2'>
            <h4 className='text-center font-medium text-2xl pb-4'>
            TRUSTED BY THESE FAMOUS BRANDS
            </h4>
            <div className='mx-auto max-w-full grid sm:grid-cols-4'>
                <div className='block mx-auto max-w-full border-0'>
                    <Image 
                        className='rounded-sm inline-block'
                        src='/figaro.png'
                        width={150}
                        height={150}
                        alt='dp'
                    />
                </div>

                <div className='block mx-auto max-w-full border-0'>
                    <Image 
                        className='rounded-sm inline-block'
                        src='/20.png'
                        width={150}
                        height={150}
                        alt='dp'
                    />
                </div>
                  
                <div className='flex flex-col items-center gap-1'>
                    <Image className='rounded-sm inline-block' 
                        src="/europa.png" 
                        alt="quotes" 
                        width={150} 
                        height={150} 
                    />
                </div>
  
                <div className='flex flex-col items-center gap-1'>
                    <Image 
                        className='rounded-sm inline-block'
                        src='/dnotic.png'
                        width={150}
                        height={150}
                        alt='dp'
                    />
                </div>
            </div>

            <div className='mt-12 grid sm:grid-cols-3'>
                <div className='flex flex-col items-center gap-1'>
                    <Image 
                        className='rounded-sm inline-block'
                        src='/travaux.png'
                        width={150}
                        height={150}
                        alt='dp'
                    />
                </div>

                <div className='flex flex-col items-center gap-1'>
                    <Image 
                        className='rounded-sm inline-block'
                        src='/entreprises.png'
                        width={150}
                        height={150}
                        alt='dp'
                    />
                </div>

                <div className='flex flex-col items-center gap-1'>
                    <Image 
                        className='rounded-sm inline-block'
                        src='/demotiv.png'
                        width={150}
                        height={150}
                        alt='dp'
                    />
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Logo