/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.99 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1], // Custom premium ease-out
      }}
      className="w-full flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}
