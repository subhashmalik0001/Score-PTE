import React, { useState } from "react";
import speak from "../assets/image 4.png";
import write from "../assets/image 9.png";
import read from "../assets/image 5.png";
import listen from "../assets/image 8.png";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { CheckCircle2, Clock, Sparkles, Check, Target, CheckCircle, BarChart3, BookOpen, Headphones } from "lucide-react";

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
      <div className="h-[700px] bg-gray-50 py-4 overflow-y-auto">
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
  "PTE Core": {
    title: "PTE Core - Canadian Immigration & Workplace Test",
    content: (
      <div className="h-[700px] bg-gray-50 py-4 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6 px-4">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-900">What is PTE Core?</h1>
            </div>
          </div>

          {/* PTE Core Overview */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-base text-gray-700">
                  <span className="font-semibold">PTE Core</span> is a fully computer-based English language proficiency
                  test by <span className="font-semibold">Pearson</span>, designed for{" "}
                  <span className="font-semibold">Canadian economic immigration and workplace communication</span>.
                </p>

                <p className="text-base text-gray-700">
                  It evaluates your <span className="font-semibold">real-world English skills</span> across{" "}
                  <span className="font-semibold">Speaking, Writing, Reading, and Listening</span> using everyday
                  scenarios, not academic contexts.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900">• Accepted by:</span>
                      <span className="text-gray-700">IRCC (Canada Immigration)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900">• Purpose:</span>
                      <span className="text-gray-700">Canadian Permanent Residency, work, and citizenship</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900">• Delivery:</span>
                      <span className="text-gray-700">Pearson VUE centers worldwide</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900">• Scoring:</span>
                      <span className="text-gray-700">AI-based scoring system (10–90 scale, CLB aligned)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Test Format Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="w-5 h-5" />
                Test Format Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                PTE Core is divided into <span className="font-semibold">three integrated parts</span>. Each part assesses
                multiple skills through real-life tasks.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 text-sm">Module</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 text-sm">Skills Tested</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 text-sm">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">1. Speaking & Writing</td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Speaking + Writing</td>
                      <td className="py-2 px-3 text-gray-700 text-sm">~50 mins</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">2. Reading</td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Reading + Writing</td>
                      <td className="py-2 px-3 text-gray-700 text-sm">~30 mins</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">3. Listening</td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Listening + Reading + Writing</td>
                      <td className="py-2 px-3 text-gray-700 text-sm">~30 mins</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center gap-2">
                  <span className="text-red-600 text-lg">🚀</span>
                  <span className="font-semibold text-red-800 text-sm">Total Duration:</span>
                  <span className="text-red-700 text-sm">~2 hours (including breaks and intro)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scoring System */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="w-5 h-5" />
                Scoring System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-gray-900 text-sm">• Score Range:</span>
                  <span className="text-gray-700 text-sm">
                    10 to 90 (aligned with <span className="font-semibold">Canadian Language Benchmarks - CLB</span>)
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-gray-900 text-sm">• Components:</span>
                  <div className="ml-4 mt-1 space-y-1">
                    <div className="text-gray-700 text-sm">
                      • <span className="font-medium">Overall Score</span>
                    </div>
                    <div className="text-gray-700 text-sm">
                      • <span className="font-medium">Communicative Skills:</span> Listening, Reading, Speaking, Writing
                    </div>
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-gray-900 text-sm">• Scoring Method:</span>
                  <div className="ml-4 mt-1 space-y-1">
                    <div className="text-gray-700 text-sm">• AI-driven, 100% automated and unbiased</div>
                    <div className="text-gray-700 text-sm">
                      • No negative marking (except in specific multiple-answer questions)
                    </div>
                    <div className="text-gray-700 text-sm">• Partial credit awarded for partially correct responses</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reading Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookOpen className="w-5 h-5" />
                2. Reading (~30 minutes)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 text-sm">Task</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 text-sm">Skills Tested</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 text-sm">What You Do</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">Reading & Writing: Fill in the Blanks</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Reading + Writing
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Drag words to fill gaps in a text</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">Multiple Choice (Single Answer)</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Reading
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Choose one correct response</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">Re-order Paragraphs</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Reading
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Arrange text boxes in correct order</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">Fill in the Blanks (Drag & Drop)</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Reading
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-sm">Drag correct words to complete the passage</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">Multiple Choice (Multiple Answers)</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Reading
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Select all correct answers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Listening Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Headphones className="w-5 h-5" />
                3. Listening (~30 minutes)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 text-sm">Task</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 text-sm">Skills Tested</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 text-sm">What You Do</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">Summarize Spoken Text</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Listening + Writing
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Write a 50–70 word summary of an audio recording</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">Multiple Choice (Multiple)</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Listening
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Choose all correct responses from an audio clip</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">Fill in the Blanks</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Listening + Writing
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Type missing words from the recording</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">Highlight Correct Summary</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Listening + Reading
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Pick the summary that matches the audio</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">Multiple Choice (Single)</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Listening
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Choose one best answer based on an audio clip</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">Select Missing Word</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Listening
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Predict the final word in an audio</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">Highlight Incorrect Words</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Listening + Reading
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Spot and select incorrect words in the transcript</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-medium text-gray-900 text-sm">Write from Dictation</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Listening + Writing
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-gray-700 text-sm">Type exactly what you hear in a sentence</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center py-4">
            <p className="text-gray-600 text-sm">
              This comprehensive overview covers all aspects of the PTE Core test format and requirements.
            </p>
          </div>
        </div>
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
