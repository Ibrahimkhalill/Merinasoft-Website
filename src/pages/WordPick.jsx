import React, { useEffect, useState } from "react";

function WordFlick() {
  const [words] = useState([
    "Web Develement",
    "Software Development",
    "Mobile Application",
    "Custom Software Development",
    "Digital Marketing",
  ]);
  const [part, setPart] = useState("");
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const [skipDelay] = useState(15);
  const [speed] = useState(70);

  useEffect(() => {
    const wordFlick = () => {
      const intervalId = setTimeout(() => {
        if (forwards) {
          if (offset >= words[i].length) {
            setSkipCount((prevSkipCount) => prevSkipCount + 1);
            if (skipCount === skipDelay) {
              setForwards(false);
              setSkipCount(0);
            }
          }
        } else {
          if (offset === 0) {
            setForwards(true);
            setI((prevI) => (prevI + 1) % words.length);
            setOffset(0);
          }
        }
        const newPart = words[i].substring(0, offset);
        setPart(newPart);
        if (skipCount === 0) {
          if (forwards) {
            setOffset((prevOffset) => prevOffset + 1);
          } else {
            setOffset((prevOffset) => prevOffset - 1);
          }
        }
      }, speed);
      return () => clearTimeout(intervalId);
    };

    wordFlick();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, offset, forwards, skipCount]); // Dependencies may need adjustment based on your specific use case

  return <span className="word">{part}</span>;
}

export default WordFlick;
