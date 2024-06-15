import { connect } from '@/server/db'
import Post from '@/schemas/postSchema'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  await connect()
  try {
    const posts = await Post.find()
    return NextResponse.json(
      {
        status: 200,
        statusText: 'OK',
        url: req.url,
        message: 'API Request Completed Successfully',
        method: 'GET',
        result: posts
      },
      {
        status: 200,
        statusText: 'OK',
        url: req.url
      }
    )
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message, message: 'Internal server error: 500' },
      { status: 500, statusText: 'Internal server error' }
    )
  }
}

export async function POST(req: NextRequest) {
  await connect()
  try {
    const data = await req.json() // Await the promise to get the JSON data
    console.log(data) // Debugging line to check the received data

    // Check if all required fields are present
    if (!data.author || !data.title || !data.content || !data.imageUrl) {
      return NextResponse.json(
        {
          error: 'Validation error',
          message: 'Author, title, and content are required'
        },
        { status: 400, statusText: 'Bad Request' }
      )
    }

    const newPost = await Post.create(data)
    return NextResponse.json(
      {
        status: 201,
        statusText: 'Created',
        url: req.url,
        message: 'API Request Completed Successfully',
        method: 'POST',
        result: newPost
      },
      {
        status: 201,
        statusText: 'Created',
        url: req.url
      }
    )
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message, message: 'Internal server error: 500' },
      { status: 500, statusText: 'Internal server error' }
    )
  }
}
