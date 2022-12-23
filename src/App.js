import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Chubslist from "./pages/Chublist";
import Chubmap from "./pages/Chubmap";
import Code from "./pages/Code";
import Team from "./pages/Team";
import Mint from "./pages/Mint";
import ChubmapIsland from "./pages/ChubmapIsland";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/chubmap" element={<Chubmap/>} />
        <Route path="/chublist" element={<Chubslist/>} />
        <Route path="/code" element={<Code/>} />
        <Route path="/mint" element={<Mint/>} />
        <Route path="/chub-island" element={<ChubmapIsland/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
