import React from "react";
import { assets } from "../assets/assets";

const MobileApp = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16 mb-40 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section - App Description */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get the FoodiFy App</h2>
          <p className="text-lg text-gray-600">
            Order your favorite dishes anytime, track your delivery, and enjoy exclusive discounts.
            Download our app now!
          </p>

          {/* Download Buttons */}
          <div className="mt-6 flex gap-4">
            <a href="#" className="block">
              <img src={assets.play_store} alt="Google Play Store" className="h-12 hover:opacity-80 transition" />
            </a>
            <a href="#" className="block">
              <img src={assets.app_store} alt="Apple App Store" className="h-12 hover:opacity-80 transition" />
            </a>
          </div>
        </div>

        {/* Right Section - Mobile Mockup */}
        <div className="flex justify-center">
          {/* <img src={mobileMockup} alt="Tomato App Mockup" className="w-60 md:w-80 drop-shadow-lg rounded-lg" /> */}
        </div>

      </div>
    </div>
  );
};

export default MobileApp;
