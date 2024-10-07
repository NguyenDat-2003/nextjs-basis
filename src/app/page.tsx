'use client'
import Link from 'next/link'
import useSWR from 'swr'

import AppTable from '~/components/app.tables'

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR('http://localhost:8000/blogs', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  if (!data) {
    return <div>...Loading</div>
  }
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
      <AppTable blogs={data} />
    </main>
  )
}
