import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="home shadow-2xl" id="home">
      <div className="overlay flex flex-col items-center justify-center p-5">
        {/* <div className=" text-xl md:text-3xl text-cyan-500 font-light">Hii, I am</div> */}
        <div className=" w-full max-w-6xl space-y-4 text-center">
          <div className="w-full border-b border-gray-600 pb-2 text-center text-4xl text-gray-300 md:text-7xl">
            <span className=" font-semibold">AISSAME</span>{' '}
            <span className="font-thin">EL KHMAITI</span>
          </div>
          <div className=" flex flex-col items-center justify-center space-x-4 text-lg md:flex-row md:text-2xl">
            <div className=" font-bold text-cyan-400">
              
                                    Développeur Mern Stack
                   <span className="font-thin text-white"> &      </span> 
                   Développeur Web
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
