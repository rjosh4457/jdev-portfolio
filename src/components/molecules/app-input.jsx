import clsx from "clsx";
import { motion } from "motion/react";

const AppInput = ({
  inputRef,
  type = "text",
  label,
  required = false,
  error,
  ...inputProps
}) => {
  return (
    <motion.div className="w-full">
      <motion.label className="mb-2 block">
        {label}
        {required && <span className="ml-2 text-highlight">*</span>}
      </motion.label>
      <motion.div ref={inputRef} className={clsx("w-full mb-2")}>
        <textarea
          {...inputProps}
          type={type}
          className="w-full outline-0 resize-none"
        />
      </motion.div>
      {error && (
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-red-500"
        >
          {error.message}
        </motion.h3>
      )}
    </motion.div>
  );
};
export default AppInput;
