import React, { useState } from 'react';

// import PortFoto1 from '../assets/port1.JPG';

const MiniPortfolio = ({ portfolios }) => {
  console.log(portfolios, '<===============');
  const [showMoreContent, setShowMoreContent] = useState(false);

  return (
    <>
      <div className="container mx-auto px-6 font-inter sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
        <>
          {!showMoreContent &&
            portfolios.slice(0, 3).map((portfolio, index) => {
              return (
                <div className="rounded-md shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72" key={index}>
                  <img src={portfolio.imageUrl} alt="" className="w-full" />
                  <div className="px-6 py-4">
                    <div className="text-xl mb-2 font-bold text-slate-600">{portfolio.title}</div>
                    <p className="text-sm text-slate-600">{portfolio.description}</p>
                  </div>
                </div>
              );
            })}
          {showMoreContent &&
            portfolios.map((portfolio, index) => {
              return (
                <div className="rounded-md shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72" key={index}>
                  <img src={portfolio.imageUrl} alt="" className="w-full" />
                  <div className="px-6 py-4">
                    <div className="text-xl mb-2 font-bold text-slate-600">{portfolio.title}</div>
                    <p className="text-sm text-slate-600">{portfolio.description}</p>
                  </div>
                </div>
              );
            })}
        </>
      </div>
      <div class="flex justify-center mt-8">
        <button
          className="rounded-md shadow-lg py-2 px-5 bg-rose-500 text-white text-center cursor-pointer hover:underline mb-20 w-[140px] flex justify-center"
          onClick={() => setShowMoreContent(!showMoreContent)}
        >
          {showMoreContent ? 'Lebih Sedikit' : 'Lebih Banyak'}
        </button>
      </div>
    </>
  );
};

export default MiniPortfolio;
