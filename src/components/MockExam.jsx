'use client'
    
import React, { useState, useEffect } from 'react';

const questions = [ 
  {
        question: "What does a red traffic light mean?",
        options: ["Stop", "Go", "Slow down", "Turn left"],
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
        options: ["observing traffic rules", "reacting to wrong behaviour of other drivers", "observing the dashboard gaiges"],
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
 ];

export default function MockExam() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    if (selected) return;

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          handleNext(); // auto move to next if time runs out
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [current, selected]);

  const handleOptionClick = (option) => {
    if (!selected) {
      if (option === questions[current].answer) {
        setScore(score + 1);
      }
      setSelected(true);
    }
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(false);
      setTimer(15); // reset timer
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md text-center mt-10">
        <h2 className="text-2xl font-bold mb-4">📋 Exam Finished!</h2>
        <p className="text-lg">
          You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4">🚦 RTO Mock Exam</h1>
      <h2 className="text-lg font-medium mb-2">
        Q{current + 1}: {questions[current].question}
      </h2>
      <p className="text-right mb-2 text-red-500 font-semibold">⏱️ Time left: {timer}s</p>

      <div className="space-y-2">
        {questions[current].options.map((option, index) => (
          <button
            key={index}
            className="w-full bg-gray-100 hover:bg-gray-200 text-left px-4 py-2 rounded"
            onClick={() => handleOptionClick(option)}
            disabled={selected}
          >
            {option}
          </button>
        ))}
      </div>

      {selected && (
        <button
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleNext}
        >
          Next ➡️
        </button>
      )}
    </div>
  );
}
