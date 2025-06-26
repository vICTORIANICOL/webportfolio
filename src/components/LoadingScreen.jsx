import "../../src/index.css";

import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "HALLO ;)";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-text">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="loading-bar-wrapper">
        <div className="loading-bar"></div>
      </div>
    </div>
  );
};
