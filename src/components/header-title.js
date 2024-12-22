"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeaderTitle({ translations, words }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative text-white w-full overflow-x-hidden px-5">
      <div className="flex flex-col gap-10">
        <div className="text-5xl md:text-8xl font-bold">
          <h1 className={`text-center  tracking-wide`}>
            {translations.title}
            <br></br>
            {words.map((word, index) => (
              <motion.span
                className="text-center flex justify-center w-full absolute text-greenprimary pr-8"
                key={index}
                variants={wordVariants}
                initial="hidden"
                animate={index === currentWordIndex ? "visible" : "hidden"}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>
        <h2
          className={`text-lg md:text-xl text-center  font-regular mt-5 md:mt-20`}
        >
          {translations.subtitle}
        </h2>
        <Link href={"/contacto"}>
          <div className="w-full flex justify-between items-center border bg-greenprimary text-black rounded-full p-2">
            <div className=" font-semibold w-full md:w-auto text-center">
              {translations.callToAction}
            </div>
            <div className="bg-black h-4 w-4"></div>
          </div>
        </Link>
      </div>
    </main>
  );
}
