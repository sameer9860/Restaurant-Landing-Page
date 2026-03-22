export const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

export const staggerContainer = (staggerChildren = 0.2, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const scaleUp = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: "easeOut",
    },
  },
});
