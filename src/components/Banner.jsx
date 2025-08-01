import React from "react";

const Banner = () => {
  return (
    <div
      id="home"
      className="relative bg-cover bg-no-repeat w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen"
    >
      <div className="absolute inset-0 opacity-50 flex flex-col items-center">
        <div className="relative z-10 max-w-xl text-white text-center sm:text-center md:text-center lg:text-left pt-10">
          <h1 className="px-5 mb-4 text-3xl font-bold font-playFairDisplay sm:text-5xl md:text-7xl lg:text-7xl">
            Coffee
          </h1>

          <p className="px-5 leading-relaxed mb-6 font-serif sm:text-base">
            It is best to start your day with a cup of coffee.Discover the best
            flavours of coffee you will ever have.we provide the best for our
            customers.
          </p>
        </div>
      </div>
      <video
        className="w-full h-[400px] md:min-h-[300px] object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://videos.pexels.com/video-files/2909914/2909914-uhd_2732_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Banner;
