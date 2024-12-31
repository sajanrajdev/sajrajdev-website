'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContentBand from '@/components/ContentBand';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex justify-center" // Added flex and justify-center
        >
          <Image
            src="/images/profile.png" // Replace with your actual image path
            alt="Saj Rajdev"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl font-bold mb-4"
        >
          Welcome to My Creative Space
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Explore my world of blogs, podcasts, and photography. Here, I share my thoughts, experiences, and creations.
        </motion.p>
      </div>
      <ContentBand />
    </motion.div>
  );
}