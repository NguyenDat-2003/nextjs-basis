'use client'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AppFooter from '~/components/app.footer'
import AppHeader from '~/components/app.header'

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
        <ToastContainer hideProgressBar autoClose={1000} />
      </body>
    </html>
  )
}
