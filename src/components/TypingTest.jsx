import React from "react";

function TypingTest() {
  const paragraph = `Beneath the surface of the ocean, a vibrant world of sea creatures comes to life. The swift dolphin races through the water, while groups of fish dart in every direction. A graceful sea turtle glides past coral reefs, where colorful seahorses dance. Deep below, the mysterious octopus blends into the shadows, As you type, imagine your fingers are swimming through an ocean of letters, Can you keep up with the rhythm of the sea?`;

  return (
    <div className="container">
      <div className="test">
        {paragraph.split("").map((char, index) => (
          <span className="char">{char}</span>
        ))}
      </div>
      <div className="result">
        <p>Time Left:</p>
        <p>Mistakes:</p>
        <p>WPM: </p>
        <p>CPM: </p>
        <button className="resetBtn">Try Again</button>
      </div>
    </div>
  );
}

export default TypingTest;
