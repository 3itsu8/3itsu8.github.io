'use client';
import { motion, useReducedMotion } from 'framer-motion';
import React, {
  ComponentPropsWithoutRef,
  createContext,
  useContext,
} from 'react';

const StaggerContext = createContext(false);

const viewport = { once: true, margin: '0px 0px -120px' };

export function FadeIn(props: ComponentPropsWithoutRef<typeof motion.div>) {
  const shouldReduceMotion = useReducedMotion();

  const isStagger = useContext(StaggerContext);

  return (
    <motion.div
      transition={{
        duration: 0.5,
        ease: 'easeIn',
      }}
      variants={{
        hidden: {
          opacity: 0,
          filter: 'blur(8px)',
          y: shouldReduceMotion ? 0 : 30,
        },
        visible: {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
        },
      }}
      {...(isStagger
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  );
}
