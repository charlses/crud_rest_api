import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Header } from '@/components/header'
import { SidebarNavigation } from '@/components/aside'
import { ApiResponseProvider } from '@/components/context/ApiResponseContext'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: "Davit's Blog Api",
  description:
    'An api created by Next.js that provides everything you need to get started with your blog'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ApiResponseProvider>
            <div className='grid h-screen w-full pl-[56px]'>
              <SidebarNavigation />
              <div className='flex flex-col'>
                <Header />
                {children}
              </div>
            </div>
            <Toaster />
          </ApiResponseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
