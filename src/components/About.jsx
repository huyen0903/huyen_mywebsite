import about from "../assets/ava.jpg";
import ava from "../assets/ava1.jpg"; // Ensure you have a semicolon here
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container mx-auto mb-8 bg-[#FFFFF0]" id="about">
      <h2 className="text-black py-16 text-center text-3xl tracking-tighter lg:text-5xl font-medium">
        About me
      </h2>
      <div className="flex flex-wrap">
        {/* Image Container */}
        <div className="w-full p-4 lg:w-1/2 flex flex-col items-center">
          {/* About Image */}
          <img
            src={about}
            alt="About"
            className="rounded-3xl lg:-rotate-3 mb-4"
          />
          {/* Ava Image */}
          <img src={ava} alt="Ava" className="rounded-3xl lg:rotate-3 mt-4" />
        </div>

        {/* Text Content */}
        <div className="w-full px-2 lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl tracking-tighter lg:text-7xl text-black"
          >
            {ABOUT.header}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 mt-1 h-2 w-36 bg-rose-300"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl text-black"
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
