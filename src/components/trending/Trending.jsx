import React from 'react';
import Card from '../card/Card';
import { trendingFood } from '../../data/data';

const Trending = () => {
  return (
    <div className='w-[90vw] mx-auto md:mt-[5rem] mt-[4rem] relative'>
      <div className='md:leading-[3.375rem]'>
        <h4 className='md:text-[2.375rem] font-bold text-[1.5rem]'>
          Browser Our Trending
        </h4>
        <h5 className='text-primary md:text-[2.375rem] text-[1.5rem] font-bold'>
          Receipt
        </h5>
      </div>
      <div className='flex w-full flex-wrap mt-8 gap-x-3 gap-y-4 '>
        {trendingFood.map((el, i) => {
          return <Card isTrending {...el} key={i + '-key-trending'} />;
        })}
      </div>
      <div className='hidden md:flex mt-[4rem] w-full justify-center'>
        <button className='bg-primary text-white px-6 py-2 rounded-full left-1/2 -translate-x-1/2'>
          ALL Receipt
        </button>
      </div>
    </div>
  );
};

export default Trending;
