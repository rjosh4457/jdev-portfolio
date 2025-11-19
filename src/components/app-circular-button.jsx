import { motion } from "motion/react";
const AppCircularButton = ({ children, ...props }) => {
  return (
    <motion.button
      {...props}
      className="px-3 py-3 cursor-pointer circle"
      style={{ background: "rgba(255, 255, 255, 0.2)" }}
      whileHover={{
        scale: 1.2,
        ...props.whileHover,
      }}
      whileTap={{
        scale: 0.95,
        ...props.whileTap,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.button>
  );
};
export default AppCircularButton;
