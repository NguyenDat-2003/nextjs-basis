'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import AppTable from '~/components/app.tables'

export default function Home() {
  useEffect(() => {
    const fetchListData = async () => {
      const res = await fetch('http://localhost:8000/blogs')
      const data = await res.json()
      console.log(data)
    }
    fetchListData()
  }, [])

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
