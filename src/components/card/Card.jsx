import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Card = ({
  isTrending,
  isCategory,
  nameCategory,
  nameFood,
  bgColor,
  amountItem,
  imgUrl,
}) => {
  if (isTrending) {
    return (
      <div
        style={{ backgroundColor: `${bgColor}` }}
        className='w-[85vw]  md:w-[275.5px] md:h-[306px]    shadow px-4 py-5 rounded'
      >
        <img
          src={`${imgUrl}`}
          alt=''
          className='w-[118.15px] h-[120px] object-cover rounded'
        />
        <div>
          <h3 className='text-[1.65rem] font-bold'>{nameFood || '-'}</h3>
          <h5 className='text-primary font-semibold'>{nameCategory || '-'}</h5>
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
  }
  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className={`w-[230px] h-[172px] rounded-[8px] flex flex-col items-center justify-center`}
    >
      <div className='flex flex-col gap-y-4 items-center justify-center'>
        <img
          src={`${imgUrl}`}
          className='h-[47px] w-[47px] object-cover'
          alt=''
        />
        <div className=' text-center'>
          <h2 className='font-bold'>{nameCategory || '-'}</h2>
          <p className='text-[.875rem]'>{amountItem || '-'} Items</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
