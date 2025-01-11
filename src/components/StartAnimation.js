"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StartAnimation() {
  const [endAnimation, setEndAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEndAnimation(true);
    }, 3800);
  }, []);

  return (
    <motion.div
      className="fixed top-0 h-screen w-screen flex justify-center items-center z-40  bg-primary"
      initial={{ height: "100vh" }}
      animate={{ height: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 4.2 }}
    >
      {/* Logo */}
      <div className="relative z-50 overflow-hidden text-white">
        Martin marotti
      </div>
      {/* Black page */}
      <motion.div
        className="absolute top-0 h-full w-full bg-black z-40"
        initial={{ height: "100vh" }}
        animate={{ height: "0px" }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 4.1 }}
      />
    </motion.div>
  );
}