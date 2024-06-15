import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import CodeBox from '@/components/code-box'

const UsersApiDoc = () => {
  return (
    <div className='p-4'>
      {/* Documentation for https://davits-api.vercel.app/api/users */}
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>API Documentation:</CardTitle>
          <CardDescription>
            https://davits-api.vercel.app/api/users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            This endpoint allows you to perform CRUD operations on users. You
            can retrieve all users or create a new User using this endpoint.
          </p>
          <h3 className='text-lg font-semibold mb-2'>
            GET - Retrieve All users
          </h3>
          <p className='mb-4'>Retrieves all users from the database.</p>
          <CodeBox title='- GET' url='https://davits-api.vercel.app/api/users'>
            {`
fetch('https://davits-api.vercel.app/api/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
            `}
          </CodeBox>

          <h3 className='text-lg font-semibold mb-2'>
            POST - Create a New User
          </h3>
          <p className='mb-4'>Creates a new User with the provided data.</p>
          <CodeBox title='- POST' url='https://davits-api.vercel.app/api/users'>
            {`
fetch('https://davits-api.vercel.app/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstname: 'New User Name',
    lastname: 'New User Last Name',
    email: 'New User Email',
    password: 'New User Password
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
            `}
          </CodeBox>
        </CardContent>
      </Card>

      {/* Documentation for https://davits-api.vercel.app/api/users/:id */}
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>API Documentation:</CardTitle>
          <CardDescription>
            https://davits-api.vercel.app/api/users/:id
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            This endpoint allows you to retrieve, update, or delete a specific
            User by its ID.
          </p>
          <h3 className='text-lg font-semibold mb-2'>
            GET - Retrieve a User by ID
          </h3>
          <p className='mb-4'>Retrieves a specific User by its ID.</p>
          <CodeBox
            title='- GET'
            url='https://davits-api.vercel.app/api/users/:id'
          >
            {`
fetch('https://davits-api.vercel.app/api/users/:id', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
            `}
          </CodeBox>

          <h3 className='text-lg font-semibold mb-2'>
            PUT - Update a User by ID
          </h3>
          <p className='mb-4'>
            Updates a specific User by its ID with the provided data.
          </p>
          <CodeBox
            title='- PUT'
            url='https://davits-api.vercel.app/api/users/:id'
          >
            {`
fetch('https://davits-api.vercel.app/api/users/:id', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    content: 'Updated User Content'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
            `}
          </CodeBox>

          <h3 className='text-lg font-semibold mb-2'>
            DELETE - Delete a User by ID
          </h3>
          <p className='mb-4'>Deletes a specific User by its ID.</p>
          <CodeBox
            title='- DELETE'
            url='https://davits-api.vercel.app/api/users/:id'
          >
            {`
fetch('https://davits-api.vercel.app/api/users/:id', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
            `}
          </CodeBox>
        </CardContent>
      </Card>
    </div>
  )
}

export default UsersApiDoc
