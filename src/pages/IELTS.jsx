import React from "react";
import Navbar from "../components/Navbar";

const IELTS = () => {
  return (
    <div className="min-h-screen bg-[#0D2440] text-[#E7F0FA]">
      <Navbar />
      
      <div className=" min-w-full px-[5%] xs:px-[2%]  ll px-[5%] xs:px-[2%]  ll px-[5%] xs:px-[2%]   mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            IELTS
          </h1>
          <p className="text-xl text-blue-300 mb-6">
            International English Language Testing System
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 border border-blue-500/30">
              English Proficiency
            </span>
            <span className="px-4 py-2 bg-green-600/20 rounded-full text-green-300 border border-green-500/30">
              Paper & Computer Based
            </span>
            <span className="px-4 py-2 bg-purple-600/20 rounded-full text-purple-300 border border-purple-500/30">
              Global Recognition
            </span>
          </div>
        </div>

        {/* About IELTS */}
        <div className="bg-[#1A365D]/50 rounded-xl p-8 mb-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">About IELTS</h2>
          <p className="text-lg leading-relaxed mb-4">
            The International English Language Testing System (IELTS) is the world's most popular English language proficiency test for higher education and global migration. Designed to assess the language ability of candidates who need to study or work where English is used as the language of communication.
          </p>
          <p className="text-lg leading-relaxed">
            IELTS is jointly owned by the British Council, IDP: IELTS Australia and Cambridge Assessment English, and was established in 1989. It is trusted by over 11,000 organizations worldwide.
          </p>
        </div>

        {/* Test Formats */}
        <div className="grid  xs:grid-cols-1 grid-cols-2 1 grid-cols-2 1 grid-cols-2 1 grid-cols-2  gap-8 mb-8">
          <div className="bg-[#1A365D]/50 rounded-xl p-6 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">IELTS Academic</h3>
            <p className="mb-4">For those applying for higher education or professional registration in an English-speaking environment.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>University admissions</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Professional registration</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Academic contexts</li>
            </ul>
          </div>
          
          <div className="bg-[#1A365D]/50 rounded-xl p-6 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-green-400">IELTS General Training</h3>
            <p className="mb-4">For those going to English-speaking countries for secondary education, work experience or training programs.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Immigration purposes</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Work experience</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Training programs</li>
            </ul>
          </div>
        </div>

        {/* Test Structure */}
        <div className="bg-[#1A365D]/50 rounded-xl p-8 mb-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Test Structure</h2>
          <div className="grid  xs:grid-cols-1 grid-cols-2 1 grid-cols-2 1 grid-cols-2 1 grid-cols-2  lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-[#0D2440]/50 rounded-lg border border-blue-500/10">
              <div className="text-2xl font-bold text-blue-400 mb-2">Listening</div>
              <div className="text-sm text-gray-300 mb-2">30 minutes</div>
              <div className="text-xs text-gray-400">4 sections, 40 questions</div>
            </div>
            <div className="text-center p-4 bg-[#0D2440]/50 rounded-lg border border-blue-500/10">
              <div className="text-2xl font-bold text-green-400 mb-2">Reading</div>
              <div className="text-sm text-gray-300 mb-2">60 minutes</div>
              <div className="text-xs text-gray-400">3 passages, 40 questions</div>
            </div>
            <div className="text-center p-4 bg-[#0D2440]/50 rounded-lg border border-blue-500/10">
              <div className="text-2xl font-bold text-purple-400 mb-2">Writing</div>
              <div className="text-sm text-gray-300 mb-2">60 minutes</div>
              <div className="text-xs text-gray-400">2 tasks</div>
            </div>
            <div className="text-center p-4 bg-[#0D2440]/50 rounded-lg border border-blue-500/10">
              <div className="text-2xl font-bold text-orange-400 mb-2">Speaking</div>
              <div className="text-sm text-gray-300 mb-2">11-14 minutes</div>
              <div className="text-xs text-gray-400">3 parts, face-to-face</div>
            </div>
          </div>
        </div>

        {/* Scoring System */}
        <div className="bg-[#1A365D]/50 rounded-xl p-8 mb-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Band Score System</h2>
          <div className="grid  xs:grid-cols-1 grid-cols-2 1 grid-cols-2 1 grid-cols-2  gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">Score Range: 0-9 Bands</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-[#0D2440]/50 rounded-lg">
                  <span className="font-semibold">Band 9</span>
                  <span className="text-sm text-gray-300">Expert User</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#0D2440]/50 rounded-lg">
                  <span className="font-semibold">Band 8</span>
                  <span className="text-sm text-gray-300">Very Good User</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#0D2440]/50 rounded-lg">
                  <span className="font-semibold">Band 7</span>
                  <span className="text-sm text-gray-300">Good User</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#0D2440]/50 rounded-lg">
                  <span className="font-semibold">Band 6</span>
                  <span className="text-sm text-gray-300">Competent User</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#0D2440]/50 rounded-lg">
                  <span className="font-semibold">Band 5</span>
                  <span className="text-sm text-gray-300">Modest User</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Score Calculation</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Each skill (Listening, Reading, Writing, Speaking) is scored individually</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Overall Band Score is the average of four skills</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Scores are reported in whole and half bands</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Results available 13 days after test date</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Valid for 2 years from test date</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[#1A365D]/50 rounded-xl p-8 mb-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Key Features</h2>
          <div className="grid  xs:grid-cols-1 grid-cols-3  gap-6">
            <div className="text-center p-6 bg-[#0D2440]/50 rounded-lg border border-blue-500/10">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">Global Recognition</h3>
              <p className="text-sm text-gray-300">Accepted by 11,000+ organizations in 140+ countries</p>
            </div>
            <div className="text-center p-6 bg-[#0D2440]/50 rounded-lg border border-blue-500/10">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Human Interaction</h3>
              <p className="text-sm text-gray-300">Speaking test with certified examiner</p>
            </div>
            <div className="text-center p-6 bg-[#0D2440]/50 rounded-lg border border-blue-500/10">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-orange-400">Flexible Options</h3>
              <p className="text-sm text-gray-300">Paper-based and computer-delivered tests</p>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="bg-[#1A365D]/50 rounded-xl p-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Quick Facts</h2>
          <div className="grid  xs:grid-cols-1 grid-cols-2 1 grid-cols-2  lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">2h 45m</div>
              <div className="text-sm text-gray-300">Total Test Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">48 times</div>
              <div className="text-sm text-gray-300">Tests per year</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">1,600+</div>
              <div className="text-sm text-gray-300">Test locations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">3M+</div>
              <div className="text-sm text-gray-300">Annual test takers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IELTS;