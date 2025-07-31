// src/components/HeroSection.jsx
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import mail from "../../assets/images/email.png";
import facebook from "../../assets/images/facebook.png";
import google from "../../assets/images/google-1.png";
import instagram from "../../assets/images/instagram.png";
import megaphone from "../../assets/images/megaphone-1.jpg";
import youtube from "../../assets/images/youtube.png";
import "./HeroButton.css";

const BusinessTogether = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#0f2233] text-white py-16 px-6 md:px-20 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="max-w-lg ">
          <h1
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            Let’s Grow Your <br />
            <span className="text-white">Business Together</span>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="600"
            className="text-gray-300 mb-6"
          >
            Partner with a digital marketing expert to drive growth, enhance
            visibility, and achieve your business goals seamlessly.
          </p>
          <button
            data-aos="fade-right"
            data-aos-delay="900"
            daylay
            className="fancy1-btn mt-16 "
          >
            <span>Contact Me</span>
          </button>
        </div>

        {/* Right Icons */}
        <div
          data-aos="fade-left"
          className=" relative w-[300px] h-[300px] rounded-full border-amber-100 border-[1px] ring-1"
        >
          <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
            <img
              src={megaphone}
              alt="Megaphone"
              className="w-32 h-32 rounded-full"
            />
          </div>
          <div className="absolute  -top-8 left-[50%] transform -translate-x-1/2">
            <img
              src={google}
              alt="Google"
              className="w-16 h-16 auto-scale  rounded-full"
            />
          </div>
          <div className="absolute top-[25%] left-0">
            <img
              src={youtube}
              alt="YouTube"
              className="w-10 h-10 rounded-full auto-scale "
            />
          </div>
          <div className="absolute top-[75%] left-5">
            <img
              src={instagram}
              alt="Instagram"
              className="w-10 h-10 rounded-full auto-scale "
            />
          </div>
          <div className="absolute top-[25%] -right-3">
            <img
              src={facebook}
              alt="Facebook"
              className="w-10 h-10 rounded-full auto-scale "
            />
          </div>
          <div className="absolute top-[75%] right-5">
            <img
              src={mail}
              alt="Email"
              className="w-10 h-10 rounded-full auto-scale "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTogether;
