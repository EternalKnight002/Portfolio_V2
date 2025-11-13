'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import NavBar from '../components/NavBar'
import ThemeToggle from '../components/ThemeToggle'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-1">
              {children}
            </main>
            <footer className="py-8">
              <div className="container px-4">
                <div className="text-center text-sm text-gray-400">© {new Date().getFullYear()} Your Name — Developer</div>
              </div>
            </footer>
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
