import Assessory from "../components/landing/accessory";
import Banner from "../components/landing/banner";
import Explore from "../components/landing/explore";
import Feature from "../components/landing/feature";
import Hero from "../components/landing/hero";
import Navbar from "../components/landing/navbar";
import Reason from "../components/landing/reason";
import Information from "../components/landing/information";
import Footer from "../components/footer";
const LandingPage = () => {
  return (
    <div className="max-w-[2560px]">
      <Navbar />
      <Hero />
      <Feature />
      <Explore />
      <Banner />
      <Reason />
      <Assessory />
      <Information />
      <Footer />
    </div>
  );
};

export default LandingPage;
