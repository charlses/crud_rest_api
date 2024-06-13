import { SettingsForm } from '@/components/settings-form'
import { Output } from '@/components/output'

export default function Home() {
  return (
    <main className='grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3'>
      <div className='relative hidden flex-col items-start gap-8 md:flex'>
        <SettingsForm />
      </div>
      <Output />
    </main>
  )
}
