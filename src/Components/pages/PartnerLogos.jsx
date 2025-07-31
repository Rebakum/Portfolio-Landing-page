// src/components/PartnerLogos.jsx

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import archinLogo from "../../assets/images/archinlogo.png";
import githubLogo from "../../assets/images/githublogo.png";
import matthewLogo from "../../assets/images/matthewlogo.png";
import musicLogo from "../../assets/images/musiclogo.jpeg";
import zumarLogo from "../../assets/images/zumarlogo.png";

const logos = [
  { name: "ZUMAR CONS", src: zumarLogo },
  { name: "GitHub", src: githubLogo },
  { name: "Matthew Co.", src: matthewLogo },
  { name: "Archin", src: archinLogo },
  { name: "Music", src: musicLogo },
];

const PartnerLogos = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 via-white to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {logos.map((logo, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 flex flex-col items-center justify-center transition-all duration-300 group"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-16 object-contain mb-2 group-hover:scale-105 transition-transform"
              />
              <p className="text-sm text-gray-600 font-medium group-hover:text-blue-500">
                {logo.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
