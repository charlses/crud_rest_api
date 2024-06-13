'use client'
import { Badge } from '@/components/ui/badge'
import { useApiResponse } from '@/components/context/ApiResponseContext'
import { ScrollArea } from '@/components/ui/scroll-area'
export const Output = () => {
  const { apiResponse } = useApiResponse()

  return (
    <ScrollArea className='relative flex  min-h-[50vh] h-[85vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2'>
      <Badge variant='outline' className='absolute right-3 top-3'>
        Output
      </Badge>
      <div className='flex-1 overflow-auto'>
        <pre className='whitespace-pre-wrap'>
          {apiResponse
            ? JSON.stringify(apiResponse, null, 2)
            : 'No response yet'}
        </pre>
      </div>
    </ScrollArea>
  )
}
