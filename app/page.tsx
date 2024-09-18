import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), 'markdown');

// 获取所有博客文章的文件名
export default async function BlogPage() {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
