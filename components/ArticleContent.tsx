'use client'

import { format, parseISO } from "date-fns";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useTheme } from 'next-themes';

interface ArticleContentProps {
  title: string;
  date: string;
  body: string;
  dateLabel?: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ title, date, body, dateLabel = "lastUpdated" }) => {
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <article className={`py-8 mx-auto max-w-xl ${currentTheme === 'dark' ? 'dark:text-white' : ''}`}>
      <div className="mb-8 text-center">
        <time dateTime={date} className={`mb-1 text-xs ${currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {dateLabel}: {format(parseISO(date), "yyyy-MM-dd")}
        </time>
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <div className={`prose prose-lg mx-auto ${currentTheme === 'dark' ? 'prose-invert' : 'prose-indigo'}`}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{body}</ReactMarkdown>
      </div>
    </article>
  );
};

export default ArticleContent;