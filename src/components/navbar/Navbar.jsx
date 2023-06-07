import React from 'react';

const Navbar = () => {
  return (
    <nav className=' h-[89px] flex justify-center z-30 relative'>
      <div className='w-[90vw] flex items-center justify-between py-2'>
        <img src='/assets/navbarLogo.png' alt='' />

        <ul className='hidden md:flex text-[.875rem] text-[#757575] font-semibold'>
          <li className='cursor-pointer px-4 py-1   hover:text-primary transition-all ease-in  '>
            Home
          </li>
          <li className='cursor-pointer px-4 py-1   hover:text-primary transition-all ease-in  '>
            About
          </li>
          <li className='cursor-pointer px-4 py-1   hover:text-primary transition-all ease-in  '>
            Promotion
          </li>
          <li className='cursor-pointer px-4 py-1   hover:text-primary transition-all ease-in  '>
            Blogs
          </li>
          <li className='cursor-pointer px-4 py-1   hover:text-primary transition-all ease-in  '>
            Contact Us
          </li>
        </ul>
        <div className='flex items-center gap-x-2 text-[.875rem] font-semibold'>
          <button className='hidden md:block'>Masuk</button>
          <button className='bg-primary text-white px-[18px] py-[10px] rounded-full'>
            Daftar Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
