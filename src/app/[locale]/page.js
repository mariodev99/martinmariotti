'use client'

import Header from "@/components/header";
import Services from "@/components/services";
import StartAnimation from "@/components/StartAnimation";
import { useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "@/components/slider";

export default function HomePage() {

  const containerRef = useRef(null);
  const scrollYMotionValue = useMotionValue(0);

  const ANIMATION_DELAY = 4.4;

  // Seteo el scroll
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const scrollTop = container.scrollTop;
        if (scrollYMotionValue) {
          scrollYMotionValue.set(scrollTop);
          console.log(scrollTop);
        }
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollYMotionValue]);

  return (
    <div>
      {/* <Header />
      <Services /> */}

      <main
      className=" h-screen w-screen overflow-y-scroll overflow-x-hidden font-[family-name:var(--font-geist-sans)] relative bg-background bg-cover"
      ref={containerRef}
    >
      <div className="flex flex-col items-center px-0 w-full mt-56">
        <section className="px-5 flex flex-col items-center justify-center mb-12">
          <motion.div
            className="overflow-hidden rounded-full px-6 py-1 text-sm md:text-xl lg:text-2xl bg-[#0E0E0E] border-t border-t-[#1e1e1e] mb-2 md:mb-0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: ANIMATION_DELAY,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <motion.h3
              className="whitespace-nowrap bg-gradient-to-r from-[#d7d6d6] via-[#e2e2e2] to-[#838383] inline-block text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: ANIMATION_DELAY + 0.7,
                duration: 1,
                ease: "easeInOut",
              }}
            >
              Marketing digital
            </motion.h3>
          </motion.div>

          <motion.h1
            className=" bg-gradient-to-r from-[#f4f4f4] via-white to-[#BDBDBD] inline-block text-transparent bg-clip-text text-center text-2xl md:text-5xl lg:text-8xl font-semibold "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY + 0.5,
              duration: 1,
              ease: "easeInOut",
            }}
          >
          Make Smart Investments:
          Intelligently         
          </motion.h1>

          <motion.p
            className=" text-sm md:text-2xl font-regular mt-4 mb-8 text-center leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY + 0.6,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            Create your real estate assets by investing in the most profitable properties with complete security and peace of mind
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY + 0.7,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            boton
          </motion.div>
        </section>

        <Slider />

      </div>
      </main>
        <div className="bg-white w-screen">
            <p className="md:text-5xl text-lg">
            Simplify your real estate investment process by entrusting us with comprehensive support and personalized services, allowing you to focus on other priorities while we handle every aspect of your project.
            </p>
        </div>
    </div>
  );
}
