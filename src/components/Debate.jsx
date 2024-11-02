import React, { useState, useRef, useEffect } from "react";
import missionImg from "../assets/mission.jpeg";
import debate from "../assets/debate.mp4";
import { MISSION } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaVolumeMute, FaVolumeUp, FaPlay } from "react-icons/fa"; // Import FaPlay for the play button

const Debate = () => {
  const [volume, setVolume] = useState(0); // Default volume is muted
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false); // State to track if video has ended
  const videoRef = useRef(null);

  // Update the video's volume and muted property when volume changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = volume === 0;
    }
  }, [volume]);

  // Handlers for showing/hiding volume control on hover
  const handleMouseEnter = () => {
    setShowVolumeControl(true);
  };

  const handleMouseLeave = () => {
    setShowVolumeControl(false);
  };

  // Handler for when the video ends
  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  // Handler to replay the video
  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setVideoEnded(false);
    }
  };

  return (
    <section id="debate" className="py-16 container mx-auto">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl lg:text-5xl font-medium">My Passion for Debate</h2>
        <div className="relative flex items-center justify-center">
          <motion.video
            ref={videoRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full rounded-3xl"
            autoPlay
            playsInline
            onEnded={handleVideoEnded} // Add onEnded event
            controls={false} // Hide default controls
          >
            <source src={debate} type="video/mp4" />
          </motion.video>

          {/* Overlay Background */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute h-full w-full rounded-3xl bg-black/40 z-0"
          ></motion.div>

          {/* Overlay Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute max-w-lg tracking-tighter lg:text-3xl text-neutral-200 z-0"
          >
            {MISSION}
          </motion.p>

          {/* Play Button Overlay */}
          <AnimatePresence>
            {videoEnded && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={handleReplay}
                className="absolute flex items-center justify-center bg-gray-800 bg-opacity-75 rounded-full p-4 z-10 hover:bg-opacity-90 transition"
                style={{ width: "60px", height: "60px" }}
              >
                <FaPlay size={24} color="#fff" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Volume Icon and Slider */}
          <div
            className="absolute bottom-4 right-4 flex items-center space-x-2 z-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Volume Icon */}
            <button className="bg-gray-800 p-2 rounded-full text-white focus:outline-none">
              {volume === 0 ? (
                <FaVolumeMute size={20} />
              ) : (
                <FaVolumeUp size={20} />
              )}
            </button>

            {/* Volume Slider */}
            <AnimatePresence>
              {showVolumeControl && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center bg-gray-800 p-2 rounded"
                >
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-32"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Debate;
