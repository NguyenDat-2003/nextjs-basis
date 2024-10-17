'use client'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import CreateModal from './create.modal'
import { useState } from 'react'
import UpdateModal from './update.modal'
import Link from 'next/link'
import { mutate } from 'swr'
import { toast } from 'react-toastify'

function AppTable({ blogs }: { blogs: IBlog[] }) {
  const [show, setShow] = useState<boolean>(false)
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false)
  const [blog, setBLog] = useState<IBlog | null>(null)

  const handleEdit = (data: IBlog) => {
    setBLog(data)
    setShowModalUpdate(true)
  }

  const handleDelete = (id: number) => {
    let text = 'Bạn có chắc muốn xóa?'
    if (confirm(text) == true) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      }).then(() => {
        toast.success('Xóa thành công')
        mutate('http://localhost:8000/blogs')
      })
    } else {
      // toast.warning('Hủy hành động xóa')
    }
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <h3>Table Blogs</h3>
        <Button variant='success' onClick={() => setShow(true)}>
          Add new
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>
                    <Link href={`/blogs/${item.id}`}>
                      <Button variant='primary'>View</Button>
                    </Link>
                    <Button variant='warning' className='mx-3' onClick={() => handleEdit(item)}>
                      Edit
                    </Button>
                    <Button variant='danger' onClick={() => handleDelete(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              </>
            )
          })}
        </tbody>
      </Table>
      <CreateModal show={show} setShow={setShow} />
      <UpdateModal show={showModalUpdate} setShow={setShowModalUpdate} blog={blog} setBLog={setBLog} />
    </>
  )
}

export default AppTable
