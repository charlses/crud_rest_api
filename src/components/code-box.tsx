import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

export default function CodeBox({
  children,
  title
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <Card className='w-full max-w-[800px] rounded-xl font-mono mb-6'>
      <CardHeader className='pb-0'>
        <CardTitle className='m-0'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='border-2 m-6 rounded-md'>
        <div className='rounded-md p-4 overflow-auto'>
          <div className='flex items-end justify-end m-0 p-0'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size='icon' variant='ghost' className='h-6 w-6'>
                    <CopyIcon className='h-4 w-4' />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy code</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <pre className='whitespace-pre-wrap break-all '>
            <ScrollArea className='h-[600px] flex flex-col'>
              {children}
            </ScrollArea>
            {/* {JSON.stringify(
              {
                name: 'John Doe',
                email: 'john@example.com',
                phone: '555-1234'
              },
              null,
              2
            )} */}
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}

function CopyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='14' height='14' x='8' y='8' rx='2' ry='2' />
      <path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' />
    </svg>
  )
}
