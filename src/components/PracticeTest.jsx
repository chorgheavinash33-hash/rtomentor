'use client'

import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  RotateCcw,
  BookOpen,
  Target,
  TrendingUp,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  BarChart3,
  Award,
  Eye,
  EyeOff,
  Bookmark,
  BookmarkCheck,
  Flag,
  Home
} from 'lucide-react';

// Sample questions data - replace with your actual questions
const sampleQuestions = [
  {
    id: 1,
    question: "What does a red traffic light indicate?",
    options: ["Go", "Stop", "Caution", "Proceed with care"],
    answer: "Stop",
    explanation: "A red traffic light means vehicles must come to a complete stop before the stop line.",
    category: "Traffic Signals",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "What is the minimum age to obtain a learner's license for a car?",
    options: ["16 years", "17 years", "18 years", "21 years"],
    answer: "18 years",
    explanation: "The minimum age for obtaining a learner's license for cars (LMV) in India is 18 years.",
    category: "License Rules",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "What does this sign indicate? 🚫",
    options: ["No entry", "No parking", "No stopping", "Speed limit"],
    answer: "No entry",
    explanation: "This is a prohibition sign indicating that entry is not allowed.",
    category: "Traffic Signs",
    difficulty: "Medium"
  },
  {
    id: 4,
    question: "Maximum speed limit for cars on highways in India is:",
    options: ["80 km/hr", "100 km/hr", "120 km/hr", "No limit"],
    answer: "100 km/hr",
    explanation: "The maximum speed limit for cars on highways in India is 100 km/hr unless otherwise specified.",
    category: "Speed Limits",
    difficulty: "Medium"
  },
  {
    id: 5,
    question: "What should you do when an ambulance approaches from behind?",
    options: ["Speed up", "Give way immediately", "Ignore it", "Sound horn"],
    answer: "Give way immediately",
    explanation: "Emergency vehicles like ambulances must be given immediate right of way to save lives.",
    category: "Road Safety",
    difficulty: "Easy"
  }
];

export default function EnhancedPracticeTest() {
  const [testState, setTestState] = useState('setup'); // setup, active, paused, completed, review
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes default
  const [testStartTime, setTestStartTime] = useState(null);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState(new Set());
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [showExplanation, setShowExplanation] = useState(false);
  const [testSettings, setTestSettings] = useState({
    duration: 30, // minutes
    questionCount: 20,
    showResults: true,
    randomOrder: false
  });
  
  const timerRef = useRef(null);
  const [questions, setQuestions] = useState([]);
  
  // Initialize questions based on settings
  useEffect(() => {
    let selectedQuestions = [...sampleQuestions];
    if (testSettings.randomOrder) {
      selectedQuestions = selectedQuestions.sort(() => Math.random() - 0.5);
    }
    selectedQuestions = selectedQuestions.slice(0, testSettings.questionCount);
    setQuestions(selectedQuestions);
  }, [testSettings]);

  // Timer logic
  useEffect(() => {
    if (testState === 'active' && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setTestState('completed');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [testState, timeRemaining]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTest = () => {
    setTestState('active');
    setTestStartTime(Date.now());
    setTimeRemaining(testSettings.duration * 60);
    setCurrentIndex(0);
    setUserAnswers({});
    setSelectedOption(null);
    setBookmarkedQuestions(new Set());
    setFlaggedQuestions(new Set());
  };

  const pauseTest = () => {
    setTestState('paused');
  };

  const resumeTest = () => {
    setTestState('active');
  };

  const handleAnswerSelect = (option) => {
    setSelectedOption(option);
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: option
    }));
  };

  const goToQuestion = (index) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
      setSelectedOption(userAnswers[index] || null);
      setShowExplanation(false);
    }
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      goToQuestion(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      goToQuestion(currentIndex - 1);
    }
  };

  const toggleBookmark = () => {
    setBookmarkedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentIndex)) {
        newSet.delete(currentIndex);
      } else {
        newSet.add(currentIndex);
      }
      return newSet;
    });
  };

  const toggleFlag = () => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentIndex)) {
        newSet.delete(currentIndex);
      } else {
        newSet.add(currentIndex);
      }
      return newSet;
    });
  };

  const submitTest = () => {
    setTestState('completed');
    clearInterval(timerRef.current);
  };

  const calculateResults = () => {
    let correct = 0;
    let attempted = 0;
    
    questions.forEach((question, index) => {
      if (userAnswers[index]) {
        attempted++;
        if (userAnswers[index] === question.answer) {
          correct++;
        }
      }
    });

    const percentage = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;
    const timeTaken = testStartTime ? Math.round((Date.now() - testStartTime) / 1000) : 0;

    return { correct, attempted, total: questions.length, percentage, timeTaken };
  };

  const resetTest = () => {
    setTestState('setup');
    setCurrentIndex(0);
    setUserAnswers({});
    setSelectedOption(null);
    setTimeRemaining(testSettings.duration * 60);
    setTestStartTime(null);
    setBookmarkedQuestions(new Set());
    setFlaggedQuestions(new Set());
    setShowExplanation(false);
  };

  const getQuestionStatus = (index) => {
    if (userAnswers[index]) {
      return userAnswers[index] === questions[index]?.answer ? 'correct' : 'incorrect';
    }
    return bookmarkedQuestions.has(index) ? 'bookmarked' : 'unanswered';
  };

  // Test Setup Screen
  if (testState === 'setup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 pt-8">
            <h1 className="text-4xl font-bold text-white mb-4 pt-8">🚗 RTO Practice Test</h1>
            <p className="text-gray-300 text-lg">Prepare for your learner's license exam</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Test Settings</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-white font-semibold mb-2">Test Duration (minutes)</label>
                <select 
                  value={testSettings.duration}
                  onChange={(e) => setTestSettings(prev => ({...prev, duration: parseInt(e.target.value)}))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
                >
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={60}>60 minutes</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Number of Questions</label>
                <select 
                  value={testSettings.questionCount}
                  onChange={(e) => setTestSettings(prev => ({...prev, questionCount: parseInt(e.target.value)}))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
                >
                  <option value={5}>5 questions (Quick)</option>
                  <option value={10}>10 questions</option>
                  <option value={20}>20 questions (Standard)</option>
                  <option value={30}>30 questions</option>
                  <option value={50}>50 questions (Full)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-6 mb-8">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="checkbox"
                  checked={testSettings.randomOrder}
                  onChange={(e) => setTestSettings(prev => ({...prev, randomOrder: e.target.checked}))}
                  className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
                <span className="text-white">Randomize question order</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="checkbox"
                  checked={testSettings.showResults}
                  onChange={(e) => setTestSettings(prev => ({...prev, showResults: e.target.checked}))}
                  className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
                <span className="text-white">Show detailed results</span>
              </label>
            </div>

            <div className="text-center">
              <button
                onClick={startTest}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg text-lg"
              >
                <Play className="w-6 h-6 mr-3" />
                Start Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Test Completion Screen
  if (testState === 'completed') {
    const results = calculateResults();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 p-4">
        <div className="max-w-4xl mx-auto pt-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4 pt-6">🎉 Test Completed!</h1>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-4 gap-6 text-center mb-8">
              <div className="bg-green-900/30 border border-green-700/50 rounded-xl p-6">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-400">{results.correct}</div>
                <div className="text-gray-300">Correct</div>
              </div>
              
              <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-6">
                <XCircle className="w-12 h-12 text-red-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-red-400">{results.attempted - results.correct}</div>
                <div className="text-gray-300">Incorrect</div>
              </div>
              
              <div className="bg-blue-900/30 border border-blue-700/50 rounded-xl p-6">
                <Target className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-400">{results.percentage}%</div>
                <div className="text-gray-300">Score</div>
              </div>
              
              <div className="bg-purple-900/30 border border-purple-700/50 rounded-xl p-6">
                <Clock className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-400">{formatTime(results.timeTaken)}</div>
                <div className="text-gray-300">Time Taken</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className={`text-3xl font-bold mb-4 ${results.percentage >= 60 ? 'text-green-400' : 'text-red-400'}`}>
                {results.percentage >= 60 ? '🎉 Congratulations! You Passed!' : '😞 Keep Practicing!'}
              </div>
              <p className="text-gray-300 text-lg">
                {results.percentage >= 60 
                  ? 'You have successfully passed the practice test. You\'re ready for the real exam!'
                  : 'Don\'t worry! Practice makes perfect. Review the explanations and try again.'
                }
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setTestState('review')}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Eye className="w-5 h-5 mr-2" />
                Review Answers
              </button>
              
              <button
                onClick={resetTest}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Take Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Loading questions...</div>;
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      {/* Header */}
      <div className="bg-black/30 border-b border-gray-700 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-bold text-white">Practice Test</h1>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className={`font-bold ${timeRemaining < 300 ? 'text-red-400' : 'text-white'}`}>
                {formatTime(timeRemaining)}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {testState === 'active' ? (
              <button
                onClick={pauseTest}
                className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-200"
              >
                <Pause className="w-4 h-4" />
                <span>Pause</span>
              </button>
            ) : (
              <button
                onClick={resumeTest}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Play className="w-4 h-4" />
                <span>Resume</span>
              </button>
            )}
            
            <button
              onClick={submitTest}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Submit Test
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-6xl mx-auto mt-4">
          <div className="bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-300 text-sm">Question {currentIndex + 1} of {questions.length}</span>
            <span className="text-gray-300 text-sm">{Math.round(progress)}% Complete</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Question Panel */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-2xl p-8">
              {/* Question Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {currentQuestion.category}
                    </span>
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      currentQuestion.difficulty === 'Easy' ? 'bg-green-600 text-white' :
                      currentQuestion.difficulty === 'Medium' ? 'bg-yellow-600 text-white' :
                      'bg-red-600 text-white'
                    }`}>
                      {currentQuestion.difficulty}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white leading-relaxed">
                    Q{currentIndex + 1}. {currentQuestion.question}
                  </h2>
                </div>

                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={toggleBookmark}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      bookmarkedQuestions.has(currentIndex) 
                        ? 'bg-yellow-600 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {bookmarkedQuestions.has(currentIndex) ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                  </button>
                  
                  <button
                    onClick={toggleFlag}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      flaggedQuestions.has(currentIndex) 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <Flag className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedOption === option;
                  const isCorrect = option === currentQuestion.answer;
                  const isIncorrect = testState === 'review' && isSelected && !isCorrect;
                  const showCorrect = testState === 'review' && isCorrect;

                  return (
                    <button
                      key={index}
                      onClick={() => testState === 'active' && handleAnswerSelect(option)}
                      disabled={testState !== 'active'}
                      className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                        showCorrect
                          ? 'bg-green-900/50 border-green-500 text-green-300'
                          : isIncorrect
                          ? 'bg-red-900/50 border-red-500 text-red-300'
                          : isSelected
                          ? 'bg-blue-900/50 border-blue-500 text-blue-300'
                          : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                          showCorrect
                            ? 'bg-green-500 text-white'
                            : isIncorrect
                            ? 'bg-red-500 text-white'
                            : isSelected
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-600 text-gray-300'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="flex-1">{option}</span>
                        {showCorrect && <CheckCircle className="w-5 h-5 text-green-400" />}
                        {isIncorrect && <XCircle className="w-5 h-5 text-red-400" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation (shown in review mode or when enabled) */}
              {(testState === 'review' || showExplanation) && (
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">Explanation</h4>
                      <p className="text-blue-200 leading-relaxed">{currentQuestion.explanation}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>

                <div className="flex space-x-3">
                  {testState === 'active' && !showExplanation && (
                    <button
                      onClick={() => setShowExplanation(true)}
                      className="flex items-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Eye className="w-5 h-5" />
                      <span>Show Explanation</span>
                    </button>
                  )}
                  
                  {showExplanation && (
                    <button
                      onClick={() => setShowExplanation(false)}
                      className="flex items-center space-x-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      <EyeOff className="w-5 h-5" />
                      <span>Hide Explanation</span>
                    </button>
                  )}
                </div>

                <button
                  onClick={goToNext}
                  disabled={currentIndex === questions.length - 1}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Question Navigator */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-2xl p-6 sticky top-4">
              <h3 className="text-lg font-bold text-white mb-4">Question Navigator</h3>
              
              <div className="grid grid-cols-5 gap-2 mb-6">
                {questions.map((_, index) => {
                  const status = getQuestionStatus(index);
                  return (
                    <button
                      key={index}
                      onClick={() => goToQuestion(index)}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all duration-200 text-sm ${
                        index === currentIndex
                          ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                          : status === 'correct'
                          ? 'bg-green-600 text-white'
                          : status === 'incorrect'
                          ? 'bg-red-600 text-white'
                          : status === 'bookmarked'
                          ? 'bg-yellow-600 text-white'
                          : userAnswers[index]
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span className="text-gray-300">Current/Answered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-600 rounded"></div>
                  <span className="text-gray-300">Correct</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-600 rounded"></div>
                  <span className="text-gray-300">Incorrect</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-yellow-600 rounded"></div>
                  <span className="text-gray-300">Bookmarked</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gray-700 rounded"></div>
                  <span className="text-gray-300">Not Attempted</span>
                </div>
              </div>

              {/* Test Stats */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Answered:</span>
                    <span className="text-white font-semibold">{Object.keys(userAnswers).length}/{questions.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Bookmarked:</span>
                    <span className="text-yellow-400 font-semibold">{bookmarkedQuestions.size}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Flagged:</span>
                    <span className="text-red-400 font-semibold">{flaggedQuestions.size}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              {testState === 'active' && (
                <div className="mt-6 pt-6 border-t border-gray-700 space-y-3">
                  <button
                    onClick={submitTest}
                    className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
                  >
                    Submit Test
                  </button>
                  
                  <button
                    onClick={resetTest}
                    className="w-full px-4 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Home className="w-4 h-4" />
                      <span>Back to Setup</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pause Overlay */}
      {testState === 'paused' && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 text-center max-w-md mx-4">
            <Pause className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Test Paused</h2>
            <p className="text-gray-300 mb-6">Your progress has been saved. Click resume to continue.</p>
            <div className="flex space-x-4 justify-center">
              <button
                onClick={resumeTest}
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Resume Test
              </button>
              <button
                onClick={resetTest}
                className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Exit Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}