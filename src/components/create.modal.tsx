'use client'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

interface IProps {
  show: boolean
  setShow: (value: boolean) => void
}

function CreateModal({ show, setShow }: IProps) {
  const handleClose = () => {
    setShow(false)
    setTitle('')
    setAuthor('')
    setContent('')
  }

  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleSave = () => {}

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
              <Form.Control type='text' placeholder='...' onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Author</Form.Label>
              <Form.Control type='text' placeholder='...' onChange={(e) => setAuthor(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Content</Form.Label>
              <Form.Control as='textarea' rows={3} onChange={(e) => setContent(e.target.value)} />
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

export default CreateModal
