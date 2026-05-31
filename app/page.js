import Link from 'next/link'
import TodoWidget from '../components/TodoWidget'
import { getAllPosts } from '../lib/posts'

function Highlight({ children }) {
  return (
    <span style={{ background: '#ffe066', padding: '0 3px', borderRadius: '2px' }}>
      {children}
    </span>
  )
}

function ArrowSVG() {
  return (
    <svg
      width="48"
      height="40"
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-400 dark:text-gray-600"
    >
      <path
        d="M4 36 C8 20, 20 8, 36 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="3 2"
      />
      <path
        d="M30 6 L36 10 L32 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

const companies = [
  {
    name: 'company one',
    description: 'a product that changed how people think about X. built from zero to acquisition in 3 years.',
    year: '2019–2022',
    tag: 'acquired',
  },
  {
    name: 'company two',
    description: 'infrastructure for the next generation of Y. currently scaling.',
    year: '2022–present',
    tag: 'active',
  },
  {
    name: 'company three',
    description: 'a small tool that solves a specific problem really well. profitable from day one.',
    year: '2023–present',
    tag: 'active',
  },
]

export default function Home() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20">
        {/* Todo widget top-right */}
        <div className="absolute top-24 right-6 md:right-16 lg:right-24 z-10">
          <TodoWidget />
        </div>

        {/* Left annotation */}
        <div className="absolute left-6 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 opacity-50 hidden md:flex">
          <div className="writing-mode-vertical text-[10px] tracking-widest text-gray-400 dark:text-gray-600 rotate-180" style={{ writingMode: 'vertical-rl' }}>
            * losing is learning. learning is winning.
          </div>
          <ArrowSVG />
        </div>

        {/* Main tagline */}
        <div className="max-w-2xl md:ml-20 lg:ml-32">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 dark:text-gray-600 mb-6">
            james farese — builder
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
            <span className="block">i build companies.</span>
            <span className="block text-gray-400 dark:text-gray-600">it&apos;s my art.</span>
          </h1>

          <div className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-lg space-y-3">
            <p>
              i&apos;ve spent the last sixteen years building{' '}
              <Highlight>things that didn&apos;t exist</Highlight> until i made them.
              companies, products, teams — the whole stack.
            </p>
            <p>
              i think the best companies are{' '}
              <Highlight>expressions of how someone thinks the world should work.</Highlight>{' '}
              that&apos;s what i&apos;m building toward.
            </p>
            <p className="text-[11px] text-gray-400 dark:text-gray-600 italic">
              * losing is learning. learning is winning.
            </p>
          </div>

          <div className="mt-12 text-[11px] uppercase tracking-[0.25em] text-gray-300 dark:text-gray-700 flex items-center gap-2">
            scroll to explore
            <span className="text-base">↓</span>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-gray-100 dark:border-gray-900">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 dark:text-gray-600 mb-8">
          selected work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-900">
          {companies.map((co, i) => (
            <div
              key={i}
              className="bg-white dark:bg-black p-6 hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider">{co.name}</span>
                <span
                  className={`text-[10px] uppercase tracking-widest px-2 py-0.5 ${
                    co.tag === 'acquired'
                      ? 'bg-[#ffe066] text-black'
                      : 'bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {co.tag}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                {co.description}
              </p>
              <p className="text-[10px] text-gray-300 dark:text-gray-700">{co.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-gray-100 dark:border-gray-900">
        <div className="flex items-center justify-between mb-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 dark:text-gray-600">
            recent writing
          </p>
          <Link
            href="/blog"
            className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-600 hover:text-black dark:hover:text-white transition-colors"
          >
            all posts →
          </Link>
        </div>
        <div className="space-y-0 divide-y divide-gray-100 dark:divide-gray-900">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block py-5 group hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors -mx-2 px-2"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm group-hover:underline underline-offset-4 decoration-[#ffe066]">
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
                <p className="text-xs text-gray-400 dark:text-gray-600 mt-1 leading-relaxed line-clamp-1">
                  {post.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 lg:px-24 py-12 border-t border-gray-100 dark:border-gray-900">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[10px] text-gray-300 dark:text-gray-700">
            james farese — {new Date().getFullYear()}
          </p>
          <p className="text-[10px] text-gray-300 dark:text-gray-700 italic">
            * losing is learning. learning is winning.
          </p>
        </div>
      </footer>
    </main>
  )
}
