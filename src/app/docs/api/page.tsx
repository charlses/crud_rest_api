import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import PostsApiDoc from '@/components/documentation/posts'
import CommentsApiDoc from '@/components/documentation/comments'
import UsersApiDoc from '@/components/documentation/users'

const DocumentationPage = () => {
  return (
    <Tabs defaultValue='users' className='max-w-[calc(100vw-56px)] md:mr-2'>
      <TabsList className='grid w-full grid-cols-1 md:grid-cols-3 gap-3 mb-20 md:mb-0 mt-2'>
        <TabsTrigger value='users'>/api/users</TabsTrigger>
        <TabsTrigger value='posts'>/api/posts</TabsTrigger>
        <TabsTrigger value='comments'>/api/comments</TabsTrigger>
      </TabsList>
      <TabsContent value='users'>
        <UsersApiDoc />
      </TabsContent>
      <TabsContent value='posts'>
        <PostsApiDoc />
      </TabsContent>
      <TabsContent value='comments'>
        <CommentsApiDoc />
      </TabsContent>
    </Tabs>
  )
}

export default DocumentationPage
