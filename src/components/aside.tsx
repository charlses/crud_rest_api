'use client'
import {
  SquareTerminal,
  Bot,
  Code2,
  Book,
  Settings2,
  LifeBuoy,
  SquareUser
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SidebarNavigation() {
  const pathname = usePathname()

  return (
    <aside className='inset-y fixed left-0 z-20 flex h-full flex-col border-r'>
      <div className='border-b p-2'>
        <Button variant='outline' size='icon' aria-label='Home'>
          <Code2 className='size-5 fill-foreground' />
        </Button>
      </div>
      <nav className='grid gap-1 p-2'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href='/'>
                <Button
                  variant='ghost'
                  size='icon'
                  className={`rounded-lg ${pathname === '/' ? 'bg-muted' : ''}`}
                  aria-label='Playground'
                >
                  <SquareTerminal className='size-5' />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right' sideOffset={5}>
              Playground
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href='/docs/api'>
                <Button
                  variant='ghost'
                  size='icon'
                  className={`rounded-lg ${
                    pathname === '/docs/api' ? 'bg-muted' : ''
                  }`}
                  aria-label='Documentation'
                >
                  <Book className='size-5' />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right' sideOffset={5}>
              Documentation
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href='/models'>
                <Button
                  variant='ghost'
                  size='icon'
                  className={`rounded-lg ${
                    pathname === '/models' ? 'bg-muted' : ''
                  }`}
                  aria-label='Models'
                >
                  <Bot className='size-5' />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right' sideOffset={5}>
              Models
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className='mt-auto grid gap-1 p-2'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href='/help'>
                <Button
                  variant='ghost'
                  size='icon'
                  className={`mt-auto rounded-lg ${
                    pathname === '/help' ? 'bg-muted' : ''
                  }`}
                  aria-label='Help'
                >
                  <LifeBuoy className='size-5' />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right' sideOffset={5}>
              Help
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href='/account'>
                <Button
                  variant='ghost'
                  size='icon'
                  className={`mt-auto rounded-lg ${
                    pathname === '/account' ? 'bg-muted' : ''
                  }`}
                  aria-label='Account'
                >
                  <SquareUser className='size-5' />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right' sideOffset={5}>
              Account
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  )
}
