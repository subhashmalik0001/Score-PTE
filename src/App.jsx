import React, { useState } from "react";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page5 from "./pages/page5";
import Page7 from "./pages/page7";
import Page8 from "./pages/page8";
import Footer from "./pages/page10";
import Terms from "./pages/Terms";
import PTEAcademic from "./pages/PTEAcademic";
import PricingCards from "./components/PricingCards";

import Navbar from "./components/Navbar";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === "home" && <Navbar onNavigate={setCurrentPage} />}
      {currentPage === "home" ? (
        <>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page5 />
          <Page7 />
          <Page8 />
          <Footer onTermsClick={() => setCurrentPage("terms")} />
        </>
      ) : currentPage === "terms" ? (
        <Terms onBack={handleBackToHome} />
      ) : currentPage === "pte-practice" ? (
        <>
          <Navbar onNavigate={setCurrentPage} />
          <PTEAcademic />
        </>
      ) : currentPage === "course" ? (
        <>
          <Navbar onNavigate={setCurrentPage} />
          <PricingCards />
        </>
      ) : null}
    </div>
  );
}

export default App;
