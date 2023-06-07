import React, { useRef } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import Card from '../card/Card';
import { categoryFood } from '../../data/data';
const Category = () => {
  const refScroll = useRef();
  const scroll = (scrollOffset) => {
    refScroll.current.scrollLeft += scrollOffset;
  };
  return (
    <>
      <div className='w-[90vw] mx-auto md:mt-[5rem] mt-[4rem]'>
        <div className='md:leading-[3.375rem]'>
          <h4 className='md:text-[2.375rem] font-bold text-[1.5rem]'>
            Browser Our Category
          </h4>
          <h5 className='text-primary md:text-[2.375rem] text-[1.5rem] font-bold'>
            Receipt
          </h5>
        </div>
      </div>
      <div
        className='md:mx-4 mt-4 container-snap overflow-x-scroll scroll-smooth'
        ref={refScroll}
      >
        <div className=' flex gap-x-2 flex-nowrap  w-fit'>
          {categoryFood.map((el, i) => {
            return <Card {...el} key={i + '-card category food'} />;
          })}
        </div>
      </div>
      <div className='hidden md:flex justify-end w-[80vw] mx-auto mt-4 gap-x-4'>
        <button
          onClick={() => scroll(-800)}
          className='bg-primary rounded-full px-4 py-2 text-white uppercase flex gap-x-2 items-center'
        >
          <AiFillLeftCircle className='text-[2rem]' />
          Prev
        </button>
        <button
          onClick={() => scroll(800)}
          className='bg-primary rounded-full px-4 py-2 text-white uppercase flex gap-x-2 items-center'
        >
          Next
          <AiFillRightCircle className='text-[2rem]' />
        </button>
      </div>
    </>
  );
};

export default Category;
