import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  
  if (!post) {
    return <div>Nothing here</div>; 
  }

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div className="prose prose-lg prose-indigo mx-auto">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.body.raw}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostLayout;
