import '../styles/globals.css'
import NavBar from '../components/NavBar'

export const metadata = {
  title: 'james farese',
  description: 'i make companies. i think they\'re art.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-mono bg-white dark:bg-black text-black dark:text-white min-h-screen antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
