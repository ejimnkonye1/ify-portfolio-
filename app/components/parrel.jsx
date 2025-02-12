"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const ParallaxSection = ({ id, children }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 100); // Adjust distance as needed
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Fade from 0 to 1

    return (
        <motion.section
            id={id}
            ref={ref}
            style={{ y, opacity }} // Apply the y and opacity transformations
        >
            {children} {/* Render children content */}
        </motion.section>
    );
};

export default ParallaxSection;