import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-amber-900 text-white py-10 mt-16"
      style={{ fontFamily: "Nunito, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3
            className="text-lg font-semibold mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            About Us
          </h3>
          <p
            className="text-sm text-gray-200 w-[220px]"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Serving freshly brewed coffee with love and care to energize your
            day and warm your heart.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="text-lg font-semibold mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Contact
          </h3>
          <ul
            className="space-y-2 text-sm text-gray-200"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer" style={{ fontFamily: 'Nunito, sans-serif' }} >
              <FaMapMarkerAlt /> 123 Coffee Street, New Delhi
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer" style={{ fontFamily: 'Nunito, sans-serif' }} >
              <FaPhoneAlt /> +91 9876543210
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer" style={{ fontFamily: 'Nunito, sans-serif' }} >
              <FaEnvelope /> hello@coffeemail.com
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="text-lg font-semibold mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Quick Links
          </h3>
          <ul
            className="space-y-2 text-sm text-gray-200"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            <li>
              <a href="#" className="hover:text-yellow-400 cursor-pointer">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 cursor-pointer">Menu</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 cursor-pointer">Gallery</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3
            className="text-lg font-semibold mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Follow Us
          </h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div
        className="text-center text-sm text-gray-300 mt-10 border-t border-amber-800 pt-4"
        style={{ fontFamily: "Nunito, sans-serif" }}
      >
        © {new Date().getFullYear()} Sips Cafe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
