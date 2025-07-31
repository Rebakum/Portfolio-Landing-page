// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./HeroButton.css";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-16 px-6 md:px-20 border-t">
      <div className="grid md:grid-cols-3 gap-10 pb-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold">
            <span className="text-red-500">MY</span>LOGO
          </h2>
          <p className="text-sm mt-4 mb-4">
            Driving growth through innovative digital marketing strategies that
            increase brand visibility, engagement, and conversions for lasting
            success.
          </p>
          <div className="flex space-x-4 mt-2 text-gray-500">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gigs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-3">Subscribe for Updates</p>
          <form className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-sm border w-full sm:w-auto text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button type="submit" className=" fancy1-btn">
              <span> Subscribe</span>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm border-t pt-5 pb-8">
        <p>
          © Copyright 2025 <span className="font-semibold">Rebeka</span> – All
          Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
