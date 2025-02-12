// app/routes/infinite-split-text.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const InfiniteSplitText = () => {
  const text = "Infinite Split Text Effect";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 3000); // Change visibility every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-[#000080] text-white">
      <h1 className="text-5xl font-bold">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="inline-block text-[#98FF98]"
          >
            {letter}
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default InfiniteSplitText;