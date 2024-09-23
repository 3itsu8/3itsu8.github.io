'use client';
import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="site-wrapper"
      variants={variants}
      exit={{
        y: -20,
        opacity: 0,
        filter: 'blur(10px)',
        transition: { ease: 'easeIn', duration: 0.5 },
      }}
      initial={{ opacity: 0, y: -15 }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { type: 'spring', duration: 1.2 },
      }}
    >
      {children}
    </motion.div>
  );
}
