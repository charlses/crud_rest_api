import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import UserModelDesc from '@/components/user-model'
import PostModelDesc from '@/components/post-model'
import CommentModelDesc from '@/components/comment-model'

const ModelsPAge = () => {
  return (
    <Tabs defaultValue='users' className='max-w-[calc(100vw-56px)] md:mr-2'>
      <TabsList className='grid w-full grid-cols-1 md:grid-cols-3 gap-3 mb-20 md:mb-0 mt-2'>
        <TabsTrigger value='users'>User Models</TabsTrigger>
        <TabsTrigger value='posts'>Posts Models</TabsTrigger>
        <TabsTrigger value='comments'>Comments Models</TabsTrigger>
      </TabsList>
      <TabsContent value='users'>
        <UserModelDesc />
      </TabsContent>
      <TabsContent value='posts'>
        <PostModelDesc />
      </TabsContent>
      <TabsContent value='comments'>
        <CommentModelDesc />
      </TabsContent>
    </Tabs>
  )
}

export default ModelsPAge
