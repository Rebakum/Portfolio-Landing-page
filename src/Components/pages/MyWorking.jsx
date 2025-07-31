import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import facebookads from "../../assets/images/facebookads.png";
import googleads from "../../assets/images/googleads.webp";
import instagramads from "../../assets/images/instragramads.avif";
import youtubeads from "../../assets/images/youtubeads.jpg";

import "./HeroButton.css";

const MyWorking = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-yellow-50 mx-auto px-8 py-16">
      <div className="max-w-screen-xl text-start">
        <p className="text-lg font-semibold text-red-600">Explore My Work</p>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            Protfolio of Success
          </h2>
          <button className="fancy1-btn mt-10 ">
            <span className=" ">View Portfolio</span>
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 pt-16">
        {/* Card 1 */}
        <div
          className="border rounded-lg overflow-hidden shadow-sm"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className=" text-white p-3 relative rounded-2xl flex justify-between items-start">
            <img
              src={facebookads}
              alt="Person"
              className="w-full h-[300px] mx-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="p-3 text-left space-y-4">
            <p className="text-gray-600">Expert</p>
            <p className=" text-gray-950 text-xl font-bold">
              Facebook Ads Specialist
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div
          className="border rounded-lg overflow-hidden shadow-sm"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className=" text-white p-3 relative rounded-2xl flex justify-between items-start">
            <img
              src={googleads}
              alt="Person"
              className="w-full h-[300px] mx-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="p-3 text-left space-y-4">
            <p className="text-gray-600">Expert</p>
            <p className=" text-gray-950 text-xl font-bold">
              Google Ads Manager
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div
          className="border rounded-lg overflow-hidden shadow-sm"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div className=" text-white p-3 relative rounded-2xl flex justify-between items-start">
            <img
              src={instagramads}
              alt="Person"
              className="w-full h-[300px] mx-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="p-3 text-left space-y-4">
            <p className="text-gray-600">Expert</p>
            <p className=" text-gray-950 text-xl  font-bold">
              Instagram Ads Specialist
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div
          className="border rounded-lg overflow-hidden shadow-sm"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <div className=" text-white p-3 relative rounded-2xl flex justify-between items-start">
            <img
              src={youtubeads}
              alt="Person"
              className="w-full h-[300px] mx-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="p-3 text-left space-y-4">
            <p className="text-gray-600">Expert</p>
            <p className=" text-gray-950 text-xl font-bold">
              Youtube Ads Specialist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorking;
