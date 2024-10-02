import { allWikis } from ".contentlayer/generated";
import dynamic from 'next/dynamic';

const ArticleContent = dynamic(() => import('@/components/ArticleContent'), { ssr: false });

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
    return <div>No Content</div>; 
  }

  return (
    <ArticleContent
      title={wiki.title}
      date={wiki.lastUpdated}
      body={wiki.body.raw}
    />
  );
};

export default WikiLayout;
