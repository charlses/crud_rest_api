import { connect } from '@/server/db'
import Post from '@/schemas/postSchema'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  await connect()
  try {
    const posts = await Post.find()
    return NextResponse.json(posts, {
      status: 200,
      statusText: 'OK',
      headers: { 'Content-Type': 'application/json' },
      url: req.url
    })
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message, message: 'Internal server error: 500' },
      { status: 500, statusText: 'Internal server error' }
    )
  }
}
