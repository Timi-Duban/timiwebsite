import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Timi Duban Website',
  description: 'A page about this Freelance developper',
}

interface RootProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

function RootLayout({children, params}: RootProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar locale={params.locale}/>
        {children}
        </body>
    </html>
  )
}

export default RootLayout;