import "./App.css";
import Banner from "./components/landing/banner";
import Explore from "./components/landing/explore";
import Feature from "./components/landing/feature";
import Hero from "./components/landing/hero";
import Navbar from "./components/landing/navbar";

function App() {
  return (
    <div className="max-w-[2560px]">
      <Navbar />
      <Hero />
      <Feature />
      <Explore />
      <Banner />
    </div>
  );
}

export default App;