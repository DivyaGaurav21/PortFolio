import { m, useReducedMotion } from 'motion/react';

const Reveal = ({ as = 'div', children, className, delay = 0, amount = 0.18 }) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionElement = m[as];

  return (
    <MotionElement
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.62,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionElement>
  );
};

export default Reveal;
