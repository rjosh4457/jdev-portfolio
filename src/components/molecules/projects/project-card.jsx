import AppPills from "@/components/app-pills";
import { FadeInLeft, FadeInRight, FadeInTop } from "@/utils/animation-configs";
import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import { useInView } from "motion/react";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const Content = ({ img, alt, pills = [], align, ref }) => {
  const isInView = useInView(ref, { once: true });
  const animation = align === "left" ? FadeInLeft : FadeInRight;

  return (
    <motion.div className="flex flex-col gap-6 xl:w-1/2">
      <motion.div
        ref={ref}
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

const Label = ({ description, align, ref, className, props }) => {
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      {...props}
      ref={ref}
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
  img,
  alt,
  pills = [],
  title,
  description,
  align,
  ref,
}) {
  const windowWidth = useWindowWidth();
  return (
    <motion.div>
      <div className="flex">
        {align === "left" ? (
          <>
            <Content
              ref={ref}
              img={img}
              alt={alt}
              pills={pills}
              title={title}
              align={align}
            />
            {windowWidth >= 1025 && (
              <Label align={align} description={description} ref={ref} />
            )}
          </>
        ) : (
          <>
            {windowWidth >= 1025 && (
              <Label align={align} description={description} ref={ref} />
            )}

            <Content
              ref={ref}
              img={img}
              alt={alt}
              pills={pills}
              title={title}
              align={align}
            />
          </>
        )}
      </div>
    </motion.div>
  );
}
