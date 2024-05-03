import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ApolloWrapper } from '@/lib/apollo-wrapper'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js with GraphQL + Apollo',
  description: 'A starter for Next.js with GraphQL and Apollo Client'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  )
}
