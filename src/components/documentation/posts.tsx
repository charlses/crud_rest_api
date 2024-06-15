import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import CodeBox from '@/components/code-box'

const PostsApiDoc = () => {
  return (
    <div className='p-4'>
      {/* Documentation for https://davits-api.vercel.app/api/posts */}
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>API Documentation:</CardTitle>
          <CardDescription>
            https://davits-api.vercel.app/api/posts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            This endpoint allows you to perform CRUD operations on posts. You
            can retrieve all posts or create a new post using this endpoint.
          </p>
          <h3 className='text-lg font-semibold mb-2'>
            GET - Retrieve All Posts
          </h3>
          <p className='mb-4'>Retrieves all posts from the database.</p>
          <CodeBox title='- GET' url='https://davits-api.vercel.app/api/posts'>
            {`
fetch('https://davits-api.vercel.app/api/posts', {
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
            POST - Create a New Post
          </h3>
          <p className='mb-4'>Creates a new post with the provided data.</p>
          <CodeBox
            title='- POST'
            url='https://davits-api.vercel.app/api/posts '
          >
            {`
fetch('https://davits-api.vercel.app/api/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post Title',
    content: 'New Post Content',
    author: 'Author ID'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
            `}
          </CodeBox>
        </CardContent>
      </Card>

      {/* Documentation for https://davits-api.vercel.app/api/posts/:id */}
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>API Documentation:</CardTitle>
          <CardDescription>
            https://davits-api.vercel.app/api/posts/:id
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            This endpoint allows you to retrieve, update, or delete a specific
            post by its ID.
          </p>
          <h3 className='text-lg font-semibold mb-2'>
            GET - Retrieve a Post by ID
          </h3>
          <p className='mb-4'>Retrieves a specific post by its ID.</p>
          <CodeBox
            title='- GET'
            url='https://davits-api.vercel.app/api/posts/:id'
          >
            {`
fetch('https://davits-api.vercel.app/api/posts/:id', {
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
            PUT - Update a Post by ID
          </h3>
          <p className='mb-4'>
            Updates a specific post by its ID with the provided data.
          </p>
          <CodeBox
            title='- PUT'
            url='https://davits-api.vercel.app/api/posts/:id'
          >
            {`
fetch('https://davits-api.vercel.app/api/posts/:id', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Updated Post Title',
    content: 'Updated Post Content'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
            `}
          </CodeBox>

          <h3 className='text-lg font-semibold mb-2'>
            DELETE - Delete a Post by ID
          </h3>
          <p className='mb-4'>Deletes a specific post by its ID.</p>
          <CodeBox
            title='- DELETE'
            url='https://davits-api.vercel.app/api/posts/:id'
          >
            {`
fetch('https://davits-api.vercel.app/api/posts/:id', {
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

export default PostsApiDoc
