import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoMail } from 'react-icons/go';
import { BsFillTelephoneFill, BsInstagram, BsTelephone } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className='flex justify-center items-center w-[90vw] mx-auto h-full my-8 md:bg-[#F9FFF6] md:h-[359px]  md:shadow  md:rounded-[20px]'>
        <div className='flex gap-x-8 md:hidden'>
          <div className='flex flex-col justify-center items-center'>
            <RxHamburgerMenu className='text-[2rem]' />
            <span>Home</span>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <RxHamburgerMenu className='text-[2rem]' />
            <span>Promotion</span>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <RxHamburgerMenu className='text-[2rem]' />
            <span>Others</span>
          </div>
        </div>
        <div className='hidden md:flex justify-between items-start  gap-x-[4rem]'>
          <div>
            <div className='w-[359px]'>
              <img
                src='/assets/navbarLogo.png'
                className='w-[207px] h-[50px] object-cover mt-4'
                alt=''
              />
              <p className='text-[#757575] mt-4'>
                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
                Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                12950
              </p>
              <div className='flex gap-x-4 mt-4 items-center'>
                <div className='bg-primary p-2 rounded-full '>
                  <GoMail className='text-white text-[1.5rem]' />
                </div>
                <div>
                  <BsTelephone className='text-primary text-[1.5rem]' />
                </div>
                <div>
                  <BsInstagram className='text-primary text-[1.5rem]' />
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <h3 className='mb-7 font-semibold text-[#333333]'>Categories</h3>
            <p className='text-[#757575] mt-4'>Cupcake</p>
            <p className='text-[#757575] mt-4'>Pizza</p>
            <p className='text-[#757575] mt-4'>Kebab</p>
            <p className='text-[#757575] mt-4'>Salmon</p>
            <p className='text-[#757575] mt-4'>Dougnut</p>
          </div>
          <div>
            <div>
              <h3 className='mb-7 font-semibold text-[#333333]'>About Us</h3>
              <p className='text-[#757575] mt-4'>FAQ</p>
              <p className='text-[#757575] mt-4'>Report Problem</p>
            </div>
          </div>
          <div>
            <div>
              <h3 className='mb-6 font-semibold text-[#333333]'>Newsletter</h3>
              <p className='text-[#757575]  w-[245px]'>
                Get now free 50% discount for alll products on your first order
              </p>
              <div className='flex rounded-lg overflow-hidden border-2 border-black/50 mt-4 '>
                <input
                  type='text'
                  className='outline-none  px-4 py-2 w-[195px] placeholder:text-black'
                  placeholder='Your email address'
                />
                <span className='px-4 py-2 text-center bg-primary text-white font-bold '>
                  SEND
                </span>
              </div>
              <div className='flex items-center gap-x-2 mt-4'>
                <GoMail className='text-primary text-[1.6rem] font-bold' />
                <p className='text-[.875rem]'> elemesid@gmail.com</p>
              </div>
              <div className='flex items-center gap-x-2 mt-4'>
                <BsTelephone className='text-primary text-[1.4rem] font-bold' />
                <p className='text-[.875rem]'> 0888 1111 2222 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center text-[#757575] text-[.75rem] my-8 hidden md:block'>
        © 2021 Elemes id. All rights reserved
      </p>
    </>
  );
};

export default Footer;
