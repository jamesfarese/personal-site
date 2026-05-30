import { getAllPosts, getPost } from '../../../lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  return {
    title: `${post.title} — james farese`,
    description: post.excerpt || '',
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = getPost(slug)

  return (
    <main className="px-6 md:px-16 lg:px-24 pt-32 pb-24">
      <div className="max-w-xl">
        <Link
          href="/blog"
          className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-600 hover:text-black dark:hover:text-white transition-colors mb-8 inline-block"
        >
          ← all writing
        </Link>

        <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-3">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <article className="prose-mono">
          <MDXRemote
            source={post.content}
            components={{
              h1: (props) => (
                <h1
                  className="text-2xl font-bold mt-8 mb-4 first:mt-0"
                  {...props}
                />
              ),
              h2: (props) => (
                <h2
                  className="text-lg font-bold mt-8 mb-3 uppercase tracking-wide"
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  className="text-base font-bold mt-6 mb-2"
                  {...props}
                />
              ),
              p: (props) => (
                <p
                  className="text-sm leading-relaxed mb-4 text-gray-700 dark:text-gray-300"
                  {...props}
                />
              ),
              a: (props) => (
                <a
                  className="underline underline-offset-4 decoration-[#ffe066] hover:decoration-black dark:hover:decoration-white transition-colors"
                  {...props}
                />
              ),
              strong: (props) => (
                <strong
                  className="font-bold text-black dark:text-white"
                  {...props}
                />
              ),
              em: (props) => (
                <em
                  className="italic text-gray-600 dark:text-gray-400"
                  {...props}
                />
              ),
              ul: (props) => (
                <ul
                  className="list-none space-y-1 mb-4 text-sm text-gray-700 dark:text-gray-300"
                  {...props}
                />
              ),
              li: (props) => (
                <li
                  className="before:content-['—'] before:mr-2 before:text-gray-300 dark:before:text-gray-700"
                  {...props}
                />
              ),
              hr: () => (
                <hr className="my-8 border-gray-100 dark:border-gray-900" />
              ),
              blockquote: (props) => (
                <blockquote
                  className="border-l-2 border-[#ffe066] pl-4 my-4 text-sm italic text-gray-500 dark:text-gray-400"
                  {...props}
                />
              ),
            }}
          />
        </article>

        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-900">
          <p className="text-[10px] text-gray-300 dark:text-gray-700 italic">
            * losing is learning. learning is winning.
          </p>
        </div>
      </div>
    </main>
  )
}
