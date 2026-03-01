import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Mission from "./components/Mission";
import MainInductee from "./components/MainInductee";
import SecondInductee from "./components/SecondInductee";
import Committee from "./components/Committee";
import Event from "./components/Event";
import Highlights from "./components/Highlights";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Committee2025 from "./pages/Committee2025";
import Gallery2025 from "./pages/Gallery2025";

function HomePage() {
  return (
    <div className="font-sans leading-relaxed m-0 bg-white overflow-x-hidden">
      <Header />
      <Mission />
      <MainInductee />
      <SecondInductee />
      <Committee />
      <Event />
      <Sponsors />
      <Highlights />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/committee2025" element={<Committee2025 />} />
      <Route path="/gallery2025" element={<Gallery2025 />} />
    </Routes>
  );
}

export default App;
