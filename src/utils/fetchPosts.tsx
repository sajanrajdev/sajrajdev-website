import fs from 'fs/promises';
import path from 'path';

export async function fetchWordPressPosts() {
  // Replace with your WordPress API endpoint
  const response = await fetch('https://menteenruta.com/wp-json/wp/v2/posts', { next: { revalidate: 3600 } });
  const posts = await response.json();
  return posts.map((post: any) => ({
    id: post.id,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    date: post.date,
    tags: post.tags.map((tagId: number) => `tag-${tagId}`), // You'll need to fetch tag names separately
    url: post.link,
  }));
}

export async function fetchTechnicalPosts() {
  const filePath = path.join(process.cwd(), 'data', 'technical-posts.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}