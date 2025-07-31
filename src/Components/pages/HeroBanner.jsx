import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import facebook from "../../assets/images/facebook.png";
import google from "../../assets/images/google-1.png";
import instagram from "../../assets/images/instagram.png";
import man1 from "../../assets/images/man-2.png";
import "./HeroButton.css";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden h-screen flex items-center justify-center bg-[#FBF9F1]">
      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl px-4 lg:px-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <p className="text-2xl text-gray-700">Hey There,</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#012d28]">
            I'm <span className="text-[#05c1a1]">Raihan</span>
          </h1>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0  font-family">
            Raihan, a skilled marketer & ads specialist, excels in creating
            impactful campaigns, optimizing strategies, and driving exceptional
            results.
          </p>
          <button className="fancy1-btn">
            <span>Contact Me</span>
          </button>

          {/* Social Icons */}
          <div className="pt-8">
            <p className="text-xl font-semibold text-[#012d28]">
              Top Rated Marketer
            </p>
            <div className="flex gap-8 justify-center lg:justify-start mt-5">
              <span className="auto-scale p-3 w-10 h-10 bg-white text-[#055855] text-2xl rounded-full flex items-center justify-center shadow-md">
                <TbBrandFiverr />
              </span>
              <span className="auto-scale p-3 w-10 h-10 bg-white text-[#055855] text-2xl rounded-full flex items-center justify-center shadow-md">
                <SiUpwork />
              </span>
              <span className="auto-scale p-3 w-10 h-10 bg-white text-[#055855] text-2xl rounded-full flex items-center justify-center shadow-md">
                <TbBrandFiverr />
              </span>
            </div>
          </div>
        </div>

        {/* Middle Image */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Main man image */}
          <img
            src={man1}
            alt="Hero Banner Image"
            className="w-[350px] h-full object-contain z-10 pt-24"
          />

          {/* Facebook - Left */}
          <span className=" auto-scale absolute left-[-80px] top-2/3 transform -translate-y-2/3 z-20">
            <img
              src={facebook}
              alt="facebook"
              className="w-8 h-8 rounded-full shadow-lg border-4 border-white"
            />
          </span>

          {/* Instagram - Right */}
          <span className="auto-scale absolute right-[-80px] top-2/3 transform -translate-y-2/3 z-20">
            <img
              src={instagram}
              alt="instagram"
              className="w-8 h-8 rounded-full shadow-lg border-4 border-white"
            />
          </span>

          {/* Google - Top */}
          <span className=" auto-scale absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
            <img
              src={google}
              alt="google"
              className="w-8 h-8 rounded-full shadow-lg border-4 border-white"
            />
          </span>
        </div>

        {/* Right Content */}
        <div className=" flex-1 flex flex-col items-center lg:items-end gap-6 mt-8 lg:mt-10">
          {[
            { number: "06+", label: "Years of Experience" },
            { number: "400+", label: "Projects Completed" },
            { number: "160+", label: "Satisfied Clients" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#f9f9e6] via-[#fff] to-[#fff] animate-pulse shadow-md w-40 h-40 flex items-center justify-center text-center rounded-lg p-4"
            >
              <span className="text-[#012d28] font-bold text-3xl lg:text-5xl">
                {item.number}
                <br />
                <span className="text-sm font-medium text-gray-600">
                  {item.label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
