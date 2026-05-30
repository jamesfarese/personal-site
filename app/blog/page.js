import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'

export const metadata = {
  title: 'writing — james farese',
  description: 'essays on building, thinking, and the overlap between art and commerce.',
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main className="px-6 md:px-16 lg:px-24 pt-32 pb-20 max-w-2xl">
      <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 dark:text-gray-600 mb-2">
        writing
      </p>
      <h1 className="text-2xl font-bold mb-2">james farese</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-12 leading-relaxed">
        essays on building, thinking, and the weird overlap between{' '}
        <span style={{ background: '#ffe066', padding: '0 3px', borderRadius: '2px' }}>
          art and commerce.
        </span>
      </p>

      <div className="space-y-0 divide-y divide-gray-100 dark:divide-gray-900">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block py-6 group hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors -mx-2 px-2"
          >
            <div className="flex items-baseline justify-between gap-4 mb-1">
              <span className="text-sm font-medium group-hover:underline underline-offset-4 decoration-[#ffe066]">
                {post.title}
              </span>
              <span className="text-[10px] text-gray-400 dark:text-gray-600 whitespace-nowrap shrink-0">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
            {post.excerpt && (
              <p className="text-xs text-gray-400 dark:text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </Link>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-900">
        <p className="text-[10px] text-gray-300 dark:text-gray-700 italic">
          * losing is learning. learning is winning.
        </p>
      </div>
    </main>
  )
}
