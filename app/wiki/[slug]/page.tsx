import { format, parseISO } from "date-fns";
import { allWikis } from ".contentlayer/generated";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export const generateStaticParams = async () =>
  allWikis.map((wiki) => ({ slug: wiki._raw.flattenedPath.split('/').slice(-1)[0] }));

export const generateMetadata = ({ params }) => {
  const wiki = allWikis.find((wiki) => wiki._raw.flattenedPath.split('/').slice(-1)[0] === params.slug);
  if (!wiki) throw new Error(`Wiki not found for slug: ${params.slug}`);
  return { title: wiki.title };
};

const WikiLayout = ({ params }: { params: { slug: string } }) => {
  const wiki = allWikis.find((wiki) => wiki._raw.flattenedPath.split('/').slice(-1)[0] === params.slug);
  
  if (!wiki) {
    return <div>没有找到内容</div>; 
  }

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={wiki.lastUpdated} className="mb-1 text-xs text-gray-600">
          {format(parseISO(wiki.lastUpdated), "yyyy年MM月dd日")}
        </time>
        <h1 className="text-3xl font-bold">{wiki.title}</h1>
      </div>
      <div className="prose prose-lg prose-indigo mx-auto">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{wiki.body.raw}</ReactMarkdown>
      </div>
    </article>
  );
};

export default WikiLayout;
