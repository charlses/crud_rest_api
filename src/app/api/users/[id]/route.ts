import { connect } from '@/server/db'
import User from '@/schemas/userSchema'
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
    const user = await User.findById(id)
    if (!user) {
      return NextResponse.json(
        { message: `User with id:${id} could not be found` },
        { status: 404, statusText: 'User not found' }
      )
    }
    return NextResponse.json(
      {
        status: 200,
        statusText: 'OK',
        url: req.url,
        message: 'API Request Completed Successfully',
        method: 'GET',
        result: user
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
    const data = await req.json()

    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true })
    if (!updatedUser) {
      return NextResponse.json(
        { message: `User with id:${id} could not be found` },
        { status: 404, statusText: 'User not found' }
      )
    }
    return NextResponse.json(
      {
        status: 200,
        statusText: 'OK',
        url: req.url,
        message: 'API Request Completed Successfully',
        method: 'PUT',
        result: updatedUser
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
    const deletedUser = await User.findByIdAndDelete(id)
    if (!deletedUser) {
      return NextResponse.json(
        { message: `User with id:${id} could not be found` },
        { status: 404, statusText: 'User not found' }
      )
    }

    await Post.deleteMany({ author: id })
    await Comment.deleteMany({ author: id })

    return NextResponse.json(
      {
        status: 200,
        statusText: 'OK',
        url: req.url,
        message: 'API Request Completed Successfully',
        method: 'DELETE'
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
