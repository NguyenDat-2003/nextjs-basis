'use client'
import { useRouter } from 'next/navigation'
function Facebook() {
  const router = useRouter()

  return (
    <>
      <p>facebook</p>
      <button type='button' onClick={() => router.push('/')}>
        Back
      </button>
    </>
  )
}

export default Facebook
