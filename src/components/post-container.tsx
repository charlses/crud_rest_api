import { Post } from '../../types'

export const PostsContainer = ({ post }: { post: Post }) => {
  return (
    <div className='flex flex-col gap-4 ' key={post._id}>
      <span className='text-blue-400 '>{'{'}</span>
      <span className='text-green-600'>
        &quot;id&quot;:{' '}
        <span className='text-blue-600  '>&quot;{post._id}&quot;,</span>
      </span>
      <span className='text-green-600'>
        &quot;title&quot;:
        <span className='text-blue-600  '> &quot;{post.title}&quot;</span>,
      </span>
      <span className='text-green-600'>
        &quot;content&quot;:{' '}
        <span className='text-blue-600  '>&quot;{post.content}&quot;</span>,
      </span>
      <span className='text-green-600'>
        &quot;author&quot;:{' '}
        <span className='text-blue-600  '>&quot;{post.author}&quot;</span>,
      </span>
      <span className='text-green-600'>
        &quot;comments&quot;:{' '}
        <span className='text-blue-600  '>
          &quot;{JSON.stringify(post.comments)}&quot;
        </span>
        ,
      </span>
      <span className='text-green-600'>
        &quot;createdAt&quot;: &quot;
        <span className='text-blue-600  '>
          {JSON.stringify(post.createdAt)}&quot;
        </span>
      </span>
      <span className='text-blue-400'>{'},'}</span>
    </div>
  )
}
