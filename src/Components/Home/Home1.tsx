import AdsSpecialistSection from "../pages/AdsSpecialistSection";
import Blogs from "../pages/Blogs";
import BusinessTogether from "../pages/BusnessTogether";
import Footer from "../pages/Footer";
import HeroBanner from "../pages/HeroBanner";
import MarketingService from "../pages/MarketingService";
import MySkills from "../pages/MySkills";
import MyWorking from "../pages/MyWorking";
import PartnerLogos from "../pages/PartnerLogos";
import TestimonialSlider from "../pages/Testimonial";

const Home1 = () => {
  return (
    <div>
      <HeroBanner />
      <AdsSpecialistSection />
      <MarketingService />
      <MyWorking />
      <MySkills />
      <TestimonialSlider />
      <Blogs />
      <BusinessTogether />
      <PartnerLogos />
      <Footer />
    </div>
  );
};

export default Home1;
