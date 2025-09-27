import React from "react";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconBrain,
  IconTrophy,
  IconBook,
} from "@tabler/icons-react";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function LearningDashboard() {

  const user = await currentUser();

   if (!user) {
    redirect("/sign-in");   
  }

  return (
    <div className="bg-gray-900 h-screen overflow-hidden flex flex-col pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto flex-1 flex flex-col">
        {/* Header Section - Compact */}
        <div className="text-center mb-8">
          <h1 className="text-3xl p-4 md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Learning Dashboard
          </h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Master your RTO exam with our comprehensive learning tools and practice materials
          </p>
        </div>

        {/* Cards Container - Uses remaining space */}
        <div className="flex-1 flex flex-col gap-4">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
            {/* Practice Tests - Large Card */}
            <Link href="/practice-test" className="md:col-span-2 group">
              <div className="bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 rounded-xl p-4 h-full transition-all duration-300 hover:bg-gray-800/70 group-hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <IconClipboardCopy className="h-5 w-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">Practice Tests</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    Test your knowledge with our comprehensive practice questions designed to simulate real RTO exams.
                  </p>
                  <div className="flex items-center justify-center bg-blue-500/20 rounded-lg h-12">
                    <IconClipboardCopy className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Question Bank */}
            <Link href="/question-bank" className="group">
              <div className="bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 rounded-xl p-4 h-full transition-all duration-300 hover:bg-gray-800/70 group-hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <IconBook className="h-5 w-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-white">Question Bank</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    Access our extensive collection of RTO questions organized by topics.
                  </p>
                  <div className="flex items-center justify-center bg-purple-500/20 rounded-lg h-12">
                    <IconBook className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
            {/* Mock Examinations */}
            <Link href="/mock-test" className="group">
              <div className="bg-gray-800/50 border border-gray-700 hover:border-green-500/50 rounded-xl p-4 h-full transition-all duration-300 hover:bg-gray-800/70 group-hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10"></div>
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <IconTrophy className="h-5 w-5 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">Mock Exams</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    Experience real exam conditions with timed tests and analysis.
                  </p>
                  <div className="flex items-center justify-center bg-green-500/20 rounded-lg h-12">
                    <IconTrophy className="h-8 w-8 text-green-400" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Symbol Preparation */}
            <Link href="/symbol-preparation" className="md:col-span-2 group">
              <div className="bg-gray-800/50 border border-gray-700 hover:border-yellow-500/50 rounded-xl p-4 h-full transition-all duration-300 hover:bg-gray-800/70 group-hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10"></div>
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <IconSignature className="h-5 w-5 text-yellow-400" />
                    <h3 className="text-lg font-semibold text-white">Symbol Preparation</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    Master traffic symbols and road signs with interactive learning tools and visual guides.
                  </p>
                  <div className="flex items-center justify-center bg-yellow-500/20 rounded-lg h-12">
                    <IconSignature className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}