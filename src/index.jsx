import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./App.css";

const App = () => {
  const [duration, setDuration] = useState(20);
  const [key, setKey] = useState(0);

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
      <div className="timer">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
    );
  };

  const handleAddTime = () => {
    setDuration((prev) => prev + 10);
    setKey((prev) => prev + 1);
  };

  const handleSkip = () => {
    setDuration((prev) => prev - 5);
  };

  return (
    <div>
      <h1>Routine starting in...</h1>
      <p className="subheading">Subheading here</p>

      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={key}
          isPlaying
          duration={duration}
          colors={["#6b4de6"]}
          size={240}
          strokeWidth={24}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>

      <div className="button-container">
        <button className="button" onClick={handleAddTime}>
          + 10 sec
        </button>
        <button className="button" onClick={handleSkip}>
          Skip (-5 Sec)
        </button>
      </div>

      <div className="step-card">
        <div className="step-header">Step 2/3</div>
        <div className="step-content">
          <div className="step-info">
            <img className="logo" src="./public/icon.png"/>
            <div>
              <div className="step-title">Cleansing</div>
              <div className="step-duration">60 sec</div>
            </div>
          </div>
          <a href="#" className="how-to-do">
            How to do
          </a>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
