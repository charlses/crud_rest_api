'use client'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'
import { SettingsForm } from '@/components/settings-form'
import { ModeToggle } from '@/components/theme/theme-toggle'

export function Header() {
  return (
    <header className='sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4'>
      <h1 className='text-xl font-semibold font-mono'>
        David&apos;s API Playground
      </h1>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant='ghost' size='icon' className='md:hidden'>
            <Settings className='size-4' />
            <span className='sr-only'>Settings</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className='max-h-[80vh]'>
          <DrawerHeader>
            <DrawerTitle>Configuration</DrawerTitle>
            <DrawerDescription>
              Configure the settings for API Request
            </DrawerDescription>
          </DrawerHeader>
          <SettingsForm />
        </DrawerContent>
      </Drawer>
      <ModeToggle />
    </header>
  )
}
