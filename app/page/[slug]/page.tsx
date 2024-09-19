import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer2/mdx'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const Content = getMDXComponent(post.body.code)

  return (
    <article className="mx-auto max-w-2xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="text-xs text-gray-600">
          {new Date(post.date).toLocaleDateString()}
        </time>
      </div>
      <div className="prose prose-lg">
        <Content />
      </div>
    </article>
  )
}
