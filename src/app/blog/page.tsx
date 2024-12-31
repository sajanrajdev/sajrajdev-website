import { Suspense } from 'react';
import BlogContent from '@/components/BlogContent';
import { fetchWordPressPosts, fetchTechnicalPosts } from '@/utils/fetchPosts';

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const technicalPosts = await fetchTechnicalPosts();
  const personalPosts = await fetchWordPressPosts();

  const allTags = Array.from(new Set([
    ...technicalPosts.flatMap(post => post.tags),
    ...personalPosts.flatMap(post => post.tags)
  ]));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogContent 
          technicalPosts={technicalPosts} 
          personalPosts={personalPosts} 
          allTags={allTags} 
        />
      </Suspense>
    </div>
  );
}