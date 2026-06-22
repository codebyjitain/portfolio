import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { MainLayout } from "./MainLayout";
import LeetCode from "./pages/LeetCode";
import Code360 from "./pages/Code360";
import Badges from "./pages/Badges";
import GFG from "./pages/GFG";
import WelcomePage from "./pages/WelcomePage";
import AllsmProject from "./pages/AllsmProject";
import TrueTripGuideProject from "./pages/TrueTripGuideProject";
import MatProvProject from "./pages/MatProvProject";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true); // start fade out
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowWelcome(false); // unmount splash
    }, 2500); // fade duration

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (showWelcome) {
    return <WelcomePage fadeOut={fadeOut} />;
  }

  return (
    <div className="relative animate-fadeIn">
      <div className="fixed top-2 left-2 z-50 cursor-pointer">
        <a href="#home">
          <img className="w-20 h-20" src="/logo.svg" alt="Logo" />
        </a>
      </div>

      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/leetcode" element={<LeetCode />} />
        <Route path="/code360" element={<Code360 />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/gfg" element={<GFG />} />
        <Route path="/allsm" element={<AllsmProject/>}/>
         <Route path="/truetripguide" element={<TrueTripGuideProject />} />
        <Route path="/matprov" element={<MatProvProject />} />
      </Routes>
    </div>
  );
};

export default App;
