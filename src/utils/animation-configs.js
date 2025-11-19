export const FadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1 },
};
export const ScaleUp = {
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

export const FadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};

export const FadeInBottom = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

/** EXIT ANIMATIONS */
export const FadeOutBottom = {
  exit: { opacity: 0, y: 40 },
};
export const FadeOutRight = {
  exit: { opacity: 0, x: 400 },
};
export const FadeOutLeft = {
  exit: { opacity: 0, x: -40 },
};
