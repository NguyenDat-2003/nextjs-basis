'use client'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import CreateModal from './create.modal'
import { useState } from 'react'

function AppTable({ blogs }: { blogs: IBlog[] }) {
  const [show, setShow] = useState(false)

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
                    <Button variant='primary'>View</Button>
                    <Button variant='warning' className='mx-3'>
                      Edit
                    </Button>
                    <Button variant='danger'>Delete</Button>
                  </td>
                </tr>
              </>
            )
          })}
        </tbody>
      </Table>
      <CreateModal show={show} setShow={setShow} />
    </>
  )
}

export default AppTable
