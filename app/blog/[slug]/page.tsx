import { format, parseISO } from "date-fns";
import { allBlogs } from ".contentlayer/generated";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath.split('/').slice(-1)[0] }));

export const generateMetadata = ({ params }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath.split('/').slice(-1)[0] === params.slug);
  if (!blog) throw new Error(`Wiki not found for slug: ${params.slug}`);
  return { title: blog.title };
};

const WikiLayout = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath.split('/').slice(-1)[0] === params.slug);
  
  if (!blog) {
    return <div>没有找到内容</div>; 
  }

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={blog.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(blog.date), "yyyy年MM月dd日")}
        </time>
        <h1 className="text-3xl font-bold">{blog.title}</h1>
      </div>
      <div className="prose prose-lg prose-indigo mx-auto">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{blog.body.raw}</ReactMarkdown>
      </div>
    </article>
  );
};

export default WikiLayout;
