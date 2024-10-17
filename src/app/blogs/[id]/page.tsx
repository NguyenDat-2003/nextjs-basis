'use client'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import useSWR, { Fetcher } from 'swr'
import { useRouter } from 'next/navigation'

function DetailBlog({ params }: { params: { id: number } }) {
  const router = useRouter()
  const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url).then((res) => res.json())

  const { data, isLoading } = useSWR(`http://localhost:8000/blogs/${params.id}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  if (isLoading) {
    return <div>...Loading</div>
  }
  return (
    <>
      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Button variant='primary' className='mb-4' onClick={() => router.push('/')}>
          Back
        </Button>
        <Card>
          <Card.Header>{data?.author}</Card.Header>
          <Card.Body>
            <Card.Title>{data?.title}</Card.Title>
            <Card.Text>{data?.content}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default DetailBlog
