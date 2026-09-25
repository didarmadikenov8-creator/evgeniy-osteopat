import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/site/Header";
import Hero from "./components/site/Hero";
import Complaints from "./components/site/Complaints";
import About from "./components/site/About";
import Process from "./components/site/Process";
import Videos from "./components/site/Videos";
import Osteopathy from "./components/site/Osteopathy";
import Reviews from "./components/site/Reviews";
import Contacts from "./components/site/Contacts";
import VideoModal from "./components/site/VideoModal";

const Home = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const openVideo = (src) => setVideoSrc(src);
  const closeVideo = () => setVideoSrc(null);

  return (
    <div className="App bg-[#ece6da]">
      <Header />
      <main>
        <Hero onPlay={openVideo} />
        <Complaints />
        <About />
        <Process />
        <Videos onPlay={openVideo} />
        <Osteopathy />
        <Reviews />
        <Contacts />
      </main>
      <VideoModal src={videoSrc} onClose={closeVideo} />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
