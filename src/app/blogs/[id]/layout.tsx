import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Detail Blog',
  description: 'Test Detail Blog'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
