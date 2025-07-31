import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "John Michael",
    title: "Marketing Expert",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Partnering with this digital marketer was a game-changer. Their expertise in Facebook Ads, Google Ads, and YouTube Ads greatly improved our online reach and sales. Highly recommended!",
  },
  {
    name: "Emily Carter",
    title: "E-Commerce Founder",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    message:
      "This team helped us triple our ROI with smart ad targeting and data-driven strategy. Absolutely brilliant work!",
  },
  {
    name: "David Lin",
    title: "Startup CEO",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    message:
      "Very professional and communicative throughout. Our brand awareness has soared across platforms.",
  },
  {
    name: "Sophia Lee",
    title: "Fashion Brand Owner",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    message:
      "Loved working with them. Their YouTube Ads brought massive engagement and visibility!",
  },

  {
    name: "Nina Patel",
    title: "Wellness Entrepreneur",
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    message:
      "Their strategy gave my wellness brand the visibility it needed. Truly insightful and proactive collaboration.",
  },
];

const TestimonialSlider = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <section className="bg-[#032433] text-white py-20 px-4">
      <div
        data-aos="fade-right"
        data-aos-delay="200"
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-red-400 font-semibold mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Customer Success Stories <br /> and Reviews
        </h2>

        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="bg-white text-gray-800 rounded-lg shadow-md px-8 py-12 relative"
        >
          <div className="flex justify-center space-x-2 mb-6">
            {testimonials.map((t, i) => (
              <img
                key={i}
                src={t.avatar}
                alt={t.name}
                className={`w-10 h-10 rounded-full border-2 ${
                  i === index
                    ? "border-pink-500 scale-110"
                    : "border-transparent opacity-50"
                } transition-all duration-300`}
              />
            ))}
          </div>

          <p className="text-lg italic mb-6">"{testimonials[index].message}"</p>

          <div>
            <p className="font-bold">{testimonials[index].name}</p>
            <p className="text-sm text-gray-600">{testimonials[index].title}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 space-x-6">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-white text-gray-800 hover:bg-gray-200 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full bg-white text-gray-800 hover:bg-gray-200 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSlider;
