import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import LoadingScreen from "./components/LoadingScreen";
import About from "./components/about";
import Contact from "./components/contact";
import FAQs from "./components/faqs";
import ShortlistedTeams from "./pages/ShortlistedTeams";

// Landing page — home + about sections
const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen
        isLoading={isLoading}
        onLoadingComplete={() => setIsLoading(false)}
        minDuration={3000}
      />
      <Home />
      <About />
      <FAQs />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shortlisted-teams" element={<ShortlistedTeams />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
