// app/components/InfiniteSplitText.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const InfiniteSplitText = ({ text }) => {
  const [letters, setLetters] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 2000); // Change visibility every 3 seconds

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    // Split the text into letters
    setLetters(text.split(""));
  }, [text]);

  return (
    <h1 className="text-5xl font-bold">
      {letters.map((letter, index) => (
        <motion.span
        key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="inline-block space-x-4 text-[#98FF98]"
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default InfiniteSplitText;