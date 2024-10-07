'use client'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap'

function Facebook() {
  const router = useRouter()

  return (
    <>
      <p>facebook</p>
      <Button variant='primary' onClick={() => router.push('/')}>
        Back
      </Button>
    </>
  )
}

export default Facebook
