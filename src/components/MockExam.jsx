'use client'
    
import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle, RotateCcw, Award, AlertTriangle } from 'lucide-react';

const questions = [ 
  {
    question: "What does a red traffic light mean?",
    options: ["Stop", "Go", "Slow down", "Turn left"],
    answer: "Stop"
  },
  {
    question: "While you reach a junction with limited visibility you should?",
    options: ["look both ways and move carefully", "look at right and move slowly", "move quickly"],
    answer: "look both ways and move carefully"
  },
  {
    question: "You are driving on a well-lit motorway at night, you must..?",
    options: ["use your headlight on high beam", "Always use your headlight in low beam", "always use hazard light"],
    answer: "Always use your headlight in low beam"
  },
  {
    question: "While driving, avoid..?",
    options: ["observing traffic rules", "reacting to wrong behaviour of other drivers", "observing the dashboard gauges"],
    answer: "reacting to wrong behaviour of other drivers"
  },
  {
    question: "When you approach a bridge you should..?",
    options: ["slow down and do not overtake", "beware of pedestrians", "switch on the headlights"],
    answer: "slow down and do not overtake"
  },
  {
    question: "When approaching a right hand curve, you should keep well to the left to...?",
    options: ["improve your view of the road", "avoid skid", "to pass the vehicle from behind"],
    answer: "improve your view of the road"
  },
  {
    question: "While you are approaching a staggered junction, you should...?",
    options: ["slow the vehicle", "maintain your speed and sound the horn", "use hazard warning light"],
    answer: "slow the vehicle"
  },
  {
    question: "At the Blind junction you must stop..?",
    options: ["only if there is traffic on the main road", "behind the line and move forward slowly as vision improves"],
    answer: "behind the line and move forward slowly as vision improves"
  },
  {
    question: "You entered a one-way in the opposite direction unknowingly, you should..?",
    options: ["reverse out of the road", "turn back carefully and drive away", "continue to the end of the road"],
    answer: "turn back carefully and drive away"
  },
  {
    question: "You are intending to turn left, you should position your vehicle at..?",
    options: ["the middle lane", "the left hand lane", "on the shoulder of the road"],
    answer: "the left hand lane"
  },
  {
    question: "When going straight ahead at a roundabout..?",
    options: ["indicate right signal and then left signal", "no signals is required", "use hazard warning lamp"],
    answer: "no signals is required"
  },
  {
    question: "You must not reverse your vehicle...?",
    options: ["on a busy road", "on a one way road", "all of the above"],
    answer: "all of the above"
  },
  {
    question: "Your vehicle pulls to one side while braking, you should..?",
    options: ["change the tyres around", "pump the pedal when braking", "consult your mechanic"],
    answer: "consult your mechanic"
  },
  {
    question: "Before turning, what should you do?",
    options: ["Slow down", "Give signal", "Stop", "Blow horn"],
    answer: "Give signal"
  },
  {
    question: "What is the maximum speed limit for motorcycles on expressways in India?",
    options: ["80 km/hr", "100 km/hr", "120 km/hr", "No speed limit"],
    answer: "80 km/hr"
  },
];

export default function DarkMockExam() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [examTimer, setExamTimer] = useState(15 * 60); // 15 minutes in seconds
  const [questionTimer, setQuestionTimer] = useState(30); // 30 seconds per question
  const [examStarted, setExamStarted] = useState(false);

  // Exam timer (15 minutes total)
  useEffect(() => {
    if (!examStarted || showResult) return;

    const examCountdown = setInterval(() => {
      setExamTimer((prev) => {
        if (prev === 1) {
          clearInterval(examCountdown);
          setShowResult(true);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(examCountdown);
  }, [examStarted, showResult]);

  // Question timer (30 seconds per question)
  useEffect(() => {
    if (!examStarted || selected || showResult) return;

    const questionCountdown = setInterval(() => {
      setQuestionTimer((prev) => {
        if (prev === 1) {
          clearInterval(questionCountdown);
          handleNext(); // auto move to next if time runs out
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(questionCountdown);
  }, [current, selected, examStarted, showResult]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startExam = () => {
    setExamStarted(true);
    setQuestionTimer(30);
  };

  const handleOptionClick = (option) => {
    if (!selected) {
      setSelected(option);
      if (option === questions[current].answer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setQuestionTimer(30); // reset question timer
    } else {
      setShowResult(true);
    }
  };

  const resetExam = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setExamTimer(15 * 60);
    setQuestionTimer(30);
    setExamStarted(false);
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return 'text-green-400';
    if (percentage >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreMessage = (percentage) => {
    if (percentage >= 80) return '🎉 Excellent! You\'re ready for the real exam!';
    if (percentage >= 60) return '👍 Good job! Keep practicing to improve.';
    return '📚 Keep studying. You need more practice.';
  };

  // Start Screen
  if (!examStarted) {
    return (
      <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 flex items-center justify-center p-4 overflow-hidden">
        <div className="max-w-2xl w-full mx-auto bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-2xl text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-3">🚦 RTO Mock Exam</h1>
          <p className="text-gray-300 mb-6">Test your knowledge with our comprehensive practice exam</p>
          
          <div className="bg-gray-700/50 rounded-xl p-4 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Exam Details</h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
              <div className="flex justify-between items-center">
                <span>Questions:</span>
                <span className="font-semibold text-blue-400">{questions.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Duration:</span>
                <span className="font-semibold text-blue-400">15 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Per Question:</span>
                <span className="font-semibold text-blue-400">30s</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Pass Score:</span>
                <span className="font-semibold text-blue-400">60%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-xl p-3 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold text-yellow-300 text-sm">Instructions</span>
            </div>
            <ul className="text-yellow-200 text-xs space-y-1">
              <li>• Each question has a 30-second time limit</li>
              <li>• Questions will auto-advance when time expires</li>
              <li>• Choose your answers carefully</li>
            </ul>
          </div>
          
          <button
            onClick={startExam}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            <Clock className="w-5 h-5 mr-2" />
            Start Exam
          </button>
        </div>
      </div>
    );
  }

  // Results Screen
  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    const isPassed = percentage >= 60;

    return (
      <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 flex items-center justify-center p-4 overflow-hidden">
        <div className="max-w-2xl w-full mx-auto bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-2xl text-center">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
            isPassed 
              ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
              : 'bg-gradient-to-r from-red-500 to-pink-500'
          }`}>
            {isPassed ? (
              <CheckCircle className="w-8 h-8 text-white" />
            ) : (
              <XCircle className="w-8 h-8 text-white" />
            )}
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">
            {isPassed ? '🎉 Exam Completed!' : '📚 Exam Completed!'}
          </h2>
          
          <p className={`text-lg mb-6 ${getScoreColor(percentage)}`}>
            {getScoreMessage(percentage)}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-900/30 border border-blue-700/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-400 mb-1">{score}</div>
              <div className="text-blue-300 text-sm">Correct</div>
            </div>
            
            <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-400 mb-1">{questions.length - score}</div>
              <div className="text-red-300 text-sm">Incorrect</div>
            </div>
            
            <div className="bg-purple-900/30 border border-purple-700/50 rounded-xl p-4">
              <div className={`text-2xl font-bold mb-1 ${getScoreColor(percentage)}`}>{percentage}%</div>
              <div className="text-purple-300 text-sm">Score</div>
            </div>
          </div>

          <div className="bg-gray-700/50 rounded-xl p-4 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Performance Summary</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Total Questions:</span>
                <span className="font-semibold text-white">{questions.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Correct Answers:</span>
                <span className="font-semibold text-green-400">{score}</span>
              </div>
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span className={`font-semibold ${getScoreColor(percentage)}`}>{percentage}%</span>
              </div>
              <div className="flex justify-between">
                <span>Result:</span>
                <span className={`font-semibold ${isPassed ? 'text-green-400' : 'text-red-400'}`}>
                  {isPassed ? 'PASSED' : 'FAILED'}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={resetExam}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Take Again
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 flex flex-col overflow-hidden">
      {/* Header with timers */}
      <div className="flex-shrink-0 p-4 pb-2">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-3">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-xl font-bold text-white">🚦 RTO Mock Exam</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-white font-semibold text-sm">Total: </span>
                  <span className={`font-bold text-sm ${examTimer < 180 ? 'text-red-400 animate-pulse' : 'text-blue-400'}`}>
                    {formatTime(examTimer)}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-orange-400" />
                  <span className="text-white font-semibold text-sm">Question: </span>
                  <span className={`font-bold text-sm ${questionTimer <= 5 ? 'text-red-400 animate-pulse' : 'text-orange-400'}`}>
                    {questionTimer}s
                  </span>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="bg-gray-700 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Question {current + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Question Container */}
      <div className="flex-1 px-4 pb-4 overflow-hidden">
        <div className="max-w-6xl mx-auto h-full">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-2xl h-full flex flex-col">
            <div className="flex-shrink-0 mb-4">
              <span className="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium mb-3">
                Question {current + 1}/{questions.length}
              </span>
              <h2 className="text-xl font-bold text-white leading-relaxed">
                {currentQuestion.question}
              </h2>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selected === option;
                  const isCorrect = option === currentQuestion.answer;
                  const showResult = selected !== null;

                  return (
                    <button
                      key={index}
                      className={`w-full p-3 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.01] ${
                        showResult
                          ? isCorrect
                            ? 'bg-green-900/40 border-green-500 text-green-200'
                            : isSelected && !isCorrect
                            ? 'bg-red-900/40 border-red-500 text-red-200'
                            : 'bg-gray-700/30 border-gray-600 text-gray-300'
                          : isSelected
                          ? 'bg-blue-900/40 border-blue-500 text-blue-200'
                          : 'bg-gray-700/30 border-gray-600 text-gray-200 hover:bg-gray-600/40 hover:border-gray-500'
                      }`}
                      onClick={() => handleOptionClick(option)}
                      disabled={selected !== null}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                          showResult
                            ? isCorrect
                              ? 'bg-green-500 text-white'
                              : isSelected && !isCorrect
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-600 text-gray-300'
                            : isSelected
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-600 text-gray-300'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="flex-1">{option}</span>
                        {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-green-400" />}
                        {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Section */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
                <div className="text-gray-400 text-sm">
                  {selected ? (
                    <span className="flex items-center space-x-2">
                      {selected === currentQuestion.answer ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-green-400">Correct!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-red-400" />
                          <span className="text-red-400">Incorrect. Answer: {currentQuestion.answer}</span>
                        </>
                      )}
                    </span>
                  ) : (
                    <span>Select an answer to continue</span>
                  )}
                </div>

                {selected && (
                  <button
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                    onClick={handleNext}
                  >
                    {current === questions.length - 1 ? 'Finish' : 'Next'} →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}