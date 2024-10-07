'use client'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'

function AppTable({ blogs }: { blogs: IBlog[] }) {
  return (
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
  )
}

export default AppTable
