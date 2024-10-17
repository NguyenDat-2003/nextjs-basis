'use client'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react'
import { mutate } from 'swr'

import { toast } from 'react-toastify'

interface IProps {
  show: boolean
  setShow: (value: boolean) => void
  blog: IBlog | null
  setBLog: (value: IBlog | null) => void
}

function UpdateModal({ show, setShow, blog, setBLog }: IProps) {
  const handleClose = () => {
    setShow(false)
    setTitle('')
    setAuthor('')
    setContent('')
    setBLog(null)
  }

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    if (blog && blog.id) {
      setId(blog.id)
      setTitle(blog.title)
      setAuthor(blog.author)
      setContent(blog.content)
    }
  }, [blog])

  const handleSave = () => {
    if (!title || !author || !content) {
      toast.error('Nhập thiếu dữ liệu')
      handleClose()
      return
    }
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, author, content })
    })
      .then((res) => res.json())
      .then((res) => {
        toast.success('Thành công')
        handleClose()
        mutate('http://localhost:8000/blogs')
      })
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Add new Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' placeholder='...' value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Author</Form.Label>
              <Form.Control type='text' placeholder='...' value={author} onChange={(e) => setAuthor(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Content</Form.Label>
              <Form.Control as='textarea' rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateModal
