

import React from 'react';

const Header = () => {
  return (
    <div className="rounded-lg px-4 md:px-10 lg:px-14 w-full mt-24">
      <div
        className="relative rounded-lg px-6 md:px-10 lg:px-14 h-[400px] md:h-[450px] py-16 md:py-20 flex items-center bg-cover bg-center bg-no-repeat shadow-lg overflow-hidden"
        style={{ backgroundImage: "url('/header_img2.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="w-full md:w-4/5 text-center md:text-left relative z-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight animate-fadeInUp">
            Order Your <br className="hidden md:block" /> Favorite Meals in Just a Click!
          </h2>
          <p className="text-sm md:text-lg text-white mt-4 md:mt-8 animate-fadeInUp delay-200">
            Craving something delicious? Say goodbye to long waits and complicated orders! With just a click,
            explore a world of mouthwatering dishes, freshly prepared and delivered straight to your doorstep.
            Whether it's a quick snack or a full-course feast, your favorite meals are now just moments away!
          </p>
          <button className="bg-orange-500 px-6 py-3 rounded-full mt-6 md:mt-8 text-white text-sm md:text-base font-medium hover:bg-orange-600 transition-all cursor-pointer animate-fadeInUp delay-400">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
