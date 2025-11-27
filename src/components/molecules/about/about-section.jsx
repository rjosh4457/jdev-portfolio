import AppSectionDivider from "@/components/app-section-divider";
import AirplaneIcon from "@/components/icons/airplane-icon";
import AWSIcon from "@/components/icons/aws-icon";
import ExpoIcon from "@/components/icons/expo-icon";
import ExpressJSIcon from "@/components/icons/expressjs-icon";
import FigmaIcon from "@/components/icons/figma-icon";
import FramerMotionIcon from "@/components/icons/framer-motion-icon";
import GamingIcon from "@/components/icons/gaming-icon";
import GitIcon from "@/components/icons/git-icon";
import GithubIcon from "@/components/icons/github-icon";
import GitlabIcon from "@/components/icons/gitlab-icon";
import HBOIcon from "@/components/icons/hbo-icon";
import MySQLIcon from "@/components/icons/mysql-icon";
import NetflixIcon from "@/components/icons/netflix-icon";
import NextjsIcon from "@/components/icons/nextjs-icon";
import NodeJSIcon from "@/components/icons/nodejs-icon";
import PostgreSQLIcon from "@/components/icons/postgresql-icon";
import ReactIcon from "@/components/icons/react-icon";
import SupabaseIcon from "@/components/icons/supabase-icon";
import TailwindIcon from "@/components/icons/tailwind-icon";
import VueIcon from "@/components/icons/vue-icon";
import useAnimation from "@/hooks/use-animation";
import {
  FadeInBottom,
  FadeInLeft,
  FadeOutBottom,
  FadeOutLeft,
  ScaleUp,
} from "@/utils/animation-configs";
import { AnimatePresence, motion, useInView } from "motion/react";
import { createRef, useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const contentElHeader = useAnimation();
  const contentElText = useAnimation();
  const myStackElLabel = useAnimation();
  const contentElLabel = useAnimation();

  const initialStacks = [
    {
      category: "Front-End",
      stacks: [
        <ReactIcon />,
        <NextjsIcon />,
        <ReactIcon />,
        <ExpoIcon />,
        <VueIcon />,
        <TailwindIcon />,
        <FramerMotionIcon />,
      ],
      isToggle: true,
    },
    {
      category: "Back-End / Cloud",
      stacks: [
        <NodeJSIcon />,
        <ExpressJSIcon />,
        <SupabaseIcon />,
        <AWSIcon />,
        <MySQLIcon />,
        <PostgreSQLIcon />,
      ],
      isToggle: false,
    },
    {
      category: "Tools & DevOps",
      stacks: [
        <GithubIcon width={50} height={50} />,
        <GitlabIcon />,
        <GitIcon />,
      ],
      isToggle: false,
    },
    {
      category: "UI / UX",
      stacks: [<FigmaIcon />],
      isToggle: false,
    },
  ];

  const [myStacks, setMyStacks] = useState(initialStacks);
  const [tick, setTick] = useState(0);

  // Auto rotate sections
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Refs for stack sections
  const stackRefs = useRef(myStacks.map(() => createRef()));

  return (
    <motion.div id="about-section" className="flex flex-col gap-10 pt-10 mb-40">
      {/* About Section Divider */}
      <AppSectionDivider
        ref={contentElLabel.ref}
        initial={ScaleUp.initial}
        animate={contentElLabel.isInView ? ScaleUp.animate : {}}
        transition={ScaleUp.transition}
        label="About"
      />

      {/* Rotating Intro Sections */}
      <AnimatePresence mode="wait">
        {tick === 0 && (
          <motion.div
            key="section-0"
            className="flex flex-col gap-4 w-full xl:w-[65%]"
          >
            <motion.h1
              ref={contentElHeader.ref}
              initial={FadeInLeft.initial}
              animate={contentElHeader.isInView ? FadeInLeft.animate : {}}
              exit={FadeOutLeft.exit}
              transition={FadeInLeft.transition}
              className="text-6xl"
            >
              The{" "}
              <motion.span className="text-highlight"> Engineer </motion.span>{" "}
              Behind the Experience
            </motion.h1>
            <motion.h1
              ref={contentElText.ref}
              initial={FadeInLeft.initial}
              animate={contentElText.isInView ? FadeInLeft.animate : {}}
              exit={FadeOutLeft.exit}
              transition={{ delay: 0.3, ...FadeInLeft.transition }}
              className="sub-text"
            >
              Hey! I’m Josh — a friendly Web Developer who loves turning ideas
              into fast, clean, and good-looking websites. I enjoy building
              smooth user experiences, creating reusable components, and making
              interfaces feel alive with subtle animations and motion.
            </motion.h1>

            <motion.h1
              initial={FadeInLeft.initial}
              animate={contentElText.isInView ? FadeInLeft.animate : {}}
              exit={FadeOutLeft.exit}
              transition={{ delay: 0.4, ...FadeInLeft.transition }}
              className="sub-text"
            >
              I care a lot about clean code, performance, and making sure every
              project is easy to use and even easier to maintain. Whether it's
              improving UI, optimizing speed, or polishing tiny
              micro-interactions, I’m always excited to make things better.
            </motion.h1>
          </motion.div>
        )}

        {tick === 1 && (
          <motion.div
            key="section-1"
            className="flex flex-col gap-4 w-full xl:w-[65%]"
          >
            <motion.h1
              initial={FadeInLeft.initial}
              animate={FadeInLeft.animate}
              exit={FadeOutLeft.exit}
              transition={FadeInLeft.transition}
              className="text-6xl"
            >
              My Approach to Modern Development
            </motion.h1>

            <motion.h1
              initial={FadeInLeft.initial}
              animate={FadeInLeft.animate}
              exit={FadeOutLeft.exit}
              transition={{ delay: 0.2, ...FadeInLeft.transition }}
              className="sub-text"
            >
              As a <span className="text-highlight">Web Developer</span>, I
              don’t just build interfaces — I create smooth, fast, and enjoyable
              experiences. I love making apps that feel great to use, easy to
              maintain, and ready to scale as they grow.
            </motion.h1>

            <motion.h1
              initial={FadeInLeft.initial}
              animate={FadeInLeft.animate}
              exit={FadeOutLeft.exit}
              transition={{ delay: 0.2, ...FadeInLeft.transition }}
              className="sub-text"
            >
              <b>Component Architecture:</b>
              <br /> I enjoy creating clean, reusable components in React or
              Vue.js. It helps keep projects organized, makes development
              faster, and ensures everything looks and works consistently.
            </motion.h1>

            <motion.h1
              initial={FadeInLeft.initial}
              animate={FadeInLeft.animate}
              exit={FadeOutLeft.exit}
              transition={{ delay: 0.2, ...FadeInLeft.transition }}
              className="sub-text"
            >
              <b>Performance Optimization:</b>
              <br /> Speed matters. Whether it’s code splitting, lazy loading,
              or fine-tuning how data is fetched, I’m always focused on making
              apps load quicker and run smoother.
            </motion.h1>
          </motion.div>
        )}

        {tick === 2 && (
          <motion.div
            key="section-2"
            className="flex flex-col gap-4 w-full xl:w-[65%]"
          >
            <motion.h1
              initial={FadeInLeft.initial}
              animate={FadeInLeft.animate}
              exit={FadeOutLeft.exit}
              transition={FadeInLeft.transition}
              className="text-6xl"
            >
              When I'm Not Coding...
            </motion.h1>

            <motion.h1
              initial={FadeInLeft.initial}
              animate={FadeInLeft.animate}
              exit={FadeOutLeft.exit}
              transition={{ delay: 0.2, ...FadeInLeft.transition }}
              className="sub-text"
            >
              While I love the challenge of debugging a complex asynchronous
              function, I believe balance is key to great code. Outside of my
              editor, you can usually find me gaming, watching movies, or
              traveling.
            </motion.h1>

            <motion.div className="flex gap-10 mt-10">
              <motion.div
                initial={FadeInBottom.initial}
                animate={FadeInBottom.animate}
                exit={FadeOutBottom.exit}
                transition={{ delay: 0.2, ...FadeInBottom.transition }}
              >
                <GamingIcon width={50} height={50} />
              </motion.div>
              <motion.div
                initial={FadeInBottom.initial}
                animate={FadeInBottom.animate}
                exit={FadeOutBottom.exit}
                transition={{ delay: 0.3, ...FadeInBottom.transition }}
              >
                <HBOIcon width={50} height={50} />
              </motion.div>
              <motion.div
                initial={FadeInBottom.initial}
                animate={FadeInBottom.animate}
                exit={FadeOutBottom.exit}
                transition={{ delay: 0.4, ...FadeInBottom.transition }}
              >
                <NetflixIcon width={50} height={50} fill="red" stroke="red" />
              </motion.div>
              <motion.div
                initial={FadeInBottom.initial}
                animate={FadeInBottom.animate}
                exit={{ opacity: 0, x: 400 }}
                transition={{ delay: 0.5, ...FadeInBottom.transition }}
              >
                <AirplaneIcon width={50} height={50} />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* My Stack Section */}
      <motion.div className="mt-40">
        <AppSectionDivider
          ref={myStackElLabel.ref}
          initial={ScaleUp.initial}
          animate={myStackElLabel.isInView ? ScaleUp.animate : {}}
          transition={ScaleUp.transition}
          label="My Stack"
        />

        <motion.div className="flex flex-col gap-2 mt-10">
          {myStacks.map((item, index) => {
            const ref = stackRefs.current[index];
            const inView = useInView(ref, { once: true });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? ScaleUp.animate : {}}
                transition={{
                  delay: index * 0.2,
                  duration: 1,
                  borderColor: { duration: 0.4 },
                  height: { duration: 0.1 },
                }}
                className="flex flex-col w-full cursor-pointer"
              >
                <motion.h1
                  className="text-highlight"
                  onClick={() =>
                    setMyStacks((prev) =>
                      prev.map((stack, i) =>
                        i === index
                          ? { ...stack, isToggle: !stack.isToggle }
                          : stack
                      )
                    )
                  }
                >
                  {item.category}
                </motion.h1>

                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      item.isToggle
                        ? { height: "fit-content", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden flex flex-wrap justify-start gap-10 py-6"
                  >
                    {item.stacks.map((s, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }} // desktop hover
                        whileTap={{ scale: 1.05 }} // mobile tap
                        transition={{ duration: 0.2 }}
                        className="min-w-25 min-h-25 bg-Hazy-700 rounded-2xl flex justify-center items-center"
                      >
                        {s}
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
