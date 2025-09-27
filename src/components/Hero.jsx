'use client'

import Link from 'next/link';
import React from 'react';
import { BackgroundLines } from './ui/background-lines';
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const RTOMentorBackground = () => {

  const { isSignedIn, isLoaded } = useUser(); // isLoaded ensures user info is ready
  const router = useRouter();

   const handleClick = () => {
    if (!isLoaded) return; // wait until Clerk finishes loading

    if (!isSignedIn) {
      router.push("/sign-in"); // redirect to sign-up page
    } else {
      router.push("/learning-dashboard"); // or wherever learning starts
    }
  };
  return (

    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen relative overflow-hidden bg-gray-900">
  <div className="flex flex-col items-center">
      {/* Main Content */}
      <div className="relative mt-10 z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-6 animate-fade-in">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
            RTO MENTOR
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full"></div>
        </div>

        {/* Description */}
        <div className="max-w-2xl mb-8">
          <p className="text-xl md:text-2xl mb-4 text-gray-200 leading-relaxed">
            Master your driving skills with interactive learning
          </p>
          <p className="text-lg text-gray-400">
            Interactive quizzes • Road signs • Mock tests • Expert guidance
          </p>
        </div>

        {/* CTA Button */}
        <button
  onClick={handleClick}
  className="relative overflow-hidden font-semibold py-3 px-8 rounded-full text-lg bg-gradient-to-r from-blue-600 to-cyan-800 text-white shadow-md transition-all duration-300 ease-in-out hover:opacity-90"
>
  Start Learning Today
</button>

        {/* Feature highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full mx-auto mb-3 flex items-center justify-center border border-gray-700">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="font-semibold text-gray-200 mb-2">Study Materials</h3>
            <p className="text-sm text-gray-400">Comprehensive guides and resources</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full mx-auto mb-3 flex items-center justify-center border border-gray-700">
              <span className="text-2xl">🚗</span>
            </div>
            <h3 className="font-semibold text-gray-200 mb-2">Practice Tests</h3>
            <p className="text-sm text-gray-400">Practice with exam simulations </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full mx-auto mb-3 flex items-center justify-center border border-gray-700">
              <span className="text-2xl">📘</span>
            </div>
            <h3 className="font-semibold text-gray-200 mb-2">Mock Exam</h3>
<p className="text-sm text-gray-400">Simulate the full test environment</p>
          </div>
        </div>
      </div>

      
    </div>
    </BackgroundLines>
  );
};

export default RTOMentorBackground;