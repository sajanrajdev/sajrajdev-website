'use client';

import { useState } from 'react';
import BlogSection from '@/components/BlogSection';
import TagFilter from '@/components/TagFilter';

export default function BlogContent({ technicalPosts, personalPosts, allTags }) {
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredTechnicalPosts = technicalPosts.filter(post =>
    selectedTags.length === 0 || post.tags.some(tag => selectedTags.includes(tag))
  );

  const filteredPersonalPosts = personalPosts.filter(post =>
    selectedTags.length === 0 || post.tags.some(tag => selectedTags.includes(tag))
  );

  return (
    <>
      <TagFilter tags={allTags} selectedTags={selectedTags} onTagSelect={setSelectedTags} />
      <BlogSection title="Technical / Crypto" posts={filteredTechnicalPosts} />
      <BlogSection title="Personal" posts={filteredPersonalPosts} />
    </>
  );
}