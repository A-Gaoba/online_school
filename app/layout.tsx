import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Online School',
  description: 'Online School website',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
  isDashboard = false,
}: {
  children: React.ReactNode
  isDashboard: boolean
}) {
  return (
    <html lang="en">
      <body>
        <main className=' relative overflow-hidden'>
          {children}
        </main>
      </body>
    </html>
  )
}
