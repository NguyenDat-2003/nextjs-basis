import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'List Blogs',
  description: 'Test List Blogs'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
