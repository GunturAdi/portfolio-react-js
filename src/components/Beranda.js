import React from 'react';
import MiniPortfolio from './MiniPortfolio';
import imageProgile from '../assets/guntur.png';
const Beranda = ({ portfolios }) => {
  return (
    <section id="home" className="pt-4">
      <div className="container mb-20">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hallo, Nama Saya
              <span className="block text-4xl text-dark font-bold mt-1 lg:text-5xl ">Guntur Adi Wijaya</span>
            </h1>
            <h2 className="font-medium text-lg mb-5 text-secondary lg:text-2xl">Full-Stack Web Dev</h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">
              Pekerja keras dan seorang yang ingin belajar
            </p>
            <a
              href="#"
              className="text-base font-semibold text-white bg-rose-500 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img src={imageProgile} alt="guntur" className="relative z-10 max-w-full mx-auto" />
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 md:scale-125">
                <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#f43f5e"
                    d="M52.3,-29.3C54.2,-11.2,32.8,2.3,14.7,14C-3.5,25.7,-18.4,35.7,-24.9,31.6C-31.5,27.5,-29.8,9.2,-24.2,-14C-18.7,-37.1,-9.3,-65.1,7.9,-67.7C25.2,-70.3,50.4,-47.4,52.3,-29.3Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <MiniPortfolio portfolios={portfolios} />
    </section>
  );
};

export default Beranda;
