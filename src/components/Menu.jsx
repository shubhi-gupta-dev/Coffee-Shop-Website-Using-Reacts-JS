import React from "react";
import {
  FaCoffee,
  FaMugHot,
  FaLeaf,
  FaBolt,
  FaRegDotCircle,
} from "react-icons/fa";

const Menu = () => {
  const coffeeItems = [
    {
      name: "Espresso",
      icon: <FaCoffee className="w-8 h-8 text-amber-900" />,
      image:
        "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg",
      desc: "Strong and bold, espresso is the purest form of coffee with a rich,perfect for a quick energy boost , intense flavor.",
      accent: "bg-amber-100",
    },
    {
      name: "Cappuccino",
      icon: <FaMugHot className="w-8 h-8 text-amber-900" />,
      image:
        "https://www.livingnorth.com/images/media/articles/food-and-drink/eat-and-drink/coffee.png?fm=pjpg&w=1000&q=95",
      desc: "A smooth blend of espresso, steamed milk, and foam – perfect for any time of day.cappuccino offers the perfect balance.",
      accent: "bg-orange-100",
    },
    {
      name: "Latte",
      icon: <FaLeaf className="w-8 h-8 text-amber-900" />,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fGm6VkKhLBLhqO53AGZZIMYiFsACD95AmA&s",
      desc: "Mild and creamy, a latte combines espresso with plenty of steamed milk for a comforting taste.",
      accent: "bg-rose-100",
    },
    {
      name: "Macchiato",
      icon: <FaRegDotCircle className="w-8 h-8 text-amber-900" />,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQywjHW7Tx1b28VViVackuWKQrDW02nHD-MQ&s",
      desc: "A rich espresso marked with a small amount of steamed milk, perfect for a bold yet smooth sip.",
      accent: "bg-brown-100",
    },
  ];

  return (
    <div
      id="menu"
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className=" max-w-7xl mx-auto relative ">
        {/* head content  */}
        <div className="text-center mb-16 relative">
          <h2 className="relative inline-block text-3xl sm:text-4xl md:text-3xl lg:text-5xl drop-shadow-md font-bold text-amber-900 mb-4">
            <span className="absolute -top-5 sm:-top-4 md:-top-5 lg:-top-6 -left-4 sm:-left-4 md:-left-6 lg:-left-8 text-xl sm:text-2xl md:text-3xl lg:text-3xl">
              ☕
            </span>
            Enjoy a New Blend of Coffee Style
            <span className="absolute -bottom-5 sm:-bottom-4 md:-bottom-5 lg:-bottom-6 -right-4 sm:-right-4 md:-right-6 lg:-right-8 text-xl">
              ☕
            </span>
          </h2>

          <p className="text-xl lg:text-2xl font-bold text-amber-800 max-w-2xl mx-auto mt-6">
            Explore All Flavors of coffee with us. There is always a new cup
            worth experiencing.
          </p>
        </div>

        {/* type of coffee  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coffeeItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 "
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-700/10 to-amber-900/10 rounded-2xl pointer-events-none z-0" />

              {/* Coffee image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110 z-0"
              />

              {/* Icon and text content */}
              <div className="p-6 relative z-10 bg-white">
                <div className="mb-4 flex items-center justify-between text-2xl text-amber-800">
                  {item.icon}
                  <span className="text-2xl font-playfair font-bold text-amber-900">
                    $199
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2 border-b-2 border-amber-200 pb-2">
                  {item.name}
                </h3>
                <p className=" text-amber-800 mb-2 min-h-[60px]">{item.desc}</p>

                <button className="w-full bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-2 font-lato  font-semibold group-hover:bg-amber-800">
                  <FaMugHot className="transition-transform group-hover:rotate-12" />
                  <span style={{ fontFamily: 'Nunito, sans-serif' }} className="group-hover:translate-x-1 transition-transform">
                    Order Now
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
