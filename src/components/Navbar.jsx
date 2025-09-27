"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from './ui/button';
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/nextjs";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Section - Logo & Desktop Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  RTO
                </span>
                <span className="text-white">-Mentor</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 pt-1">
              <Link
                href="/about"
                className={`text-base font-medium transition-colors duration-200 relative ${
                  isActive('/about') 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                About Us
                {isActive('/about') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                )}
              </Link>
              <Link
                href="/services"
                className={`text-base font-medium transition-colors duration-200 relative ${
                  isActive('/services') 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Informational Services
                {isActive('/services') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                )}
              </Link>
            </div>
          </div>

          {/* Right Section - Search & Actions */}
          <div className="flex items-center gap-3 pl-2">
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/" 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8"
                  }
                }}
              />
            </SignedIn>
            <SignedOut>
              <div className="hidden md:flex items-center gap-3">
                <SignInButton>
                  <Button 
                    variant="outline" 
                    className="cursor-pointer bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all duration-200"
                  >
                    Login
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700 transition-all duration-200">
                    Sign up
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-800 bg-gray-900/95 backdrop-blur-sm">
            {/* Mobile Navigation Links */}
            <div className="space-y-2 px-4">
              <Link
                href="/about"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  isActive('/about')
                    ? 'text-blue-400 bg-blue-400/10 border-l-2 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  isActive('/services')
                    ? 'text-blue-400 bg-blue-400/10 border-l-2 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Informational Services
              </Link>
            </div>

            {/* Mobile Auth Buttons */}
            <SignedOut>
              <div className="px-4 flex flex-col gap-3">
                <SignInButton>
                  <Button 
                    variant="outline" 
                    className="w-full cursor-pointer bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all duration-200"
                  >
                    Login
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700 transition-all duration-200">
                    Sign up
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        )}
      </div>
    </nav>
  );
}