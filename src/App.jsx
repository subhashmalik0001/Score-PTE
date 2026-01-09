import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page5 from "./pages/page5";
import Page7 from "./pages/page7";
import Page8 from "./pages/page8";
import Footer from "./pages/page10";
import Navbar from "./components/Navbar";
import TelegramPopup from "./components/TelegramPopup";
import Page4 from "./pages/page4";

// Lazy load heavy components
const Terms = lazy(() => import("./pages/Terms"));
const PTEAcademic = lazy(() => import("./pages/PTEAcademic"));
const PricingCards = lazy(() => import("./components/PricingCards"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const AboutPTE = lazy(() => import("./pages/AboutPTE"));
const IELTS = lazy(() => import("./pages/IELTS"));
const SAT = lazy(() => import("./pages/SAT"));
const PTECore = lazy(() => import("./pages/PTECore"));
const HandOuts = lazy(() => import("./pages/HandOuts"));

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleTermsClick = () => {
    setCurrentPage("terms");
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <TelegramPopup />
        <Routes>
          {/* Terms page */}
          <Route path="/term" element={<Suspense fallback={<div>Loading...</div>}><Terms /><Footer onTermsClick={handleTermsClick} /></Suspense>} />
          <Route path="/terms" element={<Suspense fallback={<div>Loading...</div>}><Terms /><Footer onTermsClick={handleTermsClick} /></Suspense>} />
          
          {/* Other pages with footer */}
          <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /><Footer onTermsClick={handleTermsClick} /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /><Footer onTermsClick={handleTermsClick} /></Suspense>} />
          <Route path="/about-pte" element={<Suspense fallback={<div>Loading...</div>}><AboutPTE /><Footer onTermsClick={handleTermsClick} /></Suspense>} />
          <Route path="/pte-academic" element={<Suspense fallback={<div>Loading...</div>}><PTEAcademic /><Footer onTermsClick={handleTermsClick} /></Suspense>} />
          <Route path="/ielts" element={<Suspense fallback={<div>Loading...</div>}><IELTS /><Footer onTermsClick={handleTermsClick} /></Suspense>} />
          <Route path="/sat" element={<Suspense fallback={<div>Loading...</div>}><SAT /><Footer onTermsClick={handleTermsClick} /></Suspense>} />
          <Route path="/pte-core" element={<Suspense fallback={<div>Loading...</div>}><PTECore /><Footer onTermsClick={handleTermsClick} /></Suspense>} />
          <Route path="/course" element={<Suspense fallback={<div>Loading...</div>}><Navbar onNavigate={setCurrentPage} /><PricingCards /><Footer onTermsClick={handleTermsClick} /></Suspense>} />

          {/* Home page and fallback */}
          <Route
            path="*"
            element={
              <>
                <Navbar onNavigate={setCurrentPage} />

                {currentPage === "home" ? (
                  <>
                    <Page1 />
                    <Page2 />
                    <Page4 />
                    <Page3 />
                    <Page5 />
                    <Page7 />
                    <Page8 />
                    <Footer onTermsClick={handleTermsClick} />
                  </>
                ) : currentPage === "pte-practice" ? (
                  <Suspense fallback={<div>Loading...</div>}>
                    <PTEAcademic />
                    <Footer onTermsClick={handleTermsClick} />
                  </Suspense>
                ) : currentPage === "course" ? (
                  <Suspense fallback={<div>Loading...</div>}>
                    <PricingCards />
                    <Footer onTermsClick={handleTermsClick} />
                  </Suspense>
                ) : currentPage === "hand-outs" ? (
                  <Suspense fallback={<div>Loading...</div>}>
                    <HandOuts />
                    <Footer onTermsClick={handleTermsClick} />
                  </Suspense>
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
