import clsx from "clsx";
import { motion } from "framer-motion";

const AppDivider = ({
  orientation = "vertical",
  color = "black",
  thickness = 2,
  length = "100%",
  separators = [],
  separatorColor,
  style,
  ...props
}) => {
  const isVertical = orientation === "vertical";

  return (
    <motion.div
      {...props}
      className={clsx("flex justify-center", props.className)}
      style={{
        ...(isVertical
          ? { flexDirection: "column" }
          : { flexDirection: "row" }),
      }}
    >
      {separators.includes("start") && (
        <motion.div
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: separatorColor || color,
          }}
        />
      )}
      <motion.div
        style={{
          margin: "0 auto",
          ...(isVertical
            ? {
                width: thickness,
                height: length,
                borderLeft: `${thickness}px solid ${color}`,
              }
            : {
                height: thickness,
                width: length,
                borderBottom: `${thickness}px solid ${color}`,
              }),
          ...style,
        }}
      />
      {separators.includes("end") && (
        <motion.div
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: separatorColor || color,
          }}
        />
      )}
    </motion.div>
  );
};

export default AppDivider;
