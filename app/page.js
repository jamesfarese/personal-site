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
      className="text-gray-500 dark:text-gray-500"
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
    name: 'ReachLink',
    url: 'https://reachlink.com',
    description: '',
    tag: null,
  },
  {
    name: 'Brigadier',
    url: 'https://getbrigadier.com',
    description: '',
    tag: null,
  },
  {
    name: 'Edifi',
    url: 'https://tryedifi.com',
    description: '',
    tag: null,
  },
  {
    name: 'PitLane',
    url: 'https://trypitlane.com',
    description: '',
    tag: null,
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
        <div className="absolute left-6 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 hidden md:flex">
          <div className="text-xs tracking-widest text-gray-500 dark:text-gray-500 rotate-180" style={{ writingMode: 'vertical-rl' }}>
            * losing is learning. learning is winning.
          </div>
          <ArrowSVG />
        </div>

        {/* Main tagline */}
        <div className="max-w-2xl md:ml-20 lg:ml-32">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-6">
            james farese — builder
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
            <span className="block">i build companies.</span>
            <span className="block text-gray-400 dark:text-gray-500">it&apos;s my art.</span>
          </h1>

          <div className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-lg space-y-4">
            <p>
              i&apos;ve spent most of the last sixteen years building{' '}
              <Highlight>things that didn&apos;t exist</Highlight> until i made them.
              companies, products, teams — the whole stack.
            </p>
            <p>
              i think the best companies are{' '}
              <Highlight>expressions of how someone thinks the world should work.</Highlight>{' '}
              that&apos;s what i&apos;m building toward.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 italic">
              * losing is learning. learning is winning.
            </p>
          </div>

          <div className="mt-12 text-xs uppercase tracking-[0.25em] text-gray-400 dark:text-gray-600 flex items-center gap-2">
            scroll to explore
            <span className="text-base">↓</span>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-8">
          selected work
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
          {companies.map((co, i) => (
            <a
              key={i}
              href={co.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-black p-6 hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors group flex flex-col justify-between min-h-[100px]"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-bold uppercase tracking-wider group-hover:underline underline-offset-4 decoration-[#ffe066]">
                  {co.name}
                </span>
                {co.tag && (
                  <span className={`text-xs uppercase tracking-widest px-2 py-0.5 ${
                    co.tag === 'acquired'
                      ? 'bg-[#ffe066] text-black'
                      : 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400'
                  }`}>
                    {co.tag}
                  </span>
                )}
              </div>
              {co.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                  {co.description}
                </p>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* Onedrop Ventures */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-2">
              onedrop ventures
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              i invest in other people&apos;s art, too.
            </p>
          </div>
          <a
            href="https://onedrop.ventures"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors shrink-0"
          >
            onedrop.ventures →
          </a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-black aspect-square flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            recent writing
          </p>
          <Link
            href="/blog"
            className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            all posts →
          </Link>
        </div>
        <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-800">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block py-5 group hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors -mx-2 px-2"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-base group-hover:underline underline-offset-4 decoration-[#ffe066]">
                  {post.title}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap shrink-0">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
              {post.excerpt && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed line-clamp-1">
                  {post.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 lg:px-24 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            james farese — {new Date().getFullYear()}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 italic">
            * losing is learning. learning is winning.
          </p>
        </div>
      </footer>
    </main>
  )
}
