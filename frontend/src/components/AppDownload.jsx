
import React from 'react';
import { assets } from '../assets/assets';

const AppDownload = () => {
  return (
    <div className="mt-16 px-4 text-center">
      {/* Title */}
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
        For a Better Experience, Download <br /> 
        <h1 className="text-4xl font-extrabold text-orange-500 tracking-wide italic drop-shadow-sm">
                <span className="text-orange-500">Foodi</span><span className="text-black">Fy</span><span className="text-lg align-top ml-1">🍴</span>
                </h1>
      </p>

      {/* Store Buttons */}
      <div className="flex justify-center gap-6 sm:gap-12 mt-6 sm:mt-8">
        <img 
          src={assets.play_store} 
          alt="Google Play Store" 
          className="w-36 sm:w-44 md:w-48 lg:w-52 hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
        <img 
          src={assets.app_store} 
          alt="Apple App Store" 
          className="w-36 sm:w-44 md:w-48 lg:w-52 hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AppDownload;
