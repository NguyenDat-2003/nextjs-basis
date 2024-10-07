'use client'
import Link from 'next/link'
import AppTable from '~/components/app.tables'

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href='/facebook'>Facebook</Link>
        </li>
        <li>
          <Link href='/youtube'>Youtube</Link>
        </li>
        <li>
          <Link href='/tiktok'>Tiktok</Link>
        </li>
      </ul>
      <AppTable />
    </main>
  )
}
