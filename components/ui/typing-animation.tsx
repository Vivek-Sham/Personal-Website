"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string[];
  duration?: number;
  classNames?: string[];
}

export default function TypingAnimation({
  text,
  duration = 200,
  classNames = [],
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string[]>(
    new Array(text.length).fill("")
  );
  const [i, setI] = useState<number>(0);
  const [currentPart, setCurrentPart] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      const currentText = text[currentPart];
      const updatedText = currentText.substring(0, i + 1);

      setDisplayedText((prev) => {
        const newText = [...prev];
        newText[currentPart] = updatedText;
        return newText;
      });

      if (i + 1 >= currentText.length) {
        clearInterval(typingEffect);
        if (currentPart < text.length - 1) {
          setTimeout(() => {
            setI(0);
            setCurrentPart(currentPart + 1);
          }, 500);
        }
      } else {
        setI(i + 1);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, currentPart, text]);

  return (
    <div className="">
      {text.map((_, index) => (
        <p
          key={index}
          className={cn(
            "font-display tracking-[-0.02em]",
            classNames[index] || ""
          )}
        >
          {displayedText[index]}
        </p>
      ))}
    </div>
  );
}
