import React from "react";

const Banner = () => {
  return (
    <div
      id="home"
      className="relative bg-cover bg-no-repeat w-full h-[400px] sm:h-[300px] md:h-[400px] lg:h-[400px] "
    >
      <div className="absolute inset-0 flex flex-col">
        <div className="relative z-10 max-w-xl text-white text-center sm:text-center md:text-center lg:text-left pt-10 lg:left-24 ">
          <h1 className="px-5 mb-4 text-6xl font-bold font-playFairDisplay sm:text-5xl md:text-7xl lg:text-8xl">
            Coffee
          </h1>

          <p className="px-5 mb-6 font-serif sm:text-base font-extralight md:text-xl lg:text-[17px] tracking-wider leading-8">
            It is best to start your day with a cup of coffee. Discover the best
            flavours of coffee you will ever have.we provide the best for our
            customers.
          </p>

          <div className="px-5 flex justify-center lg:justify-start">
            <button className="font-medium bg-yellow-600 hover:bg-yellow-700 text-black transition-colors rounded-full shadow-lg border-2 border-yellow-600 hover:border-yellow-700 px-6 py-3 sm:px-4 sm:py-2 md:py-3 md:px-5 lg:px-6 lg:py-3 text-sm lg:text-md">
              Order Now
            </button>
          </div>
        </div>
      </div>

      <video
        className="w-full h-[410px] md:min-h-[410px] lg:h-[410px] sm:h-[310px] object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://videos.pexels.com/video-files/6769796/6769796-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Banner;
