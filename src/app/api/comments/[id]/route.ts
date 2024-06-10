import { connect } from '@/server/db'
import Comment from '@/schemas/commentSchema'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  await connect()
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    console.log(req.body)
    const comment = await Comment.findById(id)
    if (!comment) {
      return NextResponse.json(
        { message: `Comment with id:${id} could not be found` },
        { status: 404, statusText: 'Post not found' }
      )
    }
    return NextResponse.json(comment, {
      status: 200,
      statusText: 'OK',
      url: req.url
    })
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
    const data = await req.json()

    const updatedComment = await Comment.findByIdAndUpdate(id, data, {
      new: true
    })
    if (!updatedComment) {
      return NextResponse.json(
        { message: `Comment with id:${id} could not be found` },
        { status: 404, statusText: 'Comment not found' }
      )
    }
    return NextResponse.json(updatedComment, {
      status: 200,
      statusText: 'OK',
      url: req.url
    })
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
      { message: 'Comment deleted successfully' },
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
