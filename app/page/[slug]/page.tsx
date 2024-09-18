import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown-light.css';

interface BlogPost {
  content: string;
  frontmatter: {
    title: string;
    date: string;
    description?: string;
  };
}

// 生成静态路径
export async function generateStaticParams() {
  const routes = await import('../../../mdx-content/routes.json');
  return routes.default;
}

// 获取 Markdown 内容
async function getMarkdownContent(slug: string): Promise<BlogPost> {
  const { content, frontmatter } = await import(`../../../mdx-content/${slug}.json`);
  return { content, frontmatter };
}

// 生成元数据
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { frontmatter } = await getMarkdownContent(params.slug);
  return {
    title: frontmatter.title,
    description: frontmatter.description || `Read ${frontmatter.title}`,
  };
}

// 博客页面组件
export default async function BlogPage({ params }: { params: { slug: string } }) {
  const { content, frontmatter } = await getMarkdownContent(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="markdown-body">
        <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
        <p className="text-gray-600 mb-4">Published on: {frontmatter.date}</p>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
