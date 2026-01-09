import React from "react";
import Navbar from "../components/Navbar";

const SAT = () => {
  return (
    <div className="min-h-screen bg-[#0D2440] text-[#E7F0FA]">
      <Navbar />
      
      <div className=" min-w-full px-[5%] xs:px-[2%]  ll px-[5%] xs:px-[2%]   mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            SAT
          </h1>
          <p className="text-xl text-blue-300 mb-6">
            Scholastic Assessment Test
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 border border-blue-500/30">
              College Admissions
            </span>
            <span className="px-4 py-2 bg-green-600/20 rounded-full text-green-300 border border-green-500/30">
              Digital & Paper
            </span>
            <span className="px-4 py-2 bg-purple-600/20 rounded-full text-purple-300 border border-purple-500/30">
              US Universities
            </span>
          </div>
        </div>

        {/* About SAT */}
        <div className="bg-[#1A365D]/50 rounded-xl p-8 mb-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">About SAT</h2>
          <p className="text-lg leading-relaxed mb-4">
            The SAT is a standardized test widely used for college admissions in the United States. Developed by the College Board, it measures literacy, numeracy, and writing skills that are needed for academic success in college.
          </p>
          <p className="text-lg leading-relaxed">
            The SAT has undergone significant changes, with the digital SAT launching in 2024, featuring adaptive testing, shorter duration, and enhanced security measures.
          </p>
        </div>

        {/* Test Formats */}
        <div className="grid  xs:grid-cols-1 grid-cols-2 1 grid-cols-2  gap-8 mb-8">
          <div className="bg-[#1A365D]/50 rounded-xl p-6 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Digital SAT</h3>
            <p className="mb-4">The new adaptive digital format launched in 2024, offering a more personalized and secure testing experience.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Adaptive testing technology</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Shorter test duration</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Enhanced security</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Faster score delivery</li>
            </ul>
          </div>
          
          <div className="bg-[#1A365D]/50 rounded-xl p-6 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Paper SAT</h3>
            <p className="mb-4">Traditional paper-based format still available in some locations, being phased out gradually.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Traditional format</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Longer test duration</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Limited availability</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Being phased out</li>
            </ul>
          </div>
        </div>

        {/* Test Structure */}
        <div className="bg-[#1A365D]/50 rounded-xl p-8 mb-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Test Structure (Digital SAT)</h2>
          <div className="grid  xs:grid-cols-1 grid-cols-2  gap-8">
            <div className="text-center p-6 bg-[#0D2440]/50 rounded-lg border border-blue-500/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">Reading & Writing</div>
              <div className="text-lg text-gray-300 mb-4">64 minutes</div>
              <div className="space-y-2 text-sm text-left">
                <div className="flex justify-between">
                  <span>Module 1:</span>
                  <span className="text-gray-300">32 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Module 2:</span>
                  <span className="text-gray-300">32 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Questions:</span>
                  <span className="text-gray-300">54 total</span>
                </div>
              </div>
            </div>
            <div className="text-center p-6 bg-[#0D2440]/50 rounded-lg border border-blue-500/10">
              <div className="text-3xl font-bold text-green-400 mb-2">Math</div>
              <div className="text-lg text-gray-300 mb-4">70 minutes</div>
              <div className="space-y-2 text-sm text-left">
                <div className="flex justify-between">
                  <span>Module 1:</span>
                  <span className="text-gray-300">35 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Module 2:</span>
                  <span className="text-gray-300">35 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Questions:</span>
                  <span className="text-gray-300">44 total</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scoring System */}
        <div className="bg-[#1A365D]/50 rounded-xl p-8 mb-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Scoring System</h2>
          <div className="grid  xs:grid-cols-1 grid-cols-2  gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">Score Range: 400-1600</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-[#0D2440]/50 rounded-lg">
                  <span className="font-semibold">Reading & Writing</span>
                  <span className="text-sm text-gray-300">200-800</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#0D2440]/50 rounded-lg">
                  <span className="font-semibold">Math</span>
                  <span className="text-sm text-gray-300">200-800</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#0D2440]/50 rounded-lg border border-blue-500/20">
                  <span className="font-semibold text-blue-400">Total Score</span>
                  <span className="text-sm text-blue-300">400-1600</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Score Percentiles</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>1400+: 95th percentile (top 5%)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>1200+: 75th percentile (top 25%)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>1050: 50th percentile (median)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Results available in 2-4 weeks</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Scores valid for 5 years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subject Areas */}
        <div className="bg-[#1A365D]/50 rounded-xl p-8 mb-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Subject Areas</h2>
          <div className="grid  xs:grid-cols-1 grid-cols-2  gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Reading & Writing</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Reading Comprehension</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Vocabulary in Context</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Command of Evidence</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Grammar and Usage</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Rhetorical Synthesis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">Math</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Algebra</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Advanced Math</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Problem-Solving</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Geometry & Trigonometry</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Statistics & Probability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[#1A365D]/50 rounded-xl p-8 mb-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Key Features</h2>
          <div className="grid  xs:grid-cols-1 grid-cols-3  gap-6">
            <div className="text-center p-6 bg-[#0D2440]/50 rounded-lg border border-blue-500/10">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">Adaptive Testing</h3>
              <p className="text-sm text-gray-300">Questions adapt to your performance level</p>
            </div>
            <div className="text-center p-6 bg-[#0D2440]/50 rounded-lg border border-blue-500/10">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Shorter Duration</h3>
              <p className="text-sm text-gray-300">2h 14m vs previous 3+ hours</p>
            </div>
            <div className="text-center p-6 bg-[#0D2440]/50 rounded-lg border border-blue-500/10">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2 text-orange-400">Built-in Tools</h3>
              <p className="text-sm text-gray-300">Calculator and reference sheet provided</p>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="bg-[#1A365D]/50 rounded-xl p-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Quick Facts</h2>
          <div className="grid  xs:grid-cols-1 grid-cols-2  lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">2h 14m</div>
              <div className="text-sm text-gray-300">Total Test Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">7 times</div>
              <div className="text-sm text-gray-300">Tests per year</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">1.7M+</div>
              <div className="text-sm text-gray-300">Annual test takers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">$60</div>
              <div className="text-sm text-gray-300">Test fee (US)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAT;