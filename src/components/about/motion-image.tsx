'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const MotionImage = ({ src }: { src: string }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.9,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: 'easeOut',
          },
        },
      }}
    >
      <Image
        src={src}
        alt="About image"
        width={200}
        quality={100}
        height={200}
        className="rounded-lg w-full max-w-[250px] sm:max-w-[300px] max-h-[400px] object-cover mx-auto"
      />
    </motion.div >
  );
};
