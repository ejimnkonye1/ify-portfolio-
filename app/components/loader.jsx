import { useEffect, useState } from "react";

const Loader = ({ isLoading = true, delay = 0 }) => {
  const [showLoader, setShowLoader] = useState(false);

  // Delay showing loader to prevent flash on fast loads
  useEffect(() => {
    if (!isLoading) {
      setShowLoader(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowLoader(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [isLoading, delay]);

  // Prevent body scroll when loader is shown
  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showLoader]);

  if (!showLoader) return null;

  return (
    <div 
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
      style={{
        // Ensure it's above everything
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 1)", // Solid black, not transparent
      }}
    >
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#98FF98] border-t-transparent rounded-full animate-spin"></div>
        
        {/* Optional: Add a subtle pulse effect */}
        <div className="absolute inset-0 rounded-full animate-ping bg-[#98FF98] opacity-20"></div>
      </div>
    </div>
  );
};

export default Loader;