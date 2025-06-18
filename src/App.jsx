import React, { useState } from "react";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";
import Page7 from "./pages/page7";
import Page8 from "./pages/page8";
import Page9 from "./pages/page9";
import Footer from "./pages/page10";
import Terms from "./pages/Terms";

import Navbar from "./components/Navbar";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === "home" && <Navbar />}
      {currentPage === "home" ? (
        <>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
          <Page8 />
          <Page9 />
          <Footer onTermsClick={() => setCurrentPage("terms")} />
        </>
      ) : currentPage === "terms" ? (
        <Terms onBack={handleBackToHome} />
      ) : null}
    </div>
  );
}

export default App;
