'use client'
import React, { useState, useEffect } from 'react'
import { useApiResponse } from '@/components/context/ApiResponseContext'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  Users,
  Newspaper,
  UploadCloud,
  MessageCircle,
  DownloadCloud,
  Trash2,
  Pencil
} from 'lucide-react'

export function SettingsForm() {
  const { setApiResponse } = useApiResponse()
  const [model, setModel] = useState<string>('')
  const [method, setMethod] = useState<string>('')
  const [itemList, setItemList] = useState<any[]>([])
  const [selectedItem, setSelectedItem] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleModelChange = (value: string) => {
    setModel(value)
    setSelectedItem('')
    fetchItems(value)
  }

  const handleMethodChange = (value: string) => {
    setMethod(value)
    setSelectedItem('')
  }

  const fetchItems = async (model: string) => {
    try {
      const response = await fetch(model)
      const data = await response.json()
      setItemList(data.result)
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  }

  useEffect(() => {
    if (model) fetchItems(model)
  }, [model])

  const handleItemIdChange = (value: string) => setSelectedItem(value)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const apiUrl = `${model}/${selectedItem}`

    try {
      let response
      if (method === 'GET') {
        response = await fetch(apiUrl)
        const data = await response.json()
        console.log('API response:', data)
        setApiResponse(data)
      } else if (method === 'DELETE') {
        response = await fetch(apiUrl, { method: 'DELETE' })
        console.log('API response:', response)
        setSelectedItem('')
        setApiResponse(response)
      }
    } catch (error) {
      setError(`Error making API request: ${error}`)
    }
  }

  return (
    <form
      className='grid w-full items-start gap-6 overflow-auto p-4 pt-0'
      onSubmit={handleSubmit}
    >
      <fieldset className='grid gap-6 rounded-lg border p-4'>
        <legend className='-ml-1 px-1 text-sm font-medium'>Settings</legend>
        <div className='grid gap-3'>
          <Label htmlFor='model'>Model</Label>
          <Select onValueChange={handleModelChange}>
            <SelectTrigger
              id='model-trigger'
              className='items-start [&_[data-description]]:hidden'
            >
              <SelectValue placeholder='Select a model' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='/api/users'>
                <div className='flex items-start gap-3 text-muted-foreground'>
                  <Users className='size-5' />
                  <div className='grid gap-0.5'>
                    <p>
                      User{' '}
                      <span className='font-medium text-foreground'>Model</span>
                    </p>
                    <p className='text-xs' data-description>
                      A sample model of users, that is used in the API
                    </p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value='/api/posts'>
                <div className='flex items-start gap-3 text-muted-foreground'>
                  <Newspaper className='size-5' />
                  <div className='grid gap-0.5'>
                    <p>
                      Posts{' '}
                      <span className='font-medium text-foreground'>Model</span>
                    </p>
                    <p className='text-xs' data-description>
                      A sample model of posts, that is used in the API
                    </p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value='/api/comments'>
                <div className='flex items-start gap-3 text-muted-foreground'>
                  <MessageCircle className='size-5' />
                  <div className='grid gap-0.5'>
                    <p>
                      Comments{' '}
                      <span className='font-medium text-foreground'>Model</span>
                    </p>
                    <p className='text-xs' data-description>
                      A sample model of comments, that is used in the API
                    </p>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='grid gap-3'>
          <Label htmlFor='method'>Method</Label>
          <Select onValueChange={handleMethodChange}>
            <SelectTrigger
              id='method-trigger'
              className='items-start [&_[data-description]]:hidden'
            >
              <SelectValue placeholder='Select a method' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='GET'>
                <div className='flex items-start gap-3 text-muted-foreground'>
                  <DownloadCloud className='size-5' />
                  <div className='grid gap-0.5'>
                    <p>
                      GET{' '}
                      <span className='font-medium text-foreground'>
                        Request
                      </span>
                    </p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value='POST'>
                <div className='flex items-start gap-3 text-muted-foreground'>
                  <UploadCloud className='size-5' />
                  <div className='grid gap-0.5'>
                    <p>
                      POST{' '}
                      <span className='font-medium text-foreground'>
                        Request
                      </span>
                    </p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value='PUT'>
                <div className='flex items-start gap-3 text-muted-foreground'>
                  <Pencil className='size-5' />
                  <div className='grid gap-0.5'>
                    <p>
                      PUT{' '}
                      <span className='font-medium text-foreground'>
                        Request
                      </span>
                    </p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value='DELETE'>
                <div className='flex items-start gap-3 text-muted-foreground'>
                  <Trash2 className='size-5' />
                  <div className='grid gap-0.5'>
                    <p>
                      DELETE{' '}
                      <span className='font-medium text-foreground'>
                        Request
                      </span>
                    </p>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='grid gap-3'>
          <Label htmlFor='item-id'>Item ID</Label>
          <Select onValueChange={handleItemIdChange}>
            <SelectTrigger
              id='item-id-trigger'
              className='items-start [&_[data-description]]:hidden'
            >
              <SelectValue placeholder='Select an item' />
            </SelectTrigger>
            <SelectContent>
              {itemList.map((item) => (
                <SelectItem key={item._id} value={item._id}>
                  {item.firstname || item.title} `ID: ${item._id}`
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </fieldset>

      <Button type='submit' variant='outline'>
        Submit
      </Button>
      {error && <div className='text-red-500'>{error}</div>}
    </form>
  )
}
