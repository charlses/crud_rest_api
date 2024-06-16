import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import CodeBox from '@/components/code-box'

const UserModelDesc = () => {
  return (
    <div className='p-4'>
      {/* Documentation for https://davits-api.vercel.app/api/ysers */}
      <Card>
        <CardContent className='mb-8'>
          <CardHeader>
            <CardTitle>User Schema</CardTitle>
            <CardDescription>
              Model description for the /api/users{' '}
            </CardDescription>
          </CardHeader>
          <CodeBox title='- GET' url='https://davits-api.vercel.app/api/users'>
            {`
  firstname: {
    type: String,
    required: [true, 'Please provide your first name'],
    unique: false
  },
  lastname: {
    type: String,
    required: [true, 'Please provide your last name'],
    unique: false
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide your password'],
    unique: false
  }
                `}
          </CodeBox>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserModelDesc
