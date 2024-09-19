import Link from 'next/link'
import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto max-w-2xl py-8">
      <h1 className="mb-8 text-3xl font-bold">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/page/${post.slug}`} className="text-blue-600 hover:underline">
              <h2 className="text-xl font-bold">{post.title}</h2>
            </Link>
            <time dateTime={post.date} className="text-xs text-gray-600">
              {new Date(post.date).toLocaleDateString()}
            </time>
            <p className="mt-2 text-gray-700">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
