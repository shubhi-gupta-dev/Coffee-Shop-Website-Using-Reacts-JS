import React from "react";
import CoffeeCup from '../assets/coffee-cup.png' ;

const Discover = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#f1e0c5] via-[#d4a373] to-[#4b3838] min-h-[50vh] text-[#4e342e] font-serif py-12 px-4 flex items-center overflow-hidden">
      <div className="container max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8">
        {/* left side  */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-7">
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-5">
            Discover the Best Coffee
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 text-[20px]">
            Every great day starts with coffee. That first warm sip does more
            than just wake you up — it brings a sense of comfort, a moment of
            calm, and the gentle push you need to begin the day with focus.
            Whether you're heading into a busy schedule, sitting down to plan
            your goals, or simply enjoying a quiet morning, coffee becomes a
            small daily ritual that sets the tone.
          </p>
          <button className="bg-[#4e342e] text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out ">
            Learn More
          </button>
        </div>

        {/* right side  */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center px-4">
          <img
            src={CoffeeCup}
            alt=""
            className="w-full h-[500px] max-w-90 sm:max-w-md md:w-lg lg:max-w-lg xl:max-w-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Discover;
