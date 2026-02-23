import AppPills from "@/components/app-pills";
import { FadeInLeft, FadeInRight, FadeInTop } from "@/utils/animation-configs";
import clsx from "clsx";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { useEffect, useState } from "react";

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
  className="rounded-2xl overflow-hidden w-full h-[320px]"
>
  <Image
    src={img}
    alt={alt}
    loading="eager"
    className="w-full h-full object-contain rounded-xl"
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
  img,
  alt,
  pills = [],
  title,
  description,
  align,
  innerRef,
}) {
  const windowWidth = useWindowWidth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <motion.div>
      <div className="flex">
        {align === "left" ? (
          <>
            <Content
              innerRef={innerRef}
              img={img}
              alt={alt}
              pills={pills}
              title={title}
              align={align}
            />
            {mounted && windowWidth >= 1025 && (
              <Label
                align={align}
                description={description}
                innerRef={innerRef}
              />
            )}
          </>
        ) : (
          <>
            {mounted && windowWidth >= 1025 && (
              <Label
                align={align}
                description={description}
                innerRef={innerRef}
              />
            )}

            <Content
              innerRef={innerRef}
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
