import Link from 'next/link';
import { motion } from 'framer-motion';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  url: string;
}

interface BlogSectionProps {
  title: string;
  posts: Post[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ title, posts }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="flex-shrink-0 w-64 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <Link href={post.url}>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">{new Date(post.date).toLocaleDateString()}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;