import Header from '@/components/layout/header/index'
import Footer from '@/components/layout/footer/index'
import Main from '@/components/layout/main/index'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Knocking',
  description: 'Knocking website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="rus">
      <body className={inter.className}>
        <Header />
        <Main>
          {children}
        </Main>          
        <Footer />
      </body>
    </html>
  )
}
