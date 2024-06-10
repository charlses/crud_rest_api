import { NextRequest, NextResponse } from 'next/server'

// Set allowed origins to accept requests from any origin
const allowedOrigins = ['*']

// Define CORS options to accept any header
const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': '*'
}

export function middleware(request: NextRequest) {
  // Allow requests from any origin
  const origin = '*'

  // Handle preflighted requests
  const isPreflight = request.method === 'OPTIONS'

  if (isPreflight) {
    const preflightHeaders = {
      'Access-Control-Allow-Origin': origin,
      ...corsOptions
    }
    return NextResponse.json({}, { headers: preflightHeaders })
  }

  // Handle simple requests
  const response = NextResponse.next()

  // Allow requests from any origin
  response.headers.set('Access-Control-Allow-Origin', origin)

  // Set headers to accept any header
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  return response
}

export const config = {
  matcher: '/api/:path*'
}
