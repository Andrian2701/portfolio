'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  className: string;
}

export const AboutPageImage = ({ src, alt, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="inline-block"
    >
      <Image
        src={src}
        alt={alt}
        quality={100}
        width="0"
        height="0"
        sizes="100vw"
        priority
        className={className}
      />
    </motion.div>
  );
};
