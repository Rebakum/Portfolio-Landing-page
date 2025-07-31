import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import person1 from "../../assets/images/man-3.png";
import "./HeroButton.css";

const MarketingService = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-white mx-auto px-8 py-16">
      <div className="max-w-screen-xl text-center">
        <p className="text-lg font-semibold text-red-600">My Gigs</p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
          Boost Your Brand with <br />
          Expert Marketing
        </h2>

        <div className="grid gap-6 md:grid-cols-3 pt-16">
          {/* Card 1 */}
          <div
            className="border rounded-lg overflow-hidden shadow-sm"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="bg-green-900 text-white pt-12 pb-6 px-6 relative flex justify-between items-start">
              <div>
                <div className="absolute w-20 h-20 top-4 left-4 bg-orange-500 text-white text-sm font-semibold p-3 rounded-full">
                  Start at <br />
                  $299
                </div>
                <div className="absolute top-16 left-40 flex justify-end space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/facebook-new.png"
                    alt="Facebook"
                    className="h-10 w-10 auto-scale"
                  />
                </div>
                <div className="absolute bottom-28 right-5 flex justify-end space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/facebook-new.png"
                    alt="Facebook"
                    className="h-6 w-6 auto-scale"
                  />
                </div>
                <div className="text-left mt-32">
                  <p className="text-lg lg:text-3xl font-bold text-green-500">
                    Facebook Ads
                  </p>
                  <p className="text-xl font-bold text-white">
                    to grow your <br /> brand.
                  </p>
                </div>
              </div>
              <img
                src={person1}
                alt="Person"
                className="w-32 h-auto mt-6 mx-auto"
              />
            </div>

            <div className="p-4 text-left">
              <p className="mb-4">
                I will create high-converting Facebook Ads to grow your brand.
              </p>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <div className="flex flex-col text-gray-600">
                  <span className="text-lg font-semibold">
                    3-7 Days Delivery
                  </span>
                  <p>
                    <span className="text-orange-500 font-semibold">★ 4.9</span>{" "}
                    (280+ Reviews)
                  </p>
                </div>
                <button className="text-sm font-semibold text-gray-600 shadow bg-white hover:bg-gray-100 px-4 py-2 rounded">
                  See Details
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="border rounded-lg overflow-hidden shadow-sm"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="bg-[#601a38] text-white pt-12 pb-6 px-6 relative flex justify-between items-start">
              <div>
                <div className="absolute w-20 h-20 top-4 left-4 bg-orange-500 text-white text-sm font-semibold p-3 rounded-full">
                  Start at <br />
                  $299
                </div>
                <div className="absolute top-16 left-40 flex justify-end space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/instagram-new.png"
                    alt="Instagram"
                    className="h-10 w-10 auto-scale"
                  />
                </div>
                <div className="absolute bottom-28 right-5 flex justify-end space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/youtube-play.png"
                    alt="YouTube"
                    className="h-6 w-6 auto-scale"
                  />
                </div>
                <div className="text-left mt-32">
                  <p className="text-lg lg:text-3xl font-bold text-yellow-400">
                    Instagram Ads
                  </p>
                  <p className="text-xl font-bold text-white">
                    to grow your <br /> brand.
                  </p>
                </div>
              </div>
              <img
                src={person1}
                alt="Person"
                className="w-32 h-auto mt-6 mx-auto"
              />
            </div>

            <div className="p-4 text-left">
              <p className="mb-4">
                I will develop engaging YouTube Ads to boost your business.
              </p>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <div className="flex flex-col text-gray-600">
                  <span className="text-lg font-semibold">
                    3-7 Days Delivery
                  </span>
                  <p>
                    <span className="text-orange-500 font-semibold">★ 4.9</span>{" "}
                    (280+ Reviews)
                  </p>
                </div>
                <button className="text-sm font-semibold text-gray-600 shadow bg-white hover:bg-gray-100 px-4 py-2 rounded">
                  See Details
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="border rounded-lg overflow-hidden shadow-sm"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div className="bg-green-900 text-white pt-12 pb-6 px-6 relative flex justify-between items-start">
              <div>
                <div className="absolute w-20 h-20 top-4 left-4 bg-orange-500 text-white text-sm font-semibold p-3 rounded-full">
                  Start at <br />
                  $299
                </div>
                <div className="absolute top-16 left-40 flex justify-end space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/google-logo.png"
                    alt="Google"
                    className="h-10 w-10 auto-scale"
                  />
                </div>
                <div className="absolute bottom-28 right-5 flex justify-end space-x-2">
                  <img
                    src="https://img.icons8.com/color/48/google-logo.png"
                    alt="Google"
                    className="h-6 w-6 auto-scale"
                  />
                </div>
                <div className="text-left mt-32">
                  <p className="text-lg lg:text-3xl font-bold text-green-500">
                    Google Ads
                  </p>
                  <p className="text-xl font-bold text-white">
                    to grow your <br /> brand.
                  </p>
                </div>
              </div>
              <img
                src={person1}
                alt="Person"
                className="w-32 h-auto mt-6 mx-auto"
              />
            </div>

            <div className="p-4 text-left">
              <p className="mb-4">
                I will design effective Google Ads for maximum traffic.
              </p>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <div className="flex flex-col text-gray-600">
                  <span className="text-lg font-semibold">
                    3-7 Days Delivery
                  </span>
                  <p>
                    <span className="text-orange-500 font-semibold">★ 4.9</span>{" "}
                    (280+ Reviews)
                  </p>
                </div>
                <button className="text-sm font-semibold text-gray-600 shadow bg-white hover:bg-gray-100 px-4 py-2 rounded">
                  See Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <button className="fancy1-btn mt-10">
          <span>View All Gigs</span>
        </button>
      </div>
    </section>
  );
};

export default MarketingService;
