import { useState } from "react";
import img1 from "../../assets/Images/kitchen/img-1.jpg";
import img14 from "../../assets/Images/kitchen/img-10.avif";
import img2 from "../../assets/Images/kitchen/img-11.jpg";
import img5 from "../../assets/Images/kitchen/img-12.webp";
import img4 from "../../assets/Images/kitchen/img-13.jpeg";
import img12 from "../../assets/Images/kitchen/img-14.webp";
import img15 from "../../assets/Images/kitchen/img-15.jpg";
import img6 from "../../assets/Images/kitchen/img-2.jpg";
import img3 from "../../assets/Images/kitchen/img-3.jpg";
import img7 from "../../assets/Images/kitchen/img-4.webp";
import img8 from "../../assets/Images/kitchen/img-5.webp";
import img10 from "../../assets/Images/kitchen/img-6.JPG";
import img11 from "../../assets/Images/kitchen/img-7.jpeg";
import img13 from "../../assets/Images/kitchen/img-9.jpg";

const Home = () => {
  const [zoomData, setZoomData] = useState({ x: 0, y: 0 });
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section>
      {/* ✅ Kitchen Section with Background Image */}
      <div className="relative bg-black">
        {/* Background Image */}
        <div
          className="bg-cover bg-center bg-no-repeat absolute inset-0"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>

        <div className="absolute inset-0"></div>

        <div className="relative py-28 px-4 flex justify-center items-center flex-col rounded-2xl max-w-5xl mx-auto text-center text-gray-100 shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">রুচির কিচেন</h2>
          <p className="text-lg w-2/3 mb-8 mx-auto">
            ঘরের মতো স্বাস্থ্যকর, সুস্বাদু ও সাশ্রয়ী খাবার প্রতিদিন নতুন মেনুতে
            আমরা পৌঁছে দিচ্ছি আপনার দরজায়। ঘরোয়া স্বাদের যত্নে তৈরি প্রতিটি পদে
            রয়েছে ভালোবাসা ও নির্ভরতা।
          </p>

          {/* Action Button */}
          <div className="flex flex-wrap justify-between gap-6">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out hover:brightness-110 hover:shadow-md">
              🍛 আজকের মেনুতে অর্ডার করুন
            </button>

            <a
              href="tel:01911758585"
              className="border border-yellow-50 text-white px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out hover:bg-yellow-500 hover:shadow-md"
            >
              কল করতে:{" "}
              <span className="text-white font-semibold">01911-758585</span>
            </a>
          </div>
        </div>
      </div>

      {/*  biryani Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-rray-900 mb-6 text-center md:text-left">
              কেন খাবেন রুচির কিচেন-এর খাবার?
            </h2>
            <ul className="text-gray-800 text-base space-y-1 leading-relaxed">
              <li> ✅ ঘরের মতো স্বাস্থ্যকর রান্না</li>
              <li> ✅ প্রতিদিন ভিন্ন ভিন্ন সুস্বাদু মেনু</li>
              <li> ✅ সাশ্রয়ী দামে পুষ্টিকর খাবার</li>
              <li> ✅ সময়মতো হোম ডেলিভারি</li>
              <li> ✅ কোনো প্রিজারভেটিভ বা অতিরিক্ত তেল নয়</li>
              <li> ✅ রান্না হয় ভালোবাসা আর যত্নে</li>
              <br />
              <br />
              রুচির কিচেন শুধু খাবারই নয়, ঘরের মতো ভালোবাসা ও নির্ভরতার একটি
              প্রতিশ্রুতি।
            </ul>
            <button className="bg-yellow-500 mt-5 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
              🍛 আজকের মেনুতে অর্ডার করুন
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={img2}
              alt="মেহেদী হেয়ার প্যাক"
              className="rounded-lg shadow-md w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
      {/* স্পেশাল হাঁড়ি বিরিয়ানি */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8  items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={img3}
              alt="মেহেদী হেয়ার প্যাক"
              className="rounded-lg shadow-md w-full h-[500px] object-cover"
            />
          </div>
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
              🥘 স্পেশাল হাঁড়ি বিরিয়ানি
            </h2>
            <p className="text-lg text-gray-700 text-justify leading-relaxed">
              ধোঁয়া ওঠা গরম গরম স্পেশাল হাঁড়ি বিরিয়ানি — রুচির কিচেনের গর্ব। এই
              বিরিয়ানিতে ব্যবহার করা হয় খাঁটি ঘি, উচ্চমানের বাসমতি চাল, কাশ্মীরি
              মসলা ও ভালো মানের নরম মাংস। প্রতিটি চালের দানা ঝরঝরে ও সুগন্ধে
              ভরপুর। হাঁড়িতে ধীরে ধীরে রান্না হওয়ায় মসলার স্বাদ গভীরভাবে মাংসে
              ঢুকে যায়। এটি শুধু খাবার নয়, একটি রাজকীয় অভিজ্ঞতা। যেকোনো উৎসবে বা
              পারিবারিক অনুষ্ঠানে রুচির কিচেনের এই বিশেষ হাঁড়ি বিরিয়ানি আপনার
              অতিথিদের মন জয় করে নেবে নিঃসন্দেহে। সুস্বাদু স্বাদ, ঘ্রাণ ও
              পরিবেশনায় রুচির কিচেন বরাবরই অনন্য।
            </p>
            <button className="bg-yellow-500 mt-5 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
              🍛 আজকের মেনুতে অর্ডার করুন
            </button>
          </div>
        </div>
      </div>
      {/* স্পেশাল হাঁড়ি বিফ */}
      <div className=" py-16  bg-black">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8   bg-black items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center md:text-left">
              🥩 স্পেশাল হাঁড়ি বিফ
            </h2>
            <p className="text-lg text-gray-200 text-justify leading-relaxed">
              রুচির কিচেনের অন্যতম জনপ্রিয় পদ — স্পেশাল হাঁড়ি বিফ। এই বিশেষ পদটি
              রান্না করা হয় ধীরে ধীরে হালকা আঁচে, যাতে মাংসের প্রতিটি রেশায় মসলা
              ঢুকে গিয়ে এক অসাধারণ স্বাদ তৈরি করে। ব্যবহার করা হয় খাঁটি দেশি
              গরুর মাংস, ঘন ও ঘ্রাণযুক্ত মসলা, কাঁচা মরিচ ও সামান্য ঘি — যা একে
              আলাদা করে তোলে সাধারণ গরুর মাংসের রান্না থেকে।
              <br />
              <br />
              মাংস থাকে একদম নরম ও রসালো — মুখে দিলেই গলে যায়। এটি ভাত, পরোটা বা
              নানের সঙ্গে খেতে একেবারেই অসাধারণ। যেকোনো দাওয়াত, উৎসব বা স্পেশাল
              দিনে রুচির কিচেনের হাঁড়ি বিফ আপনার টেবিলের মূল আকর্ষণ হবে
              নিঃসন্দেহে।
            </p>
            <button className="bg-yellow-500 mt-5 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
              🍛 আজকের মেনুতে অর্ডার করুন
            </button>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={img4}
              alt="মেহেদী হেয়ার প্যাক"
              className="rounded-lg rou shadow-md w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
      {/* sera kitchen */}

      <div className="flex justify-center p items-center flex-col">
        <div className="bg-yellow-500  w-full h-20 flex items-center justify-center rounded-md shadow-md">
          {" "}
          <h1 className="text-4xl font-extrabold text-gray-900   text-center md:text-left">
            🍽️ কেন রুচির কিচেন সেরা?
          </h1>
        </div>
        <div>
          <div className="mt-10 w-full  p-10 flex flex-col items-center rpunded-2xl shadow-2xl">
            <p className="text-lg text-gray-700 text-center max-w-4xl leading-relaxed">
              <span className="font-semibold text-yellow-600">রুচির কিচেন</span>{" "}
              শুধু একটি খাবারের নাম নয় — এটি একটি অভিজ্ঞতা। প্রতিটি পদে রয়েছে
              খাঁটি স্বাদ, মানসম্পন্ন উপকরণ এবং নিখুঁত রান্নার ছোঁয়া। এখানে
              রান্না হয় সততা, যত্ন এবং ভালোবাসা দিয়ে। দেশি ঘি, ঘ্রাণযুক্ত মসলা,
              নরম মাংস আর প্রিমিয়াম চাল — সবকিছু মিলিয়ে রুচির কিচেনের প্রতিটি
              মেনুই রাজকীয়।
              <br />
              <br />
              সময়ের সাথে সাথে{" "}
              <span className="font-semibold text-yellow-600">
                রুচির কিচেন
              </span>{" "}
              হয়ে উঠেছে ভোজন রসিকদের প্রথম পছন্দ — ঘরোয়া খাবারের স্বাদ ও
              অতিথিপরায়ণতার পরিপূর্ণ মিলনস্থল। উৎসব হোক বা সাধারণ দিন, রুচির
              কিচেন সবসময় আপনাকে দিবে মনের মতো খাবার ও সেবার নিশ্চয়তা।
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold shadow-sm hover:brightness-110 transition duration-300">
                🍛 আজকের মেনুতে অর্ডার করুন
              </button>
              <a
                href="tel:01911758585"
                className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-white transition duration-300"
              >
                📞 কল করতে: <span className="underline">01911-758585</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Delivary */}

      <div className="my-16 px-4 md:px-16 flex flex-col-reverse md:flex-row-reverse gap-6 items-center">
        {/* Text Section */}
        <div className="flex-1 p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            রুচির কিচেন এখন ঘরে ঘরে খাবার পৌঁছে দিচ্ছে!
          </h2>
          <p className="text-gray-700 text-base mb-4">
            অনলাইনে অর্ডার করুন এবং উপভোগ করুন আমাদের স্পেশাল হোম ডেলিভারি
            সার্ভিস। নির্দিষ্ট সময়ে খাবার পৌঁছে যাবে আপনার দরজায়!
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out hover:brightness-110 hover:shadow-md">
            🛒 অর্ডার করুন এখনই
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={img5}
            alt="মেহেদি ব্যবহারের ছবি"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      {/* khabar Menu */}

      <div className="py-16 ">
        {/* Section title */}
        <div className="bg-yellow-500  w-full h-20 flex items-center justify-center rounded-md shadow-md">
          {" "}
          <h1 className="text-4xl font-extrabold text-gray-900   text-center md:text-left">
            🍽️ রুচির কিচেন মেনু
          </h1>
        </div>

        {/* Grid of ingredients */}
        <div className="grid grid-cols-2 mt-10 md:grid-cols-5 px-4 gap-4">
          {menus.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-32 overflow-hidden rounded-md shadow-md group"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setZoomData({ x, y });
                setHoverIndex(index);
              }}
              onMouseLeave={() => {
                setHoverIndex(null);
              }}
            >
              <img
                src={item.image}
                alt={`উপাদান ${index + 1}`}
                className={`w-full h-full object-cover transition duration-300 ${
                  hoverIndex === index ? "scale-150" : "scale-100"
                }`}
                style={
                  hoverIndex === index
                    ? {
                        transformOrigin: `${zoomData.x}% ${zoomData.y}%`,
                      }
                    : {}
                }
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white text-center text-sm py-1">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="flex mt-10 flex-col md:flex-row justify-center items-center gap-4">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out hover:brightness-110 hover:shadow-md">
            🍛 আজকের মেনুতে অর্ডার করুন
          </button>
        </div>
      </div>

      {/* order from */}

      {/* Heading */}
      <div className="bg-yellow-500 w-full h-20 flex items-center justify-center rounded-md shadow-md mb-8">
        <h1 className="text-white font-bold text-xl md:text-2xl text-center">
          অর্ডার করতে নিচের ফর্মটি পূরণ কর
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Form */}
        <div className="w-full lg:w-1/2">
          <form className="bg-white p-8 rounded-xl  space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                আপনার নাম
              </label>
              <input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                ফোন নাম্বার
              </label>
              <input
                type="tel"
                placeholder="ফোন নাম্বার লিখুন"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                আপনার ঠিকানা
              </label>
              <textarea
                placeholder="বিস্তারিত ঠিকানা লিখুন"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 mt-6 px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            পণ্যের বিস্তারিত তথ্য
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md text-center">
              <thead className="bg-yellow-100">
                <tr>
                  <th className="py-3 px-4 border-b font-semibold text-gray-700">
                    পন্যের ছবি{" "}
                  </th>
                  <th className="py-3 px-4 border-b font-semibold text-gray-700">
                    পণ্যের নাম
                  </th>
                  <th className="py-3 px-4 border-b font-semibold text-gray-700">
                    দাম
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-4 border-b">
                    <img
                      src={img3}
                      alt="মেহেদি ছবি"
                      className="w-24 h-24 object-cover mx-auto rounded-md"
                    />
                  </td>
                  <td className="py-4 px-4 border-b">স্পেশাল হাঁড়ি বিরিয়ানি</td>
                  <td className="py-4 px-4 border-b text-gray-800 font-bold">
                    ৳৮৫০
                    <span className="line-through text-red-500 ml-2">
                      ৳১১৫০
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan="2"
                    className="py-4 px-4 font-semibold text-gray-800 text-right"
                  >
                    মোট মূল্য:
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-bold text-lg">
                    ৳৮৫০
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="text-center mt-6">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out hover:brightness-110 hover:shadow-md">
                🛒 এখনই অর্ডার করুন
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}

      <div className="bg-black text-gray-100 py-4 mt-12 text-center shadow-inner ">
        <p className="text-sm">
          © {new Date().getFullYear()} আপনার কোম্পানির নাম. সর্বস্বত্ব সংরক্ষিত।
        </p>
        <p className="text-xs mt-1">ডিজাইন ও ডেভেলপ করেছে রেবেকা সুলতানা 💚</p>
      </div>
    </section>
  );
};
const menus = [
  { name: "বিফ রেজালা", image: img6 },
  { name: "চিকেন কাচ্চি বিরিয়ানি", image: img7 },
  { name: "মাটন কাচ্চি বিরিয়ানি", image: img7 },
  { name: "হাঁড়ি মোরগ পোলাও", image: img15 },
  { name: "বিফ কোরমা", image: img8 },
  { name: "স্পেশাল গরুর রোস্ট", image: img10 },
  { name: "মুগল চিকেন বিরিয়ানি", image: img11 },
  { name: "মোরগ রেজালা", image: img14 },
  { name: "চিকেন চাপ", image: img11 },
  { name: "নান রুটি ও কাবাব প্লেট", image: img12 },
  { name: "বিফ তন্দুরি প্লেট", image: img13 },
  { name: "খাসির পায়া (সকাল স্পেশাল)", image: img14 },
  { name: "স্পেশাল হাঁড়ি বিরিয়ানি", image: img3 },
  { name: "হাঁড়ি বিফ তেহারি", image: img4 },
];

export default Home;
