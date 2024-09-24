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
      }}
      variants={{
        hidden: {
          opacity: 0,
          y: shouldReduceMotion ? 0 : 40,
        },
        visible: {
          opacity: 1,
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
