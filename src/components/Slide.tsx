import Image from 'next/image';
import React from 'react'


interface propsType {
    img: string;
    title: string;
    mainTitle: string;
}

const Slide:React.FC<propsType> = ({img, title, mainTitle}) => {
  return (
    <div className='outline-none border-none relative justify-center items-center'>
      <div className='absolute md:left-[200px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 sm:bg-transparent p-4 sm:p-0 rounded-sm sm:rounded-none'>
        <h1 className='mt-20 flex justify-center items-center text-white text-7xl'>{title}</h1>
        <h2 className='mt-16 flex justify-center text-center text-white text-2xl'>
            {mainTitle}
        </h2>
        {/*<h3 className='text-[24px] text-gray-500'>
            starting at{""}
            <b className='text-[20px] md:text-[24px] lg:text-[30px]'>{price}</b>
            .00
        </h3>*/}
        <button type='submit' className='bg-blue-500 flex justify-center text-white rounded-full py-2 max-[500px]:px-4 px-6 helvetica_bold text-lg max-[500px]:text-md hover:scale-110 ease-in-out duration-[0.4s]'>
        <b>BUY NOW</b>
        </button>
      </div>

      <Image className='w-full h-full md:h-auto rounded-xl object-cover md:object-left-bottom duration-[2s]' alt="banner" width={5000} height={5000} src={img}  />

    </div>
  );
};

export default Slide
