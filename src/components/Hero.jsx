'use client'

import Link from 'next/link';
import React from 'react';

const RTOMentorBackground = () => {
  const handleStartLearning = () => {
    alert('Welcome to RTO Mentor! Your journey to master driving begins now!');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700">
      <style jsx>{`
        @keyframes moveRight {
          from {
            transform: translateX(-150px);
          }
          to {
            transform: translateX(calc(100vw + 150px));
          }
        }

        @keyframes moveLeft {
          from {
            transform: translateX(calc(100vw + 150px));
          }
          to {
            transform: translateX(-150px);
          }
        }

        @keyframes roadMove {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(60px);
          }
        }

        @keyframes glow {
          from {
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
          }
          to {
            filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.8));
          }
        }

        .road-lines {
          position: absolute;
          width: 100%;
          height: 2px;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 20px,
            rgba(255, 255, 255, 0.3) 20px,
            rgba(255, 255, 255, 0.3) 40px
          );
          animation: roadMove 3s infinite linear;
        }

        .vehicle {
          position: absolute;
          opacity: 0.7;
          z-index: 5;
          transition: opacity 0.3s ease;
        }

        .vehicle:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .car {
          width: 80px;
          height: 40px;
          background: #ff6b6b;
          border-radius: 20px 20px 8px 8px;
          position: relative;
          animation: moveRight 20s infinite linear;
        }

        .car::before {
          content: '';
          position: absolute;
          top: -15px;
          left: 15px;
          width: 50px;
          height: 20px;
          background: #4ecdc4;
          border-radius: 10px 10px 5px 5px;
        }

        .car::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 10px;
          width: 12px;
          height: 12px;
          background: #333;
          border-radius: 50%;
          box-shadow: 50px 0 0 #333;
        }

        .motorcycle {
          width: 60px;
          height: 25px;
          background: #45b7d1;
          border-radius: 15px;
          position: relative;
          animation: moveRight 15s infinite linear;
        }

        .motorcycle::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 20px;
          width: 20px;
          height: 12px;
          background: #96ceb4;
          border-radius: 8px;
        }

        .motorcycle::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 8px;
          width: 8px;
          height: 8px;
          background: #333;
          border-radius: 50%;
          box-shadow: 35px 0 0 #333;
        }

        .truck {
          width: 100px;
          height: 50px;
          background: #feca57;
          border-radius: 8px;
          position: relative;
          animation: moveRight 25s infinite linear;
        }

        .truck::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 60px;
          width: 40px;
          height: 25px;
          background: #ff9ff3;
          border-radius: 5px;
        }

        .truck::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 15px;
          width: 15px;
          height: 15px;
          background: #333;
          border-radius: 50%;
          box-shadow: 55px 0 0 #333;
        }

        .reverse {
          animation-name: moveLeft;
        }

        .traffic-light {
          position: absolute;
          width: 25px;
          height: 70px;
          background: #2c3e50;
          border-radius: 12px;
          opacity: 0.8;
          z-index: 10;
          border: 2px solid #34495e;
        }

        .traffic-light::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 6px;
          width: 13px;
          height: 13px;
          background: #e74c3c;
          border-radius: 50%;
          box-shadow: 
            0 22px 0 #f39c12,
            0 44px 0 #27ae60;
        }

        .logo-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
      `}</style>

      {/* Background Container */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        {/* Road lines */}
        <div className="road-lines" style={{ top: '15%' }}></div>
        <div className="road-lines" style={{ top: '35%' }}></div>
        <div className="road-lines" style={{ top: '55%' }}></div>
        <div className="road-lines" style={{ top: '75%' }}></div>

        {/* Static Traffic Lights */}
        <div className="traffic-light" style={{ top: '10%', left: '10%' }}></div>
        <div className="traffic-light" style={{ top: '25%', left: '80%' }}></div>
        <div className="traffic-light" style={{ top: '45%', left: '15%' }}></div>
        <div className="traffic-light" style={{ top: '65%', left: '75%' }}></div>
        <div className="traffic-light" style={{ top: '80%', left: '25%' }}></div>

        {/* Static Vehicles */}
        <div className="vehicle car" style={{ top: '18%', animationDelay: '0s' }}></div>
        <div className="vehicle motorcycle" style={{ top: '28%', animationDelay: 's' }}></div>
        <div className="vehicle truck" style={{ top: '38%', animationDelay: 's' }}></div>
        <div className="vehicle car reverse" style={{ top: '48%', animationDelay: 's' }}></div>
        <div className="vehicle motorcycle" style={{ top: '58%', animationDelay: 's' }}></div>
        <div className="vehicle car" style={{ top: '68%', animationDelay: 's' }}></div>
        <div className="vehicle truck reverse" style={{ top: '78%', animationDelay: 's' }}></div>
        <div className="vehicle motorcycle reverse" style={{ top: '88%', animationDelay: 's' }}></div>
        
        {/* Additional vehicles for continuous movement */}
        <div className="vehicle car" style={{ top: '22%', animationDelay: 's' }}></div>
        <div className="vehicle motorcycle reverse" style={{ top: '32%', animationDelay: 's' }}></div>
        <div className="vehicle truck" style={{ top: '42%', animationDelay: 's' }}></div>
        <div className="vehicle car reverse" style={{ top: '52%', animationDelay: 's' }}></div>
      </div>

      {/* Main Content */}
<div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-5">
  {/* Heading with Sleek Blue Gradient */}
  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
    RTO MENTOR
  </h1>

  {/* Subheading with Slate tone */}
 <p className="text-xl md:text-2xl mb-8 text-slate-200 drop-shadow-md">
  <span className="block">Learn smarter with interactive quizzes, road signs, and mock tests.</span>
  <span className="block">Your all-in-one guide to passing the RTO learner's license exam.</span>
</p>


  {/* CTA Button with Blue Glow */}
  <Link href={'/home'}>
   <button
    // onClick={handleStartLearning}
    className="bg-gradient-to-r from-sky-600 to-blue-600  text-white font-semibold py-4 px-10 rounded-full text-lg uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-500/40 hover:shadow-lg"
  >
    Start Your Journey
  </button>
  </Link>
 
</div>


    </div>
  );
};

export default RTOMentorBackground;