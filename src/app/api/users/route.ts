import { connect } from '@/server/db'
import User from '@/schemas/userSchema'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  await connect()
  try {
    const users = await User.find()
    if (!users) {
      return NextResponse.json(
        { message: 'No users found' },
        { status: 404, statusText: 'No users found' }
      )
    }
    return NextResponse.json(
      {
        status: 200,
        statusText: 'OK',
        url: req.url,
        message: 'API Request Completed Successfully',
        method: 'GET',
        result: users
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

    if (!data.firstname || !data.lastname || !data.email || !data.password) {
      return NextResponse.json(
        { error: 'Validation error', message: 'All fields are required' },
        { status: 400, statusText: 'Bad Request' }
      )
    }

    const existingUser = await User.findOne({ email: data.email })
    if (existingUser) {
      return NextResponse.json(
        {
          error: 'Validation error',
          message: 'User already exists!',
          status: 400,
          statusText: 'Bad Request',
          method: 'POST'
        },
        { status: 400, statusText: 'Bad Request' }
      )
    }
    const newUser = await User.create(data)
    return NextResponse.json(
      {
        status: 201,
        statusText: 'OK',
        url: req.url,
        message: 'API Request Completed Successfully',
        method: 'POST',
        result: newUser
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
