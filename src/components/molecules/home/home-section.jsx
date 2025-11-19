import AppPills from "@/components/app-pills";
import AppSectionDivider from "@/components/app-section-divider";
import useAnimation from "@/hooks/use-animation";
import { FadeInLeft, ScaleUp } from "@/utils/animation-configs";
import { inView } from "motion";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const HomeSection = () => {
  const greetings = useAnimation();
  const stats = useAnimation();
  const whatIDo = useAnimation();

  const items = [
    "Web Development",
    "Mobile Development",
    "UI Design",
    "API Integration",
    "Framer Motion",
  ];

  return (
    <motion.div id="home-section" className="flex flex-col gap-10 pt-10 mb-40">
      <AppSectionDivider {...ScaleUp} label="Home" />
      <motion.h1
        ref={greetings.ref}
        className="xl:text-6xl text-5xl"
        initial={FadeInLeft.initial}
        animate={greetings.isInView ? FadeInLeft.animate : {}}
        transition={FadeInLeft.transition}
      >
        Greetings from
        <motion.span className="text-highlight">&nbsp;Josh</motion.span>
        , <br /> Web Developer
      </motion.h1>
      <motion.h1
        className="sub-text"
        ref={greetings.ref}
        initial={FadeInLeft.initial}
        animate={greetings.isInView ? FadeInLeft.animate : {}}
        transition={{ delay: 0.1, ...FadeInLeft.transition }}
      >
        I build and optimize the code behind every interaction, ensuring
        <br /> the final product is fluid, powerful, and ready for any feature.
      </motion.h1>
      <div className="flex xl:gap-30 gap-10 py-30">
        <div>
          <motion.h1
            ref={stats.ref}
            initial={FadeInLeft.initial}
            animate={stats.isInView ? FadeInLeft.animate : {}}
            transition={{ delay: 0.2, ...FadeInLeft.transition }}
            className="xl:text-8xl text-6xl text-highlight"
          >
            6+
          </motion.h1>
          <motion.h1
            ref={stats.ref}
            initial={FadeInLeft.initial}
            animate={stats.isInView ? FadeInLeft.animate : {}}
            transition={{ delay: 0.3, ...FadeInLeft.transition }}
            className="sub-text"
          >
            Years of Building
            <br /> scalable web apps
          </motion.h1>
        </div>
        <div>
          <motion.h1
            ref={stats.ref}
            initial={FadeInLeft.initial}
            animate={stats.isInView ? FadeInLeft.animate : {}}
            transition={{ delay: 0.3, ...FadeInLeft.transition }}
            className="xl:text-8xl text-6xl text-highlight"
          >
            20+
          </motion.h1>
          <motion.h1
            ref={stats.ref}
            initial={FadeInLeft.initial}
            animate={stats.isInView ? FadeInLeft.animate : {}}
            transition={{ delay: 0.4, ...FadeInLeft.transition }}
            className="sub-text"
          >
            Key Projects
          </motion.h1>
        </div>
      </div>

      <motion.div
        ref={whatIDo.ref}
        initial={FadeInLeft.initial}
        animate={whatIDo.isInView ? FadeInLeft.animate : {}}
        transition={{ delay: 0.5, ...FadeInLeft.transition }}
        className="flex flex-wrap max-w-[600px] gap-5"
      >
        {items.map((item, index) => {
          return (
            <AppPills
              key={index}
              initial={FadeInLeft.initial}
              animate={whatIDo.isInView ? FadeInLeft.animate : {}}
              transition={{ delay: index * 0.2, ...FadeInLeft.transition }}
              label={item}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default HomeSection;
