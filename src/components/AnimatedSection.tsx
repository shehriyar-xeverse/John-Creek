/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.75
}: AnimatedSectionProps) {
  const directions = {
    up: { y: 35, opacity: 0 },
    down: { y: -35, opacity: 0 },
    left: { x: 35, opacity: 0 },
    right: { x: -35, opacity: 0 },
    fade: { opacity: 0 }
  };

  return (
    <motion.div
      initial={directions[direction]}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // Custom luxury cubic-bezier ease out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function AnimatedList({
  children,
  className = '',
  delay = 0,
  stagger = 0.08
}: AnimatedListProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger
          }
        }
      }}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return (
          <motion.div
            variants={{
              hidden: { y: 25, opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }
              }
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
