import { connect } from '@/server/db'
import User from '@/schemas/userSchema'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  await connect()
  try {
    const users = await User.find()
    return NextResponse.json(users, {
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