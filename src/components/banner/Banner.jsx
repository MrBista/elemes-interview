import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='  w-[90vw] mx-auto flex flex-col md:flex-row md:justify-between relative md:mt-[5rem]'>
      <p className='text-primary text-[2.5rem] mb-[3.4rem] md:mb-0 font-semi-bold leading-[2.5rem] md:text-[4rem] md:leading-[4rem] md:w-[500px] '>
        Good Food Us Good Mood
      </p>
      <div className=' justify-items-end  md:order-last relative'>
        <div className='bg-[url("/assets/bannerImg.png")] md:h-[414.75px] md:w-[412.9px] h-[250px] w-[250px] bg-cover border-[1.5rem] md:border-[3rem] border-black/5 rounded-full bg-no-repeat  relative'>
          <div className='md:w-[292px]  flex gap-x-4 bg-white/75 rounded-[1.0625rem] shadow-[0_11px_39px_rgba(0, 0, 0, 0.07)] border-2 md:px-4 md:py-2 px-2 py-1 items-center absolute -right-[5rem] -bottom-[2rem] md:-left-[9.5rem] backdrop-blur-[5.5px] '>
            <img
              src='/assets/bannerImg.png'
              alt=''
              className='w-[53px] h-[53px] object-cover'
            />

            <div className=''>
              <p className='text-[.75rem] md:text-[1rem] font-bold'>
                Green Salad Tomato
              </p>
              <p className='text-[.75rem] md:text-[1rem] text-[#757575]'>
                Tomato
              </p>
              <div className='flex mt-2'>
                <FaStar className='text-[#FF8412]' />
                <FaStar className='text-[#FF8412]' />
                <FaStar className='text-[#FF8412]' />
                <FaStar className='text-[#FF8412]' />
                <FaRegStar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:absolute md:top-[160px] sm:w-[400px] mt-[3.4rem] md:mt-0 md:w-[500px]'>
        <p className='text-[#757575] break-words'>
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>
        <div className='mt-6 flex gap-x-4'>
          <button className='bg-primary text-white px-[18px] py-[10px] rounded-full'>
            Daftar Sekarang
          </button>
          <button className='bg-[#F2F2F2]  px-[18px] py-[10px] rounded-full'>
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
