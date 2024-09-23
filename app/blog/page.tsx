import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs, Blog } from "contentlayer/generated";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function PostCard(blog: Blog) {
  return (
    <div className="my-8">
      <h2 className="text-xl">
        <Link
          href={blog.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior
        >
          {blog.title}
        </Link>
      </h2>
      <time dateTime={blog.date} className="block mb-2 text-xs text-gray-600">
        {format(parseISO(blog.date), "LLLL d, yyyy")}
      </time>
      <div className="prose prose-sm">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{blog.body.raw}</ReactMarkdown>
      </div>
    </div>
  );
}

export default function Home() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mt-12 max-w-xl py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">Blogs</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
