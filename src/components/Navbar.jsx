"use client";
import { useState } from "react";
import { Button } from './ui/button';
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/nextjs";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#d8b4fe]/80 backdrop-blur text-black shadow-md">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Section - Logo & Desktop Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  RTO-
                </span>
                <span className="text-foreground">Mentor</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 pt-1 text-white">
              <Link
                href="/about"
                className="text-base font-medium text-gray-700 hover:text-gray-900"
              >
                About Us
              </Link>
              <Link
                href="/mock-test"
                className="text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Mock Tests
              </Link>
              <Link
                href="/services"
                className="text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Informational Services
              </Link>
              {/* <Link
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Dashboard
              </Link> */}
            </div>
          </div>

          {/* Right Section - Search & Actions */}
          <div className="flex items-center gap-2 pl-2">

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <div className="hidden md:flex items-center gap-2">
                <SignInButton>
                  <Button variant="outline" className="cursor-pointer">Login</Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="cursor-pointer">Sign up</Button>
                </SignUpButton>
              </div>
            </SignedOut>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-foreground"
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
          <div className="md:hidden py-4 space-y-4 border-t">
            {/* Search Bar (Mobile) */}
            {/* <div className="px-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 w-full focus-visible:ring-1"
                />
              </div>
            </div> */}

            {/* Mobile Navigation Links */}
            <div className="space-y-2 px-4">
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/mock-test"
                className="block px-3 py-2 text-base font-medium text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mock Tests
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Informational Services
              </Link>
              {/* <Link
                href="/dashboard"
                className="block px-3 py-2 text-base font-medium text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link> */}
            </div>

            {/* Mobile Auth Buttons */}
            <SignedOut>
            <div className="px-4 flex flex-col gap-2">
              <SignInButton>
              <Button variant="outline" className="w-full cursor-pointer">
                Login
              </Button>
              </SignInButton>
              <SignUpButton>
              <Button className="w-full cursor-pointer">Sign up</Button>
              </SignUpButton>
            </div>
            </SignedOut>
          </div>
        )}
      </div>
    </nav>
  );
}