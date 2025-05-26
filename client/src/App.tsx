import "./App.css";
import Explore from "./components/explore";
import Feature from "./components/feature";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="max-w-[2560px]">
      <Navbar />
      <Hero />
      <Feature />
      <Explore />
    </div>
  );
}

export default App;