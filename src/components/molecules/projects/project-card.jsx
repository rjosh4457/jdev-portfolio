
import clsx from "clsx";
import { motion, useInView } from "motion/react";
import Image from "next/image";;

const Content = ({ img, alt, pills = [], align, innerRef }) => {
  const isInView = useInView(innerRef, { once: true });
  const animation = align === "left" ? FadeInLeft : FadeInRight;
  return (
    <motion.div className="flex flex-col gap-6 xl:w-1/2">
      <motion.div
        ref={innerRef}
        initial={animation.initial}
        animate={isInView ? animation.animate : {}}
        transition={{ duration: 0.5 }}
        className="rounded-2xl overflow-hidden w-full aspect-auto"
      >
        <Image
          src={img}
          alt={alt}
          loading="eager"
          className="rounded-xl object-cover"
        />
      </motion.div>

      <motion.div className="flex flex-wrap gap-4">
        {pills.map((p, i) => (
          <AppPills key={i} label={p} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const Label = ({ description, align, innerRef, className, props }) => {
  const isInView = useInView(innerRef, { once: true });
  return (
    <motion.div
      {...props}
      ref={innerRef}
      initial={FadeInTop.initial}
      animate={isInView ? FadeInTop.animate : {}}
      transition={{ duration: 0.5 }}
      className={clsx(
        className,
        "flex-1",
        align === "left" ? "ml-10" : "mr-10"
      )}
    >
      <motion.h1 className="text-md">{description}</motion.h1>
    </motion.div>
  );
};

export default function ProjectCard({
  onClick,
  ...props
}) {
  return (
    <motion.div
      onClick={onClick}
      className="cursor-pointer"
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex">
        {props.align === "left" ? (
          <>
            <Content {...props} />
            {props.showLabel && <Label {...props} />}
          </>
        ) : (
          <>
            {props.showLabel && <Label {...props} />}
            <Content {...props} />
          </>
        )}
      </div>
    </motion.div>
  );
}