'use client'
import { useRef } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function CodeBox({
  children,
  title,
  url
}: {
  children: React.ReactNode
  title: string
  url: string
}) {
  const preRef = useRef<HTMLPreElement>(null)

  const copyToClipboard = () => {
    if (preRef.current) {
      navigator.clipboard.writeText(preRef.current.innerText)
      toast.success('Code copied to clipboard')
    }
  }

  return (
    <Card className='w-full max-w-[800px] rounded-xl font-mono mb-5'>
      <CardHeader className='pb-4'>
        <CardTitle className='m-0 p-0'>{title}</CardTitle>
        <CardDescription>{url}</CardDescription>
      </CardHeader>
      <CardContent className='ml-5 p-0'>
        <div className='rounded-lg overflow-auto'>
          <ScrollArea className='h-[300px] flex flex-col'>
            <div className='mb-[-40px] bg-background absolute right-3'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size='icon'
                      variant='outline'
                      className='h-6 w-6'
                      onClick={copyToClipboard}
                    >
                      <CopyIcon className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy Code</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <pre ref={preRef} className='whitespace-pre-wrap break-all'>
              {children}
            </pre>
          </ScrollArea>
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
