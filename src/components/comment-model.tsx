import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import CodeBox from '@/components/code-box'

const CommentModelDesc = () => {
  return (
    <div className='p-4'>
      {/* Documentation for https://davits-api.vercel.app/api/posts */}
      <Card>
        <CardContent className='mb-8'>
          <CardHeader>
            <CardTitle>Comment Schema</CardTitle>
            <CardDescription>
              Model description for the /api/comments{' '}
            </CardDescription>
          </CardHeader>
          <CodeBox
            title='- GET'
            url='https://davits-api.vercel.app/api/comments'
          >
            {`
    title: {
      type: String,
      required: [true, 'Please provide the title of the post'],
      unique: false
    },
    content: {
      type: String,
      required: [true, 'Please provide the content of the post'],
      unique: false
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    imageUrl: {
      type: String,
      required: [true, 'Please provide the image url of the post'],
      unique: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
                `}
          </CodeBox>
        </CardContent>
      </Card>
    </div>
  )
}

export default CommentModelDesc
