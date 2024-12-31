'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// This is a mock-up of your content items. Replace with actual data later.
const contentItems = [
  { id: 1, title: 'My First Blog Post', type: 'blog', link: '/blog/first-post' },
  { id: 2, title: 'Nature Photography', type: 'photography', link: '/photography/nature' },
  { id: 3, title: 'Podcast Episode 1', type: 'podcast', link: '/podcast/episode-1' },
  // Add more items as needed
];

const ContentBand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: `${-currentIndex * 100}%` }}
        transition={{ type: 'tween', ease: 'easeInOut' }}
      >
        {contentItems.map((item) => (
          <Link href={item.link} key={item.id} className="flex-shrink-0 w-full">
            <div className="bg-white dark:bg-gray-800 m-2 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <span className={`px-2 py-1 rounded text-sm ${getTagColor(item.type)}`}>
                {item.type}
              </span>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

function getTagColor(type: string) {
  switch (type) {
    case 'blog':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'photography':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'podcast':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  }
}

export default ContentBand;