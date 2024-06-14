import React from 'react'
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string; 
}

const generateRating = (rating: number) => {
  switch (rating) {
    case 1:
      return(
        <div className='flex gap-1 text-[20px] text-[#FF9529]'>
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
      case 2:
      return(
        <div className='flex gap-1 text-[20px] text-[#FF9529]'>
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
      case 3:
      return(
        <div className='flex gap-1 text-[20px] text-[#FF9529]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
      case 4:
      return(
        <div className='flex gap-1 text-[20px] text-[#FF9529]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      );
      case 5:
      return(
        <div className='flex gap-1 text-[20px] text-[#FF9529]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      );
  
    default:
      return null;
  }
}

const ProductsCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  return (
    <div className='px-4 border border-neutral-300 rounded-xl max-w-[400px] hover:bg-gray-200 transition-color duration-200 delay-100 transform transition-all hover:scale-90'>
      <div>
        <Image className='w-full h-auto'
        src={img}
        alt={title}
        width={200}
        height={300}
        />
      </div>

{/*DESCRIPTION PRODUCTS CARD*/}

      <div className='space-y-2 py-2'>
        <h2 className='text-accent font-medium text-center'>{title}</h2>
        <p className='text-gray-500 max-w-[150px]'>{desc}</p>
        <div className=''>{generateRating(rating)}</div>
        <div className='text-accent font-medium text-center text-gray-500'>
          ${price}
          <del></del>
        </div>
      </div>

    </div>
  );
}

export default ProductsCard
