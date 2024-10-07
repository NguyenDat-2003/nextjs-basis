'use client'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import AppFooter from '~/components/app.footer'
import AppHeader from '~/components/app.navbars'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppHeader />
        <Container>{children}</Container>
        <AppFooter />
      </body>
    </html>
  )
}
