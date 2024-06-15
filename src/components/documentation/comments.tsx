import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import CodeBox from '@/components/code-box'

const CommentsApiDoc = () => {
  return (
    <div className='p-4'>
      {/* Documentation for https://davits-api.vercel.app/api/comments */}
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>API Documentation:</CardTitle>
          <CardDescription>
            https://davits-api.vercel.app/api/comments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            This endpoint allows you to perform CRUD operations on Comments. You
            can retrieve all Comments or create a new comment using this
            endpoint.
          </p>
          <h3 className='text-lg font-semibold mb-2'>
            GET - Retrieve All Comments
          </h3>
          <p className='mb-4'>Retrieves all Comments from the database.</p>
          <CodeBox
            title='- GET'
            url='https://davits-api.vercel.app/api/comments '
          >
            {`
fetch('https://davits-api.vercel.app/api/comments', {
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
            POST - Create a New Comment
          </h3>
          <p className='mb-4'>Creates a new Comment with the provided data.</p>
          <CodeBox
            title='- POST'
            url='https://davits-api.vercel.app/api/comments'
          >
            {`
fetch('https://davits-api.vercel.app/api/comments', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    content: 'New Comment Content',
    author: 'Author ID',
    post: 'Post ID'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
            `}
          </CodeBox>
        </CardContent>
      </Card>

      {/* Documentation for https://davits-api.vercel.app/api/comments/:id */}
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>API Documentation:</CardTitle>
          <CardDescription>
            https://davits-api.vercel.app/api/comments/:id
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            This endpoint allows you to retrieve, update, or delete a specific
            Comment by its ID.
          </p>
          <h3 className='text-lg font-semibold mb-2'>
            GET - Retrieve a Comment by ID
          </h3>
          <p className='mb-4'>Retrieves a specific Comment by its ID.</p>
          <CodeBox
            title='- GET'
            url='https://davits-api.vercel.app/api/comments/:id'
          >
            {`
fetch('https://davits-api.vercel.app/api/comments/:id', {
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
            PUT - Update a Comment by ID
          </h3>
          <p className='mb-4'>
            Updates a specific Comment by its ID with the provided data.
          </p>
          <CodeBox
            title='- PUT'
            url='https://davits-api.vercel.app/api/comments/:id '
          >
            {`
fetch('https://davits-api.vercel.app/api/comments/:id', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    content: 'Updated Comment Content'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
            `}
          </CodeBox>

          <h3 className='text-lg font-semibold mb-2'>
            DELETE - Delete a Comment by ID
          </h3>
          <p className='mb-4'>Deletes a specific comment by its ID.</p>
          <CodeBox
            title='- DELETE'
            url='https://davits-api.vercel.app/api/comments/:id'
          >
            {`
fetch('https://davits-api.vercel.app/api/comments/:id', {
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

export default CommentsApiDoc
