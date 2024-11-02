import React from "react";
import video from "../assets/hero.mp4";
import logo from "../assets/logo1.png";
import hero from "../assets/hero.jpeg";
import { motion } from "framer-motion";
import "@fontsource/open-sans";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="relative z-20 flex h-screen flex-col justify-end pb-10">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt="restaurant"
          className="w-full"
        />
        <p
          className="p-4 text-2xl tracking-tighter text-white"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          Hanoi, Vietnam
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

// Futura PT Medium
