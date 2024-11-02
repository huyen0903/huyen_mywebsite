// Leadership.js

import React from "react";
import { CUSINES } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Leadership = () => {
  return (
    <section id="leadership">
      <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-5xl font-medium">
        My Leadership
      </h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        {CUSINES.map((cusine, index) => {
          // Determine if the current item is even (0-based indexing)
          const isEven = index % 2 !== 0;

          return (
            <motion.div
              variants={itemVariants}
              key={index}
              className="flex flex-col md:flex-row items-start border-b-4 border-dotted border-neutral-700/40 py-4"
            >
              {isEven ? (
                <>
                  {/* Text Section */}
                  <div className="md:pl-8 flex-1">
                    <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                      {cusine.title}
                    </h3>
                    {/* Render subtitle if it exists */}
                    {cusine.subtitle && (
                      <h4 className="text-xl italic mt-2">{cusine.subtitle}</h4>
                    )}
                    {/* Render bullet points */}
                    {cusine.bulletPoints && (
                      <ul className="mt-4 text-xl list-disc list-inside space-y-2">
                        {cusine.bulletPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {/* Image Section */}
                  <div className="w-full md:w-1/3 flex-shrink-0 md:pl-8 mt-4 md:mt-0">
                    {cusine.images && cusine.images.length > 1 ? (
                      // Render Masonry Image Grid
                      <div className="grid grid-cols-2 gap-2">
                        {cusine.images.map((imgSrc, idx) => (
                          <img
                            key={idx}
                            src={imgSrc}
                            alt={`${cusine.title} Image ${idx + 1}`}
                            className="w-full h-auto object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    ) : cusine.images && cusine.images.length === 1 ? (
                      // Render Single Image from images array
                      <img
                        src={cusine.images[0]}
                        alt={cusine.title}
                        className="w-full h-auto rounded-3xl"
                      />
                    ) : (
                      // Render Single Image
                      <img
                        src={cusine.image}
                        alt={cusine.title}
                        className="w-full h-auto rounded-3xl"
                      />
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Image Section */}
                  <div className="w-full md:w-1/3 flex-shrink-0 md:pr-8 mb-4 md:mb-0">
                    {cusine.images && cusine.images.length > 1 ? (
                      // Render Masonry Image Grid
                      <div className="grid grid-cols-2 gap-2">
                        {cusine.images.map((imgSrc, idx) => (
                          <img
                            key={idx}
                            src={imgSrc}
                            alt={`${cusine.title} Image ${idx + 1}`}
                            className="w-full h-auto object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    ) : cusine.images && cusine.images.length === 1 ? (
                      // Render Single Image from images array
                      <img
                        src={cusine.images[0]}
                        alt={cusine.title}
                        className="w-full h-auto rounded-3xl"
                      />
                    ) : (
                      // Render Single Image
                      <img
                        src={cusine.image}
                        alt={cusine.title}
                        className="w-full h-auto rounded-3xl"
                      />
                    )}
                  </div>
                  {/* Text Section */}
                  <div className="md:pl-8 flex-1">
                    <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                      {cusine.title}
                    </h3>
                    {/* Render subtitle if it exists */}
                    {cusine.subtitle && (
                      <h4 className="text-xl italic mt-2">{cusine.subtitle}</h4>
                    )}
                    {/* Render bullet points */}
                    {cusine.bulletPoints && (
                      <ul className="mt-4 text-xl list-disc list-inside space-y-2">
                        {cusine.bulletPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Leadership;
