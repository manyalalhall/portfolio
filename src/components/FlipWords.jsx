import React, { useEffect, useState, useRef } from "react";
import { twMerge } from "tailwind-merge";

export const FlipWords = ({ words, duration = 2800, className }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (typing) {
      if (displayed.length < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), duration);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 45);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, typing, wordIndex, words, duration]);

  return (
    <span
      className={twMerge("inline-block relative text-left text-[#3b1f0e]", className)}
    >
      {displayed}
      <span
        className="inline-block w-[3px] ml-1 align-middle bg-[#3b1f0e] animate-pulse"
        style={{ height: "0.85em" }}
      />
    </span>
  );
};