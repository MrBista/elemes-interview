import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const CardTrending = () => {
  return (
    <div className='w-[85vw]  md:w-[275.5px] md:h-[306px]  bg-[#E6F3F5]  shadow px-4 py-5 rounded'>
      <img
        src='/src/assets/pizzaPaperoni.png'
        alt=''
        className='w-[118.15px] h-[120px] object-cover rounded'
      />
      <div>
        <h3 className='text-[1.65rem] font-bold'>Pizza Paperoni</h3>
        <h5 className='text-primary font-semibold'>Pizza</h5>
        <div className='flex mt-2'>
          <FaStar className='text-[#FF8412]' />
          <FaStar className='text-[#FF8412]' />
          <FaStar className='text-[#FF8412]' />
          <FaStar className='text-[#FF8412]' />
          <FaRegStar />
        </div>
      </div>
    </div>
  );
};

export default CardTrending;
