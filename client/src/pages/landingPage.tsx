import Assessory from "../components/landing/accessory";
import Banner from "../components/landing/banner";
import Feature from "../components/landing/feature";
import Hero from "../components/landing/hero";
import Navbar from "../components/navbar";
import Reason from "../components/landing/reason";
import Information from "../components/landing/information";
import Footer from "../components/footer";
import Lineup from "../components/landing/lineup";
const LandingPage = () => {
  return (
    <div className="max-w-[2560px]">
      <Navbar />
      <Hero />
      <Feature />
      <Lineup />
      <Banner />
      <Reason />
      <Assessory />
      <Information />
      <Footer props=""/>
    </div>
  );
};

export default LandingPage;
