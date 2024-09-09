import React from "react";
import { useState, useRef, useEffect } from "react";
import "/src/App.css";

const paragraph = `Beneath the surface of the ocean, a vibrant world of sea creatures comes to life. The swift dolphin races through the water, while groups of fish dart in every direction. A graceful sea turtle glides past coral reefs, where colorful seahorses dance. Deep below, the mysterious octopus blends into the shadows, As you type, imagine your fingers are swimming through an ocean of letters, Can you keep up with the rhythm of the sea?`;

function TypingTest() {
  const maxTime = 60;
  const [timeLeft, setTimeLeft] = useState(maxTime);
  const [isTyping, setIsTyping] = useState(false)
  const [mistakes, setMistakes] = useState(0);
  const [charIndex, setCharIndex] = useState(0)
  const [WPM, setWPM] = useState(0);
  const [CPM, setCPM] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className="container">
      <div className="text">
        <input type="text" className="inputField" ref={inputRef} />
        {paragraph.split("").map((char, index) => (
          <span className="char">{char}</span>
        ))}
      </div>
      <div className="result">
        <p>Time Left: {timeLeft}</p>
        <p>Mistakes: {mistakes}</p>
        <p>WPM: {WPM}</p>
        <p>CPM: {CPM}</p>
        <button className="resetBtn">Try Again</button>
      </div>
    </div>
  );
}

export default TypingTest;
