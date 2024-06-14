import { connect } from '@/server/db'
import Comment from '@/schemas/commentSchema'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  await connect()

  try {
    const comments = await Comment.find()
    return NextResponse.json(
      {
        status: 200,
        statusText: 'OK',
        url: req.url,
        message: 'API Request Completed Successfully',
        method: 'GET',
        result: comments
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
    const data = await req.json()
    console.log(data)

    if (!data.content || !data.author || !data.post) {
      return NextResponse.json(
        {
          error: 'Validation error',
          message: 'Content, author, and post are required'
        },
        { status: 400, statusText: 'Bad Request' }
      )
    }

    const newComment = await Comment.create(data)

    return NextResponse.json(
      {
        status: 201,
        statusText: 'OK',
        url: req.url,
        message: 'API Request Completed Successfully',
        method: 'POST',
        result: newComment
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
