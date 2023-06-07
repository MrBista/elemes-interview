import React from 'react';

const CardCategory = ({ icon, name, amountItems }) => {
  return (
    <div className='w-[230px] h-[172px] bg-pink-300 rounded-[8px] flex flex-col items-center justify-center'>
      <div className='flex flex-col gap-y-4 items-center justify-center'>
        <img
          src='/src/assets/pizza.png'
          className='h-[47px] w-[47px] object-cover'
          alt=''
        />
        <div className=' text-center'>
          <h2 className='font-bold'>Pizza</h2>
          <p className='text-[.875rem]'>25 item</p>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
