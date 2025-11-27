import { motion } from "motion/react";

const  AppButton = ({ children, ...props }) => {
  return (
    <motion.button
      {...props}
      className="px-6 py-2 rounded-4xl text-white bg-highlight cursor-pointer w-full"
      layoutId="modal"
      style={{ borderWidth: 1, borderColor: "var(--highlight)" }}
      whileHover={{
        backgroundColor: "var(--background)",
        scale: 1.05,
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
      {children}
    </motion.button>
  );
};

export default AppButton;
