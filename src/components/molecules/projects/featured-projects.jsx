import AppSectionDivider from "@/components/app-section-divider";
import useAnimation from "@/hooks/use-animation";
import { FadeInBottom, ScaleUp } from "@/utils/animation-configs";
import { motion } from "motion/react";
import Image from "next/image";
import carRentalImage from "@/assets/projects/car-rental-wide.png";
import culinexImg from "@/assets/projects/culinex.png";
import tempoImg from "@/assets/projects/tempo.png";
import kingdomsEdge from "@/assets/projects/kingdoms-edge.jpg"
import AppPills from "@/components/app-pills";
import ProjectCard from "./project-card";
import { useRef } from "react";

const TempoDescription = () => {
  return (
    <motion.div>
      <motion.h1>
        <motion.span className="text-highlight">Tempo</motion.span> is a mobile
        dating application I designed and developed to explore modern UI
        principles, smooth user flows, and a warm, emotionally appealing visual
        style. The project focuses on building an intuitive matchmaking
        experience with clean navigation, personalized interactions, and vibrant
        branding.
      </motion.h1>
      <motion.ol
        type="list"
        className="list-decimal mt-4 ml-6 flex flex-col gap-2"
      >
        <motion.li>
          When a user enters the “10-Minute Match” queue, their presence is
          broadcast to a dedicated channel.
        </motion.li>
        <motion.li>
          Supabase Broadcast instantly updates other active users who are also
          searching.
        </motion.li>
        <motion.li>
          When two compatible users join simultaneously, they’re automatically
          paired in real time — no refresh required.
        </motion.li>
        <motion.li>
          Both users get a synchronized start to a 10-minute conversation
          session, enabling immediate and fluid interaction.
        </motion.li>
        <motion.p className="mt-4">
          View the source code and project details on GitHub:{" "}
          <a
            href="https://github.com/rjosh4457/tempo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight underline"
          >
            https://github.com/rjosh4457/tempo
          </a>
        </motion.p>
      </motion.ol>
    </motion.div>
  );
};

const KingdomsEdgeDescription = () => {
  return (
    <motion.div>
      <motion.h1>
        <motion.span className="text-highlight">Kingdoms Edge</motion.span> is a
        2D exploration and tactical adventure game where players journey across
        a dynamic world filled with discovery and danger. The game blends
        character progression, strategic combat, and immersive exploration with
        a map-driven travel system and event-based encounters.
      </motion.h1>

      <motion.ol
        type="list"
        className="list-decimal mt-4 ml-6 flex flex-col gap-2"
      >
        <motion.li>
          Players explore a 2D map and click destinations to auto-route across
          realms.
        </motion.li>
        <motion.li>
          During travel, random events may occur — combat, treasures, or traps —
          creating dynamic gameplay.
        </motion.li>
        <motion.li>
          Combat requires tactical skill selection, rewarding strategic
          decision-making.
        </motion.li>
        <motion.li>
          Each expedition is unique, offering varied experiences and meaningful
          player choices.
        </motion.li>
        <motion.p className="mt-4">
          View the source code and project details on GitHub:{" "}
          <a
            href="https://github.com/rjosh4457/kingdoms-edge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight underline"
          >
            https://github.com/rjosh4457/kingdoms-edge
          </a>
        </motion.p>
      </motion.ol>
    </motion.div>
  );
};
const FeaturedProjects = () => {
  const title = useAnimation();

  const projectItems = [
    {
      img: kingdomsEdge,
      alt: "Kingdoms Edge - Fantasy IDLE RPG Game",
      pills: ["React Native", "Expo", "Supabase", "TypeScript"],
      align: "right",
      description: <KingdomsEdgeDescription />,
    },
    {
      img: tempoImg,
      alt: "Tempo - Social And Dating App Project",
      pills: ["React Native", "Expo", "Supabase", "TypeScript"],
      align: "left",
      description: <TempoDescription />,
    },
    {
      img: carRentalImage,
      alt: "Car Rental Project",
      pills: ["NextJS", "Shadcn", "Typescript", "MySQL", "NodeJS"],
      align: "right",
      description:
        "An online car rental platform that allows users to easily browse, book, and manage car rentals through a user-friendly interface.",
    },
    {
      img: culinexImg,
      alt: "Culinex POS Project",
      pills: ["NextJS", "Shadcn", "NodeJS", "Typescript"],
      align: "left",
      description:
        "A comprehensive Point of Sale (POS) system tailored for the food and beverage industry, designed to streamline operations, enhance customer service, and improve overall efficiency in restaurants and cafes.",
    },
  ];

  return (
    <motion.div
      id="featured-projects"
      className="flex flex-col gap-10 pt-10 mb-40"
    >
      <AppSectionDivider
        initial={ScaleUp.initial}
        animate={title.isInView ? ScaleUp.animate : {}}
        transition={ScaleUp.transition}
        label="Projects"
      />
      <motion.h1
        ref={title.ref}
        initial={FadeInBottom.initial}
        animate={title.isInView ? FadeInBottom.animate : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl"
      >
        Featured <span className="text-highlight">Projects</span>
      </motion.h1>
      {projectItems.map((item, index) => {
        const ref = useRef(null);
        return (
          <ProjectCard
            key={index}
            innerRef={ref}
            alt={item.alt}
            img={item.img}
            align={item.align}
            pills={item.pills}
            description={item.description}
          />
        );
      })}
      <motion.h1 className="sub-text mt-20">
        Note: Most of my professional work is with companies and cannot be
        publicly displayed. The projects listed here are personal or side
        projects created to showcase my skills and experience.
      </motion.h1>
    </motion.div>
  );
};

export default FeaturedProjects;
