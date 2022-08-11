import { Variants } from "framer-motion";

export const animate: Variants = {
  hidden: {
    opacity: 0,
    x: "50%",
    zIndex: -1,
  },
  visible: {
    opacity: 1,
    x: 0,
    zIndex: 2000,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    x: "-50%",
    // transition: {
    //   type: "tween",
    //   duration: 0.4,
    //   ease: "easeInOut",
    // },
  },
};
