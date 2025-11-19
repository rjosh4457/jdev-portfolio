import { useRef } from "react";
import { useInView } from "motion/react";

export default function useAnimation(options = { once: true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options);

  return { ref, isInView };
}
