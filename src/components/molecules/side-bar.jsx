import { motion } from "motion/react";
import AppCircularButton from "../app-circular-button";
import HomeIcon from "../icons/home-icon";
import UserStarIcon from "../icons/user-star-icon";
import BriefcaseIcon from "../icons/briefcase-icon";
const SideBar = () => {
  const whileHover = {
    backgroundColor: "var(--highlight)",
    color: "var(--foreground)",
  };
  const handleClick = (scrollTo) => {
    document.getElementById(scrollTo)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <motion.div className="flex flex-col p-2 gap-4">
      <AppCircularButton
        whileHover={whileHover}
        onClick={() => handleClick("home-section")}
      >
        <HomeIcon />
      </AppCircularButton>
      <AppCircularButton onClick={() => handleClick("about-section")}>
        <UserStarIcon />
      </AppCircularButton>
      <AppCircularButton onClick={() => handleClick("experience-section")}>
        <BriefcaseIcon />
      </AppCircularButton>
    </motion.div>
  );
};
export default SideBar;
