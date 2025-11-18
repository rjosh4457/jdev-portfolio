import AppSectionDivider from "@/components/app-section-divider";
import AppTypewriterText from "@/components/app-typewriter-text";
import AirplaneIcon from "@/components/icons/airplane-icon";
import GamingIcon from "@/components/icons/gaming-icon";
import HBOIcon from "@/components/icons/hbo-icon";
import NetflixIcon from "@/components/icons/netflix-icon";
import XboxIcon from "@/components/icons/xbox-icon";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="flex flex-col gap-4">
      <AppSectionDivider
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        label="About"
      />
      <AnimatePresence mode="wait">
        {tick === 0 && (
          <motion.div
            key="section-0"
            className="flex flex-col gap-4 w-full xl:w-[65%]"
          >
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-4xl"
            >
              The
              <motion.span className="text-highlight">
                &nbsp;Engineer&nbsp;
              </motion.span>
              Behind the <br /> Experience
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="sub-text"
            >
              Hello again! I'm a passionate
              <span className="text-highlight"> Front-end Engineer</span> with
              <span className="text-highlight"> 6+</span> years of experience
              dedicated to making the web a more beautiful, faster, and more
              intuitive place. My philosophy is simple: Code should be elegant,
              and the user experience should be seamless. I thrive on
              translating complex design systems into robust, accessible, and
              pixel-perfect applications.
            </motion.h1>
          </motion.div>
        )}

        {tick === 1 && (
          <motion.div
            key="section-2"
            className="flex flex-col gap-4 w-full xl:w-[65%]"
          >
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 1 }}
              className="text-4xl"
            >
              My Approach to Modern Development
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="sub-text"
            >
              As a specialist in the
              <span className="text-highlight"> Front-End</span> domain, my
              focus areas extend beyond just rendering pixels. I am committed to
              creating highly optimized applications that deliver speed and
              maintainability
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="sub-text"
            >
              <b>Component Architecture:</b> I specialize in building reusable,
              scalable component libraries using React/Vue.js to ensure
              consistency and rapid development across large applications.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="sub-text"
            >
              <b>Performance Optimization:</b> From code splitting and lazy
              loading to advanced network request handling, I optimize every
              line to deliver blazing-fast load times.
            </motion.h1>
          </motion.div>
        )}
        {tick === 2 && (
          <motion.div
            key="section-3"
            className="flex flex-col gap-4 w-full xl:w-[65%]"
          >
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 1 }}
              className="text-4xl"
            >
              When I'm Not Coding...
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="sub-text"
            >
              While I love the challenge of debugging a complex asynchronous
              function, I believe balance is key to great code. Outside of my
              editor, you can usually find me gaming, watching movies, or
              traveling.
            </motion.h1>
            <motion.div className="flex gap-10 mt-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <GamingIcon width={50} height={50} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <HBOIcon width={50} height={50} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <NetflixIcon width={50} height={50} fill="red" stroke="red" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 400 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <AirplaneIcon width={50} height={50} />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default AboutSection;
