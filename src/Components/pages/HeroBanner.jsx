import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import facebook from "../../assets/images/facebook.png";
import google from "../../assets/images/google-1.png";
import instagram from "../../assets/images/instagram.png";
import man1 from "../../assets/images/man-2.png";
import "./HeroButton.css";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#FBF9F1]">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-4 lg:px-16 pt-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <p className="text-xl text-gray-700">Hey There,</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#012d28]">
            I'm <span className="text-[#05c1a1]">Raihan</span>
          </h1>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 font-family">
            Raihan, a skilled marketer & ads specialist, excels in creating
            impactful campaigns, optimizing strategies, and driving exceptional
            results.
          </p>
          <button className="fancy1-btn">
            <span>Contact Me</span>
          </button>

          {/* Social Icons */}
          <div className="pt-8">
            <p className="text-lg md:text-xl font-semibold text-[#012d28]">
              Top Rated Marketer
            </p>
            <div className="flex gap-6 justify-center lg:justify-start mt-4">
              {[TbBrandFiverr, SiUpwork, TbBrandFiverr].map((Icon, i) => (
                <span
                  key={i}
                  className="auto-scale p-3 w-10 h-10 bg-white text-[#055855] text-xl rounded-full flex items-center justify-center shadow-md"
                >
                  <Icon />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center Image + Floating Icons */}
        <div className="flex-1 flex justify-center items-center relative mt-11 lg:mt-0">
          <img
            src={man1}
            alt="Hero Banner"
            className="w-64 md:w-80 lg:w-[350px] object-contain z-10 pt-11"
          />

          {/* Floating Social Icons */}
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
            <img
              src={facebook}
              alt="facebook"
              className="w-8 h-8 rounded-full shadow-lg border-4 border-white auto-scale"
            />
          </span>
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
            <img
              src={instagram}
              alt="instagram"
              className="w-8 h-8 rounded-full shadow-lg border-4 border-white auto-scale"
            />
          </span>
          <span className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
            <img
              src={google}
              alt="google"
              className="w-8 h-8 rounded-full shadow-lg border-4 border-white auto-scale"
            />
          </span>
        </div>

        {/* Right Stats Box */}
        <div className="flex-1 flex flex-col items-center lg:items-end gap-6 my-10 lg:mt-0">
          {[
            { number: "06+", label: "Years of Experience" },
            { number: "400+", label: "Projects Completed" },
            { number: "160+", label: "Satisfied Clients" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#f9f9e6] via-white to-white animate-pulse shadow-md w-36 md:w-40 h-36 md:h-40 flex items-center justify-center text-center rounded-lg p-4"
            >
              <div>
                <p className="text-[#012d28] font-bold text-2xl md:text-3xl">
                  {item.number}
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
