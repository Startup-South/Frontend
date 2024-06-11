import Image from 'next/image';
import React from 'react'


interface propsType {
    img: string;
    title: string;
    mainTitle: string;
}

const Slide:React.FC<propsType> = ({img, title, mainTitle}) => {
  return (
    <div className='outline-none border-none relative'>
      <div className='absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none'>
        <h1 className='text-white text-accent text-[24px] lg:text-[28px]'>{title}</h1>
        <h2 className='text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading[1,2]'>
            {mainTitle}
        </h2>
        {/*<h3 className='text-[24px] text-gray-500'>
            starting at{""}
            <b className='text-[20px] md:text-[24px] lg:text-[30px]'>{price}</b>
            .00
        </h3>*/}
        <button className='bg-blue-500 flex justify-center text-center text-white rounded-full py-2 max-[500px]:px-4 px-6 helvetica_bold text-lg max-[500px]:text-md hover:scale-110 ease-in-out duration-[0.4s]'>
        <b>BUY NOW</b>
        </button>
      </div>

      <Image className='w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom' alt="banner" width={2000} height={2000} src={img} />

    </div>
  );
};

export default Slide
