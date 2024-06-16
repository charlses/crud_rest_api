'use client'
import { useState, useEffect, useCallback } from 'react'
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
  MessageCircle,
  UploadCloud,
  DownloadCloud,
  Trash2,
  Pencil
} from 'lucide-react'
import FormFields from './form-fields'

export function SettingsForm() {
  const { setApiResponse } = useApiResponse()
  const [model, setModel] = useState<string>('')
  const [method, setMethod] = useState<string>('')
  const [itemList, setItemList] = useState<any[]>([])
  const [selectedItem, setSelectedItem] = useState<string>('')
  const [error, setError] = useState<string>('')

  // Form data for POST and PUT requests
  const [formData, setFormData] = useState<any>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    title: '',
    content: '',
    author: '',
    post: '',
    imageUrl: ''
  })

  // Additional state for storing author items
  const [authorItems, setAuthorItems] = useState<any[]>([])

  const handleMethodChange = (value: string) => {
    setMethod(value)
    setSelectedItem('')
  }

  const fetchItems = useCallback(
    async (model: string) => {
      try {
        const response = await fetch(model)
        const data = await response.json()
        setItemList(data.result)

        // Additional logic for setting authorItems and postItems if model is '/api/comments' and method is 'POST'
        if (
          (model === '/api/comments' || model === '/api/posts') &&
          method === 'POST'
        ) {
          const authorResponse = await fetch('/api/users')
          const authorData = await authorResponse.json()
          setAuthorItems(authorData.result)

          const postResponse = await fetch('/api/posts')
          const postData = await postResponse.json()
          setItemList(postData.result)
        }
      } catch (error) {
        console.error('Error fetching items:', error)
        setError('Error fetching items')
      }
    },
    [method, setItemList, setAuthorItems, setError]
  )

  useEffect(() => {
    if (model) fetchItems(model)
  }, [model, fetchItems])

  const handleModelChange = (value: string) => {
    setModel(value)
    setSelectedItem('')
    fetchItems(value)
  }

  const handleItemIdChange = (value: string) => {
    setSelectedItem(value)
    const selected = itemList.find((item) => item._id === value)
    if (selected) {
      setFormData({
        ...formData,
        ...selected
      })
    }
  }

  const handleFormDataChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData: any) => ({ ...prevData, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevData: any) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const apiUrl = method === 'POST' ? model : `${model}/${selectedItem}`

    try {
      let response
      if (method === 'GET') {
        response = await fetch(apiUrl)
        const data = await response.json()
        console.log('API response:', data)
        setApiResponse(data)
      }
      if (method === 'DELETE') {
        response = await fetch(apiUrl, { method: 'DELETE' })
        console.log('API response:', response)
        setSelectedItem('')
        setApiResponse(response)
      }
      if (method === 'POST' || method === 'PUT') {
        response = await fetch(apiUrl, {
          method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        const data = await response.json()
        console.log('API response:', data)
        setApiResponse(data)
      }
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        title: '',
        content: '',
        author: '',
        post: '',
        imageUrl: ''
      })
    } catch (error) {
      console.error('Error making API request:', error)
      setError('Error making API request')
    }
  }

  return (
    <form
      className='grid w-full items-start gap-6 overflow-auto p-4 pt-0'
      onSubmit={handleSubmit}
    >
      <fieldset className='grid gap-6 rounded--lg border p-4'>
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
        {method !== 'POST' && (
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
                    {item.firstname || item.title} ID: ${item._id}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {(method === 'POST' || (method === 'PUT' && selectedItem)) && (
          <FormFields
            model={model}
            method={method}
            itemList={itemList}
            authorItems={authorItems}
            formData={formData}
            handleFormDataChange={handleFormDataChange}
            handleSelectChange={handleSelectChange}
          />
        )}
      </fieldset>

      <Button type='submit' variant='outline'>
        Submit
      </Button>
      {error && <div className='text-red-500'>{error}</div>}
    </form>
  )
}
