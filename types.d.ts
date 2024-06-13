// types.d.ts

export type Comment = {
  _id: string
  content: string
  post: string
  author: string
  createdAt: Date
}

export type Post = {
  _id: string
  title: string
  content: string
  author: string
  comments: Comment[]
  createdAt: Date
}

export type User = {
  _id: string
  firstname: string
  lastname: string
  email: string
  password: string
  posts: Post[]
  comments: Comment[]
}
