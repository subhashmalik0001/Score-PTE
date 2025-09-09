import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Terms page handled by React Router */}
          <Route path="/term" element={<Terms />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Terms />} />
          <Route path="/about" element={<Terms />} />
          
          

          {/* Everything else handled manually */}
          <Route
            path="*"
            element={
              <>
                {currentPage === "home" && <Navbar onNavigate={setCurrentPage} />}

                {currentPage === "home" ? (
                  <>
                    <Page1 />
                    <div className="mt-[800px]">
  <Page2 />
</div>
                    <Page3 />
                    <Page5 />
                    <Page7 />
                    <Page8 />
                    <Footer />
                  </>
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
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
