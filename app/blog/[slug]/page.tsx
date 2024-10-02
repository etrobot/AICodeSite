import { allBlogs } from ".contentlayer/generated";
import dynamic from 'next/dynamic';

const ArticleContent = dynamic(() => import('@/components/ArticleContent'), { ssr: false });

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath.split('/').slice(-1)[0] }));

export const generateMetadata = ({ params }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath.split('/').slice(-1)[0] === params.slug);
  if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`);
  return { title: blog.title };
};

const BlogLayout = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath.split('/').slice(-1)[0] === params.slug);
  
  if (!blog) {
    return <div>No Content</div>; 
  }

  return (
    <ArticleContent
      title={blog.title}
      date={blog.date}
      body={blog.body.raw}
      dateLabel="Published on"
    />
  );
};

export default BlogLayout;
