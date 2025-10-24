import React from 'react';
import { Snowflake } from 'lucide-react';
import { motion } from 'framer-motion';

export const RotatingIcon = ({ size = 120 }) => {
  return (
    <div className="relative">
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(180 100% 50% / 0.3), transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Main rotating icon */}
      <motion.div
        className="relative flex items-center justify-center"
        style={{
          width: size,
          height: size,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-xl" />
        <Snowflake
          size={size * 0.6}
          className="text-accent drop-shadow-[0_0_30px_hsl(180,100%,50%)]" 
          strokeWidth={1.5}
        />
      </motion.div>
      
      {/* Inner rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/30"
        animate={{
          rotate: -360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />
    </div>
  );
};