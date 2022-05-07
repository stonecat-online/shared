import * as React from "react";
// import {
//   motion,
//   useViewportScroll,
//   useTransform,
// } from "framer-motion/dist/framer-motion";
// import { Wrapper, Number } from "./CircularCounter.styles";

// const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

// return (
//   <motion.div
//     style={{ scale }}
//   >
//     <motion.div
//       style={{
//         scaleY: scrollYProgress
//       }}
//     />
//   </motion.div>
// )

const icon = {
  hidden: {
    opacity: 1,
    pathLength: 0,
    // fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    // fill: "rgba(255, 255, 255, 1)"
  },
};

const CircularCounter = ({ children }) => {
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     console.log(scale);
  //   }, 200);
  // }, [scrollYProgress]);

  // console.clear();

  return (
    <div>test</div>
    // <Wrapper>
    //   <Number>2</Number>

    //   <motion.svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 100 100"
    //     className="circle-wrapper"
    //   >
    //     <motion.path
    //       className="background-circle"
    //       d="M2,50a48,48 0 1,0 96,0a48,48 0 1,0 -96,0"
    //       fill="none"
    //     />

    //     <motion.path
    //       className="progress-circle"
    //       d="M2,50a48,48 0 1,0 96,0a48,48 0 1,0 -96,0"
    //       initial="hidden"
    //       animate="visible"
    //       variants={icon}
    //       fill="none"
    //       transition={{
    //         default: { duration: 2, ease: "easeInOut" },
    //       }}
    //     />
    //   </motion.svg>
    // </Wrapper>
  );
};

export default CircularCounter;
