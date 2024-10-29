import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import HeroPic from '../assets/photo_2023-10-31 17.26.50 — копия.jpeg';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center p-6 lg:p-10 lg:space-x-10 ssm:space-y-10 text-white space-y-8 lg:space-y-0">
      {/* Text Section */}
      <div className="text-center lg:text-left lg:w-1/3 ssm:w-full space-y-5">
        <p className="text-3xl lg:text-4xl text-slate-300">Мен</p>
        <h1 className="text-5xl lg:text-6xl font-bold">Санжар Жумакадыров</h1>
        <hr className="border-t-2 border-white w-1/2 lg:w-full mx-auto lg:mx-0" />
        <p className="mt-5 text-base lg:text-lg text-slate-300 font-sans" >
          Мен визуалдык жактан укмуштуудай, адаптацияланган жана руханий жактан шыктанган веб тиркемелерди түзүүгө аракет жасаган алдыңкы веб иштеп чыгуучумун. React жана Redux , Firebase жана SCSS колдонуу тажрыйбасы менен мен колдонуучунун кооз тажрыйбасы менен функционалдуулукту айкалыштырган компоненттерди курууга басым жасайм.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center lg:justify-start">
        <img
          src={HeroPic}
          alt="Sanjar's profile"
          className="rounded-full border-4 border-white w-48 h-48 lg:w-64 lg:h-64"
        />
      </div>

      {/* About Section */}
      <div className="text-center lg:text-left w-full lg:w-1/3 space-y-4">
        <p className="text-3xl lg:text-4xl mb-2">Мен жөнүндө</p>
        <p className="text-base lg:text-lg text-slate-300">
          Биздин кызматтар менен жарнамалык дизайн программалоодо сапатты жакшы кылып түзөлү
        </p>
        <button className="bg-white text-indigo-600 px-8 py-2 mt-3 rounded-full hover:bg-indigo-800 hover:text-white transition duration-300">
          Көбүрөөк көрүү...
        </button>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start mt-5 space-x-4">
          <BsFacebook size={40} className="border-4 border-transparent hover:border-indigo-800 rounded-full cursor-pointer" />
          <BsTwitter size={40} className="border-4 border-transparent hover:border-indigo-800 rounded-full cursor-pointer" />
          <BsInstagram size={40} className="border-4 border-transparent hover:border-indigo-800 rounded-full cursor-pointer" />
          <BsPinterest size={40} className="border-4 border-transparent hover:border-indigo-800 rounded-full cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
