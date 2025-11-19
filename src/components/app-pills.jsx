import { motion } from "motion/react";

const AppPills = ({ label, icon, ...props }) => {
  return (
    <motion.div
      {...props}
      className="flex bg-Hazy-700 px-4 py-2 rounded-4xl w-fit gap-4 cursor-pointer"
      whileHover={{
        scale: 1.1,
      }}
    >
      {icon && <div>{icon}</div>}
      {label}
    </motion.div>
  );
};

export default AppPills;
