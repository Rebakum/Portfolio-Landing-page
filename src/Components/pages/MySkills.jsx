import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import maillogo from "../../assets/images/email.png";
import facebooklogo from "../../assets/images/facebook.png";
import googlelogo from "../../assets/images/google-1.png";
import instagramlogo from "../../assets/images/instagram.png";
import youtubelogo from "../../assets/images/youtube.png";

import "./HeroButton.css";

const MySkills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    {
      logo: googlelogo,
      title: "Google Ads",
      level: "85%",
      delay: 0,
    },
    {
      logo: facebooklogo,
      title: "Facebook Ads",
      level: "95%",
      delay: 200,
    },
    {
      logo: maillogo,
      title: "Email Marketing",
      level: "100%",
      delay: 400,
    },
    {
      logo: youtubelogo,
      title: "YouTube Ads",
      level: "85%",
      delay: 600,
    },
    {
      logo: instagramlogo,
      title: "Instagram Ads ",
      level: "75%",
      delay: 800,
    },
  ];

  return (
    <section className=" px-6 py-16">
      <div className="max-w-6xl mx-auto text-start">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 ">
          My Skills
        </h2>
        <div className="border-b-2 border-gray-200 shadow-3xl w-full mt-5 mb-10 "></div>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className=" p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={skill.delay}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white p-3 rounded-full shadow-lg transition-transform hover:scale-110">
                  <img
                    src={skill.logo}
                    alt={skill.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="text-xl font-bold text-gray-800">{skill.level}</p>
                <p className="text-gray-600 text-sm">{skill.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
