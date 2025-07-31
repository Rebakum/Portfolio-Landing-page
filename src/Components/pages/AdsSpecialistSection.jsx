import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import mail from "../../assets/images/email.png";
import facebook from "../../assets/images/facebook.png";
import "./HeroButton.css";

const AdsSpecialistSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-[#022b3a] text-white py-16 px-4 lg:px-32 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Decorative Social Icons */}
      <img
        src={facebook}
        alt="facebook"
        className="w-12 h-12 border-4 auto-scale border-[#055855] rounded-full absolute top-32 right-32 shadow-lg shadow-red-500/40"
        data-aos="zoom-in"
        data-aos-delay="200"
      />
      <img
        src={mail}
        alt="mail"
        className="w-12 h-12 border-4 auto-scale border-[#055855] rounded-full absolute bottom-32 left-32 shadow-lg shadow-red-500/40"
        data-aos="zoom-in"
        data-aos-delay="300"
      />

      {/* Main Content */}
      <div data-aos="fade-up">
        <h2 className="text-4xl font-bold">
          Crafting Campaigns That Convert: <br /> Meet Your Ads Specialist
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 justify-center gap-0.5 mt-10">
        {/* Stats Left Column */}
        <div
          className="space-y-10 text-gray-300 border-r border-gray-600 pr-16"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <div className="flex flex-col items-end">
            <h3 className="text-3xl lg:text-5xl font-extrabold">06+</h3>
            <p className="text-lg text-gray-300">Years of Experience</p>
          </div>
          <div className="flex flex-col items-end">
            <h3 className="text-3xl lg:text-5xl font-extrabold">400+</h3>
            <p className="text-lg text-gray-300">Project Completed</p>
          </div>
          <div className="flex flex-col items-end">
            <h3 className="text-3xl lg:text-5xl font-extrabold">160+</h3>
            <p className="text-lg text-gray-300">Satisfied Client</p>
          </div>
        </div>

        {/* Right Column */}
        <div
          className="space-y-6 text-gray-300 border-l border-gray-600 pl-16"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <p>
            Omar is a highly skilled ads specialist with over 10 years of
            hands-on experience in the digital marketing world. He has dedicated
            countless hours to mastering the tools and strategies that power top
            marketing platforms, helping businesses achieve exceptional growth.
            Omar’s expertise lies in crafting tailored ad campaigns that not
            only reach the right audience but also drive measurable results.
          </p>
          <p>
            With a focus on using advanced tools and data-driven strategies,
            he’s able to create personalized marketing plans that go beyond
            traditional methods. His passion for digital marketing is matched by
            his commitment to providing ongoing support, ensuring every campaign
            is optimized for success.
          </p>

          <button className="fancy1-btn">
            <span>More About Me</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdsSpecialistSection;
