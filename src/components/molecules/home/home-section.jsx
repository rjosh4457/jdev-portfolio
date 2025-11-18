import AppSectionDivider from "@/components/app-section-divider";
import { motion } from "motion/react";

const HomeSection = () => {
  return (
    <motion.div className="flex flex-col gap-4">
      <AppSectionDivider
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        label="Home"
      />
      <motion.h1
        className="text-4xl"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0,
          duration: 1,
        }}
      >
        I'm
        <motion.span className="text-highlight">&nbsp;Josh</motion.span>, Web
        Developer
      </motion.h1>
      <motion.h1
        className="sub-text"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          duration: 1,
        }}
      >
        I build and optimize the code behind every interaction, ensuring
        <br /> the final product is fluid, powerful, and ready for any feature.
      </motion.h1>
      <div className="flex gap-20 py-30">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="text-7xl text-highlight"
          >
            6+
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
            className="sub-text"
          >
            Years of Experience
          </motion.h1>
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="text-7xl text-highlight"
          >
            100+
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.7,
              duration: 1,
            }}
            className="sub-text"
          >
            Projects
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeSection;
