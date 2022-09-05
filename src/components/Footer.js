import React from 'react';

// import logo
import Logo from '../assets/img/logo.svg';

// import data
import { footer } from '../data'

const Footer = () => {
  return <footer className='bg-primary text-white section'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
        <a href="#" className='mb-6 lg:mb-0'>
          <img src={Logo} alt="" />
        </a>
        {/* social */}
        <div className='flex gap-x-4'>
          {footer.social.map((item, index)=>{
            return (
            <div key={index} className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition-all'>
              <a href="#">{item.icon}</a>
              </div>
            )
          })}
        </div>
      </div>
      {/* copywright text */}
      <p className='text-center'>
        &copy; FurniShop 2022 - All rights reserved
      </p>

    </div>
  </footer>;
};

export default Footer;
