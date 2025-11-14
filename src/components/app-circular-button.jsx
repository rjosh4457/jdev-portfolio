import { motion } from "motion/react";
const AppCircularButton = ({ icon }) => {
  return (
    <motion.button
      className="px-3 py-3 cursor-pointer circle"
      layoutId="modal"
      style={{ background: 'rgba(255, 255, 255, 0.2)' }}
      whileHover={{
        scale: 1.2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {icon}
    </motion.button>
  );
};
export default AppCircularButton;
