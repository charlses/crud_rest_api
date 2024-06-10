import { connect } from '@/server/db'
import Post from '@/schemas/postSchema'
import Comment from '@/schemas/commentSchema'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connect()
  try {
    const id = params.id
    const post = await Post.findById(id)
    if (!post) {
      return NextResponse.json(
        { message: `post with id:${id} could not be found` },
        { status: 404, statusText: 'Post not found' }
      )
    }
    return NextResponse.json(post, {
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
    const data = req.body // Spread the update data
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { data },
      { new: true }
    )
    if (!updatedPost) {
      return NextResponse.json(
        { message: `post with id:${id} could not be found` },
        { status: 404, statusText: 'Post not found' }
      )
    }
    return NextResponse.json(updatedPost, {
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
    const deletedPost = await Post.findByIdAndDelete(id)
    if (!deletedPost) {
      return NextResponse.json(
        { message: `post with id:${id} could not be found` },
        { status: 404, statusText: 'Post not found' }
      )
    }
    await Comment.deleteMany({ post: id })
    return NextResponse.json(
      { message: 'Post deleted successfully' },
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
