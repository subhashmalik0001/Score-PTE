import React, { useState } from "react";
import speak from "../assets/image 4.png";
import write from "../assets/image 9.png";
import read from "../assets/image 5.png";
import listen from "../assets/image 8.png";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { CheckCircle2, Clock, Sparkles, Check, Target } from "lucide-react";

const categories = [
  { title: "Speaking", img: speak },
  { title: "Writing", img: write },
  { title: "Reading", img: read },
  { title: "Listening", img: listen },
];

const testData = {
  "About PTE": {
    title: "PTE: Pearson Test of English - Complete Guide",
    content: (
      <div className="h-96 bg-gray-50 py-4 overflow-y-auto">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">PTE: Pearson Test of English</h1>
            <p className="text-base text-gray-600">Complete Guide to PTE Exam Types</p>
          </div>

          <div className="space-y-6">
            {/* First Image - PTE Introduction and Academic */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-3">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">PTE Overview & Academic Exam</h2>
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nvF1zmuaUPFlk3hhEVMvEYjp4tiUyZ.png"
                    alt="PTE Introduction and Academic Exam Information"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Second Image - PTE Academic UKVI and PTE Home */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-3">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">PTE Academic UKVI & PTE Home</h2>
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iIIOrvy8LYfLi0Atk72zxoBe73zwar.png"
                    alt="PTE Academic UKVI and PTE Home Exam Information"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Third Image - PTE Core */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-3">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">PTE Core (2024 Launch)</h2>
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-txFqCm2kN5kf2FhIrrfyed3OKCQZlU.png"
                    alt="PTE Core Exam Information"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  
  "PTE Academic": {
    title: "PTE Academic - Pearson Test of English Academic",
    content: (
      <div className="max-w-4xl mx-auto p-6 bg-white">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">What is PTE Academic?</h1>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>PTE Academic (Pearson Test of English Academic)</strong> is a fully computerized English proficiency
            test accepted for study, work, and migration across countries like Australia, Canada, the UK, and more. It
            evaluates your real-world English skills in academic and professional contexts.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-gray-700 font-medium">•</span>
              <div>
                <span className="font-semibold text-gray-900">Duration:</span>
                <span className="text-gray-700 ml-1">
                  Approximately <strong>2 hours</strong>
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-gray-700 font-medium">•</span>
              <div>
                <span className="font-semibold text-gray-900">Format:</span>
                <span className="text-gray-700 ml-1">Computer-based with a microphone and headset</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-gray-700 font-medium">•</span>
              <div>
                <span className="font-semibold text-gray-900">Scoring:</span>
                <span className="text-gray-700 ml-1">Fully AI-automated scoring system (10–90 scale)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Exam Sections Overview */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">PTE Exam Sections Overview</h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            PTE Academic is divided into <strong>three integrated parts</strong> (not four). Each part evaluates multiple
            skills.
          </p>

          {/* Table */}
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    Module
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    Skills Tested
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">1. Speaking & Writing</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Speaking + Writing</td>
                  <td className="px-6 py-4 text-sm text-gray-700">54–67 minutes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">2. Reading</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Reading</td>
                  <td className="px-6 py-4 text-sm text-gray-700">29–30 minutes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">3. Listening</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Listening</td>
                  <td className="px-6 py-4 text-sm text-gray-700">30–43 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Total Duration */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-900">
                <span className="font-semibold">Total Duration:</span> ~2 hours (including optional introduction and
                breaks)
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "PTE Core": {
    title: "TOEFL - Test of English as a Foreign Language",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">English Proficiency</Badge>
          <Badge variant="outline">Internet-based</Badge>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">About TOEFL</h3>
          <p className="text-muted-foreground mb-4">
            The Test of English as a Foreign Language (TOEFL) is a standardized test to measure the English language
            ability of non-native speakers wishing to enroll in English-speaking universities.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Test Sections</h4>
          <ul className="space-y-2 text-sm">
            <li>• Reading (54-72 minutes)</li>
            <li>• Listening (41-57 minutes)</li>
            <li>• Speaking (17 minutes)</li>
            <li>• Writing (50 minutes)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Duration</h4>
          <p className="text-sm text-muted-foreground">Approximately 3 hours</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Score Range</h4>
          <p className="text-sm text-muted-foreground">0-120 total score</p>
        </div>
      </div>
    ),
  },
  IELTS: {
    title: "IELTS - International English Language Testing System",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">English Proficiency</Badge>
          <Badge variant="outline">Paper & Computer</Badge>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">About IELTS</h3>
          <p className="text-muted-foreground mb-4">
            The International English Language Testing System (IELTS) is an international standardized test of English
            language proficiency for non-native English language speakers.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Test Sections</h4>
          <ul className="space-y-2 text-sm">
            <li>• Listening (30 minutes)</li>
            <li>• Reading (60 minutes)</li>
            <li>• Writing (60 minutes)</li>
            <li>• Speaking (11-14 minutes)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Duration</h4>
          <p className="text-sm text-muted-foreground">Approximately 2 hours and 45 minutes</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Score Range</h4>
          <p className="text-sm text-muted-foreground">0-9 band score</p>
        </div>
      </div>
    ),
  },
  SAT: {
    title: "SAT - Scholastic Assessment Test",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">Undergraduate</Badge>
          <Badge variant="outline">Paper & Digital</Badge>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">About SAT</h3>
          <p className="text-muted-foreground mb-4">
            The SAT is a standardized test widely used for college admissions in the United States. It measures
            literacy, numeracy and writing skills that are needed for academic success in college.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Test Sections</h4>
          <ul className="space-y-2 text-sm">
            <li>• Reading and Writing (64 minutes)</li>
            <li>• Math (70 minutes)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Duration</h4>
          <p className="text-sm text-muted-foreground">Approximately 2 hours and 14 minutes</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Score Range</h4>
          <p className="text-sm text-muted-foreground">400-1600 total score</p>
        </div>
      </div>
    ),
  },
  PTE: {
    title: "PTE Core - Canadian Immigration & Workplace Test",
    content: (
      <div className="max-w-3xl mx-auto p-6 md:p-8 lg:p-10 bg-white text-gray-800">
        <section className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            {"What is PTE Core?"}
          </h2>
          <p className="mb-4">
            <span className="font-bold">PTE Core</span> is a fully computer-based English language proficiency test by{" "}
            <span className="font-bold">Pearson</span>, designed for{" "}
            <span className="font-bold">Canadian economic immigration</span> and{" "}
            <span className="font-bold">workplace communication</span>.
          </p>
          <p className="mb-4">
            It evaluates your <span className="font-bold">real-world English skills</span> across{" "}
            <span className="font-bold">Speaking, Writing, Reading, and Listening</span> using everyday scenarios, not
            academic contexts.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold">Accepted by:</span> IRCC (Canada Immigration)
            </li>
            <li>
              <span className="font-bold">Purpose:</span> Canadian Permanent Residency, work, and citizenship
            </li>
            <li>
              <span className="font-bold">Delivery:</span> Pearson VUE centers worldwide
            </li>
            <li>
              <span className="font-bold">Scoring:</span> AI-based scoring system (10–90 scale, CLB aligned)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-gray-500" />
            {"Test Format Overview"}
          </h2>
          <p className="mb-6">
            PTE Core is divided into <span className="font-bold">three integrated parts</span>. Each part assesses
            multiple skills through real-life tasks.
          </p>

          <div className="border-t border-b border-gray-200">
            <div className="grid grid-cols-3 py-2 text-sm font-bold text-gray-600">
              <div>Module</div>
              <div>Skills Tested</div>
              <div className="text-right">Time</div>
            </div>
            <div className="grid grid-cols-3 py-2 border-t border-gray-200 text-sm">
              <div>1. Speaking & Writing</div>
              <div>Speaking + Writing</div>
              <div className="text-right">~50 mins</div>
            </div>
            <div className="grid grid-cols-3 py-2 border-t border-gray-200 text-sm">
              <div>2. Reading</div>
              <div>Reading + Writing</div>
              <div className="text-right">~30 mins</div>
            </div>
            <div className="grid grid-cols-3 py-2 border-t border-gray-200 text-sm">
              <div>3. Listening</div>
              <div>Listening + Reading + Writing</div>
              <div className="text-right">~30 mins</div>
            </div>
          </div>

          <div className="mt-6 text-lg font-bold flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-red-500" />
            {"Total Duration: ~2 hours (including breaks and intro)"}
          </div>
        </section>
      </div>
    ),
  },
};

const testButtons = ["About PTE", "PTE Academic", "PTE Core"];

const Page2 = () => {
  const [activeTest, setActiveTest] = useState("About PTE");

  return (
    <div className="w-full bg-white pt-20 px-6 flex flex-col items-center text-center min-h-screen">
      <h2 className="text-6xl sm:text-7xl font-light mb-20 tracking-tight leading-tight">
        <span className="bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent">Ready to</span>{' '}
        <span className="font-extrabold text-black">level </span>
        <span className="bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent">up ?</span>{' '}
      </h2>

      <div className="flex flex-wrap justify-center gap-16 mb-20">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.img} alt={item.title} className="h-28 w-28 object-contain" />
            <p className="mt-6 text-md sm:text-lg text-gray-700 tracking-wide font-light">
              {item.title}
            </p>
          </div>
        ))}
        
      </div>
      <h2 className="text-6xl sm:text-7xl font-light mb-20 tracking-tight leading-tight">
        <span className="text-red-600">PTE</span>{' '}
        <span className="text-red-600">Made </span>
        <span className="text-red-600">Easy</span>{' '}
      </h2>
      <p className="text-sm text-gray-500 mb-6 -mt-9">A basic insight into the test.</p>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row mb-20">
        <div className="w-full lg:w-80 mb-6 lg:mb-0 lg:min-h-full px-4">
          <Card className="w-full">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-col lg:space-y-2 lg:grid-cols-none lg:gap-0">
                {testButtons.map((test) => (
                  <Button
                    key={test}
                    variant="outline"
                    className={`justify-center lg:justify-start text-center lg:text-left h-12 rounded-full font-medium text-sm lg:text-base px-3 lg:px-4 ${
                      activeTest === test
                        ? test === "PTE"
                          ? "bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600"
                          : "bg-indigo-700 text-white border-indigo-700 hover:bg-indigo-800"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveTest(test)}
                  >
                    {test}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 px-4">
          <Card className="w-full mt-8">
            <CardHeader>
              <CardTitle className="text-xl lg:text-2xl xl:text-3xl">
                {testData[activeTest] && testData[activeTest].title}
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent className="pt-6">
              {testData[activeTest] && testData[activeTest].content}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center px-4 max-w-3xl pb-12">
        <p className="uppercase text-sm text-gray-500 tracking-widest mb-4">
          <span className="relative top-[-4px]">.</span> Polished   
          <span className="relative top-[-4px]">.</span> Prepared   
          <span className="relative top-[-4px]">.</span> PowerFull 
        </p>
        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-gray-200 via-gray-800 to-gray-700 bg-clip-text text-transparent">
            From Practice to Perfection
          </span>
        </h1>
      </div>
    </div>
    
  );
};

export default Page2;
