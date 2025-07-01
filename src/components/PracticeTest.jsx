'use client'

import React, { useState } from "react";
// import "./practice.css"; // Uncomment and customize your styles

const questions = [
    {
    question: "What does a red traffic light mean?",
    options: ["Stop", "Go", "Slow down", "Turn left"],
    answer: "Stop"
  },
  {
    question: "When approaching a right hand curve, you should keep well to the left to...?",
        options: ["improve your view of the road", "avoid skid", "to pass the vehicle from behind"],
        answer: "improve your view of the road"
  },
 {
    question: "What does a red traffic light mean?",
    options: ["Stop", "Go", "Slow down", "Turn left"],
    answer: "Stop"
  },
  {
    question: "What should you do before overtaking?",
    options: ["Honk", "Check mirrors and signal", "Speed up", "None"],
    answer: "Check mirrors and signal"
  },
  {
    question: "The mandatory signs giving orders are mostly in?",
    options: ["Red/Blue circles", "Red Triangle", "Basse triangle"],
    answer: "Red/Blue circles"
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
        question: "What does a red traffic light mean?",
        options: ["Stop", "Go", "Slow down", "Turn left"],
        answer: "Stop"
      },
      {
        question: "What should you do before overtaking?",
        options: ["Honk", "Check mirrors and signal", "Speed up", "None"],
        answer: "Check mirrors and signal"
      },
      {
        question: "The mandatory signs giving orders are mostly in?",
        options: ["Red/Blue circles", "Red Triangle", "Basse triangle"],
        answer: "Red/Blue circles"
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
        question: "When near a pedestrian crossing, as the pedestrians are waiting to cross the road, what should you do?",
        options: ["Slow down and proceed", "Stop and give way to pedestrians", "Honk and pass quickly"],
        answer: "Stop and give way to pedestrians"
      },
      {
        question: "A person driving a vehicle in a public place without a licence, is liable for:",
        options: ["Penalty only", "Penalty for the driver and the owner and/ or seizure of vehicle", "A warning"],
        answer: "Penalty for the driver and the owner and/ or seizure of vehicle"
      },
      {
        question: "While parking your vehicle on a downward gradient, in addition to the application of hand brake, the gear engaged should be:",
        options: ["Reverse gear", "Neutral gear", "Top gear"],
        answer: "Reverse gear"
      },
      {
        question: "When a vehicle is involved in an accident causing injury to any person, what should you do?",
        options: ["Drive away", "Report to the police and help the injured", "Ignore and continue"],
        answer: "Report to the police and help the injured"
      },
      {
        question: "On a road designated as one way, which of the following holds true?",
        options: ["No parking", "No overtaking", "No reverse driving"],
        answer: "No reverse driving"
      },
      {
        question: "When a blind person is crossing the road holding a white cane, the driver should:",
        options: ["Stop and give way", "Honk to warn", "Drive slowly"],
        answer: "Stop and give way"
      },
      {
        question: "What happens if you are carrying overload in goods carriages?",
        options: ["Reduced mileage", "Damage to vehicle", "Penalty and reduced braking efficiency"],
        answer: "Penalty and reduced braking efficiency"
      },
      {
        question: "When you reach an intersection where there is no signal light or a traffic police man, you should:",
        options: ["Stop and proceed with caution", "Speed up", "Honk continuously"],
        answer: "Stop and proceed with caution"
      },
      {
        question: "When is overtaking prohibited?",
        options: ["On narrow bridges", "On one-way roads", "During night"],
        answer: "On narrow bridges"
      },
      {
        question: "If the road is marked with broken white lines, you:",
        options: ["Can overtake if clear", "Must not overtake", "Should not park"],
        answer: "Can overtake if clear"
      },
      {
        question: "What is the meaning of a blinking red traffic light?",
        options: ["Proceed slowly", "Stop and proceed when safe", "Speed up"],
        answer: "Stop and proceed when safe"
      },
      {
        question: "Maximum permitted speed of a motor car on national highway is:",
        options: ["100 km/h", "80 km/h", "120 km/h"],
        answer: "100 km/h"
      },
      {
        question: "Where is the number of passengers permitted to be taken in a private vehicle recorded?",
        options: ["Registration certificate", "Insurance certificate", "Permit"],
        answer: "Registration certificate"
      },
      {
        question: "Before starting the engine of a vehicle, you should:",
        options: ["Check oil and fuel", "Check for leaks", "Check brakes and mirrors"],
        answer: "Check brakes and mirrors"
      },
      {
        question: "The maximum permissible speed of a light motor vehicle is:",
        options: ["60 km/h", "80 km/h", "100 km/h"],
        answer: "80 km/h"
      },
      {
        question: "According to Section 113 of the Motor Vehicle Act 1988, a driver should not drive a vehicle:",
        options: ["Without insurance", "Without pollution certificate", "Carrying goods exceeding weight limit"],
        answer: "Carrying goods exceeding weight limit"
      },
      {
        question: "You are behind a bus that has stopped to pick up or drop off passengers. What should you do?",
        options: ["Overtake quickly", "Wait patiently behind", "Honk continuously"],
        answer: "Wait patiently behind"
      },
      {
        question: "The middle lane is for:",
        options: ["Fast vehicles", "Overtaking", "Turning right"],
        answer: "Overtaking"
      },
      {
        question: "A flashing yellow signal is used when:",
        options: ["There is a hazard ahead", "It is a pedestrian zone", "There is no power"],
        answer: "There is a hazard ahead"
      },
      {
        question: "Where, out of the following, are you allowed to park?",
        options: ["On footpath", "In marked parking bays", "Near hospital"],
        answer: "In marked parking bays"
      },
      {
        question: "What does a red traffic light mean?",
        options: ["Stop", "Go", "Slow down", "Turn left"],
        answer: "Stop"
      },
      {
        question: "What should you do before overtaking?",
        options: ["Honk", "Check mirrors and signal", "Speed up", "None"],
        answer: "Check mirrors and signal"
      },
      {
        question: "The mandatory signs giving orders are mostly in?",
        options: ["Red/Blue circles", "Red Triangle", "Basse triangle"],
        answer: "Red/Blue circles"
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
        question: "What is the meaning of a blinking red traffic light?",
        options: ["Proceed slowly", "Stop and proceed when safe", "Speed up"],
        answer: "Stop and proceed when safe"
      },
      {
        question: "Maximum permitted speed of a motor car on national highway is:",
        options: ["100 km/h", "80 km/h", "120 km/h"],
        answer: "100 km/h"
      },
      {
        question: "Where is the number of passengers permitted to be taken in a private vehicle recorded?",
        options: ["Registration certificate", "Insurance certificate", "Permit"],
        answer: "Registration certificate"
      },
      {
        question: "Before starting the engine of a vehicle, you should:",
        options: ["Check oil and fuel", "Check for leaks", "Check brakes and mirrors"],
        answer: "Check brakes and mirrors"
      },
      {
        question: "The maximum permissible speed of a light motor vehicle is:",
        options: ["60 km/h", "80 km/h", "100 km/h"],
        answer: "80 km/h"
      },
  {
        question: "At the Blind junction you must stop..?",
        options: ["only if there is traffic on the main road", "behind the line and move forward slowly as vision improves"],
        answer: "behind the line and move forward slowly as vision improves"
  },
  {
    question: "At the Blind junction you must stop..?",
        options: ["only if there is traffic on the main road", "behind the line and move forward slowly as vision improves"],
        answer: "behind the line and move forward slowly as vision improves"
  },
  {
    question: "What should you do before overtaking?",
    options: ["Honk", "Check mirrors and signal", "Speed up", "None"],
    answer: "Check mirrors and signal"
  },
  {
    question: "The mandatory signs giving orders are mostly in?",
    options: ["Red/Blue circles", "Red Triangle", "Basse triangle"],
    answer: "Red/Blue circles"
  },
  {
    question: "While you reach a junction with limited visibility you should?",
    options: ["look both ways and move carefully", "look at right and move slowly", "move quickly"],
    answer: "look both ways and move carefully"
  },
];

function PracticeTest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const isCorrect = selectedOption === currentQuestion.answer;

  return (
    <div className="practice-container">
      <h1>📝 Practice Test</h1>

      <div className="question-box">
        <h2>Q{currentIndex + 1}: {currentQuestion.question}</h2>

        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${
                isAnswered
                  ? option === currentQuestion.answer
                    ? "correct"
                    : option === selectedOption
                    ? "incorrect"
                    : ""
                  : ""
              }`}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>

        {isAnswered && (
          <p className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
            {isCorrect
              ? "✅ Correct!"
              : `❌ Incorrect. Correct answer: ${currentQuestion.answer}`}
          </p>
        )}

        <div className="button-row" style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className="back-btn"
          >
            ⬅️ Back
          </button>

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className="next-btn"
          >
            {currentIndex < questions.length - 1 ? "Next ➡️" : "Finish 🏁"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PracticeTest;