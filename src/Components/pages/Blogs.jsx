import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import marketer1 from "../../assets/images/marketer-1.avif";
import marketer2 from "../../assets/images/marketer-2.jpg";
import marketer3 from "../../assets/images/marketer-3.jpg";
import "./HeroButton.css";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-white mx-auto px-8 py-16">
      <div className="max-w-screen-xl text-center">
        <p className="text-lg font-semibold text-red-600">Our Blogs</p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
          Marketing Tips & <br />
          Strategies
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3 pt-16">
        {/* Card 1 */}
        <div
          className="border rounded-lg overflow-hidden shadow-sm"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className=" text-white p-3 relative rounded-2xl flex justify-between items-start">
            <img
              src={marketer1}
              alt="Person"
              className="w-full h-[220px] mx-auto rounded-lg"
            />
          </div>

          <div className="p-3 text-left space-y-6">
            <p className=" text-gray-950 font-bold">
              5 Proven Strategies to Boost Your Facebook Ads ROI.
            </p>
            <p className="text-gray-600">
              Maximize return with these essential Facebook Ads strategies for
              sucess
            </p>
            <p className="text-gray-600">December 31, 2024</p>
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
              src={marketer2}
              alt="Person"
              className="w-full h-[220px] mx-auto rounded-lg"
            />
          </div>

          <div className="p-3 text-left space-y-6">
            <p className=" text-gray-950 font-bold">
              How Google Ada Can Transform Your Business Growth
            </p>
            <p className="text-gray-600">
              Boost your business with Google Ads expertise for effective online
              advertising.
            </p>
            <p className="text-gray-600">December 31, 2024</p>
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
              src={marketer3}
              alt="Person"
              className="w-full h-[220px] mx-auto rounded-lg"
            />
          </div>

          <div className="p-3 text-left space-y-6">
            <p className=" text-gray-950 font-bold">
              Mastering YouTube Ads Tips for Maximum Engagement
            </p>
            <p className="text-gray-600">
              Unlock the srecting YouTube Ads that drive higher engagement and
              results.
            </p>
            <p className="text-gray-600">December 31, 2024</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="fancy1-btn mt-10 ">
          <span>View All Blogs</span>
        </button>
      </div>
    </section>
  );
};

export default Blogs;
