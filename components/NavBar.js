import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-900">
      <Link
        href="/"
        className="text-sm font-mono tracking-tight hover:opacity-60 transition-opacity text-black dark:text-white"
      >
        james farese
      </Link>
      <div className="flex items-center gap-6 text-sm font-mono text-gray-600 dark:text-gray-300">
        <Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors">
          writing
        </Link>
        <a
          href="mailto:james@example.com"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          contact
        </a>
        <DarkModeToggle />
      </div>
    </nav>
  )
}
