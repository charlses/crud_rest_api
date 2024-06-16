import { connect } from '@/server/db'
import Comment from '@/schemas/commentSchema'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connect()
  try {
    const id = params.id
    const comment = await Comment.findById(id)
    if (!comment) {
      return NextResponse.json(
        { message: `Comment with id:${id} could not be found` },
        { status: 404, statusText: 'Post not found' }
      )
    }
    return NextResponse.json(
      {
        status: 200,
        statusText: 'OK',
        url: req.url,
        message: 'API Request Completed Successfully',
        method: 'GET',
        result: comment
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

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connect()
  try {
    const id = params.id
    const { content } = await req.json()

    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { content: content },
      {
        new: true
      }
    )
    if (!updatedComment) {
      return NextResponse.json(
        { message: `Comment with id:${id} could not be found` },
        { status: 404, statusText: 'Comment not found' }
      )
    }
    return NextResponse.json(
      {
        status: 200,
        statusText: 'OK',
        url: req.url,
        message: 'API Request Completed Successfully',
        method: 'PUT',
        result: updatedComment
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connect()
  try {
    const id = params.id
    const deletedComment = await Comment.findByIdAndDelete(id)
    if (!deletedComment) {
      return NextResponse.json(
        { message: `Comment with id:${id} could not be found` },
        { status: 404, statusText: 'Comment not found' }
      )
    }
    return NextResponse.json(
      {
        status: 200,
        statusText: 'OK',
        url: req.url,
        method: 'DELETE',
        message: 'Comment deleted successfully'
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
