import AppDivider from "@/components/app-divider";
import AppSectionDivider from "@/components/app-section-divider";
import { FadeInBottom, ScaleUp } from "@/utils/animation-configs";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef } from "react";

const Experience = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const experiences = [
    {
      year: "2025 - Present",
      title: "Front-End Web Developer",
      company: "Company Name",
    },
    {
      year: "2022 - 2025",
      title: "Front-End Developer",
      company: "Yondu Inc.",
    },
    {
      year: "2019 - 2022",
      title: "Full-Stack Developer",
      company: "Ecostarlimited Inc.",
    },
    {
      year: "2019 - 2019",
      title: "Application Developer",
      company: "Partner Business Solution",
    },
  ];

  return (
    <motion.div id="experience-section" className="flex flex-col gap-4 pt-10">
      <AppSectionDivider
        initial={ScaleUp.initial}
        animate={isTitleInView ? ScaleUp.animate : {}}
        transition={ScaleUp.transition}
        label="Experience"
      />
      <motion.h1
        ref={titleRef}
        initial={FadeInBottom.initial}
        animate={isTitleInView ? FadeInBottom.animate : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl"
      >
        My Time As <span className="text-highlight">Developer</span>
      </motion.h1>
      <div className="mt-10">
        <AnimatePresence>
          {experiences.map((exp, index) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true });
            return (
              <motion.div ref={ref} key={index} className="flex">
                <AppDivider
                  color="var(--Hazy)"
                  thickness={1}
                  separators={["start"]}
                />
                <motion.div className="flex flex-col ml-10 gap-10 pb-10">
                  <motion.h1
                    initial={FadeInBottom.initial}
                    animate={inView ? FadeInBottom.animate : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="sub-text"
                  >
                    {exp.year}
                  </motion.h1>
                  <motion.div className="flex flex-col gap-2">
                    <motion.h1
                      initial={FadeInBottom.initial}
                      animate={inView ? FadeInBottom.animate : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="text-2xl"
                    >
                      {exp.title}
                    </motion.h1>
                    <motion.h1
                      initial={FadeInBottom.initial}
                      animate={inView ? FadeInBottom.animate : {}}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className="sub-text"
                    >
                      {exp.company}
                    </motion.h1>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Experience;
