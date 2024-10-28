import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import HeroPic from '../assets/photo_2023-10-31 17.26.50 — копия.jpeg';

const Hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
      {/* Text Section */}
      <div className='lg:w-1/3 ssm:w-fit'>
        <p className='text-4xl mb-5 text-slate-300'>Мен</p>
        <h1 className='text-6xl'>Санжар Жумакадыров</h1>
        <hr />
        <p className='mt-10  text-slate-300 font-sans'>
        Мен визуалдык жактан укмуштуудай, адаптацияланган жана руханий жактан шыктанган веб тиркемелерди түзүүгө аракет жасаган алдыңкы веб иштеп чыгуучумун. React жана Redux , Firebase жана SCSS колдонуу тажрыйбасы менен мен колдонуучунун кооз тажрыйбасы менен функционалдуулукту айкалыштырган компоненттерди курууга басым жасайм.
        </p>
      </div>

      {/* Image Section */}
      <div>
        <img
          src={HeroPic}
          alt="Sanjar's profile"
          width={250}
          height={250}
          className='rounded-full border-4 border-white lg:w-[250px] lg:h-[250px] ssm:w-[200px] ssm:h-[200px]'
        />
      </div>

      <div className="w-1/3 ssm:w-fit">
        <p className='text-4xl mb-4'>Мен жөнүндө</p>
        <p className='text-sla'>Биздин кызматтар менен жарнамалык дизайн программалоодо сапатты жакшы кылып түзөлү</p>
        <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>Көбүрөөк көрүү...</button>

        <div size={40} className="flex mt-5 space-x-4 cursor-pointer">
            <BsFacebook size={40} className="border-4 hover:border-indigo-800 rounded-full" />
            <BsTwitter size={40} className="border-4 hover:border-indigo-800 rounded-full" />
            <BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full" />
            <BsPinterest size={40} className="border-4 hover:border-indigo-800 rounded-full" />

        </div>
      </div>

    </section>
  );
};

export default Hero;
