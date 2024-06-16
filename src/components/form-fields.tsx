import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'
import { Textarea } from './ui/textarea'

interface FormFieldsProps {
  model: string
  method: string
  itemList: any[]
  authorItems: any[]
  formData: any
  handleFormDataChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  handleSelectChange: (name: string, value: string) => void
}

const FormFields: React.FC<FormFieldsProps> = ({
  model,
  method,
  itemList,
  authorItems,
  formData,
  handleFormDataChange,
  handleSelectChange
}) => {
  switch (model) {
    case '/api/users':
      return (
        <>
          <div className='grid gap-3'>
            <Label htmlFor='firstname'>First Name</Label>
            <Input
              id='firstname'
              name='firstname'
              value={formData.firstname}
              placeholder='John'
              onChange={handleFormDataChange}
            />
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='lastname'>Last Name</Label>
            <Input
              id='lastname'
              name='lastname'
              placeholder='Doe'
              value={formData.lastname}
              onChange={handleFormDataChange}
            />
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              value={formData.email}
              placeholder='john.doe@example.com'
              onChange={handleFormDataChange}
              type='email'
            />
          </div>
          {method === 'POST' && (
            <div className='grid gap-3'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                name='password'
                value={formData.password}
                placeholder='******'
                onChange={handleFormDataChange}
                type='password'
              />
            </div>
          )}
        </>
      )
    case '/api/posts':
      return (
        <>
          <div className='grid gap-3'>
            <Label htmlFor='title'>Title</Label>
            <Input
              id='title'
              name='title'
              value={formData.title}
              placeholder='title'
              onChange={handleFormDataChange}
            />
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='content'>Content</Label>
            <Textarea
              id='content'
              name='content'
              value={formData.content}
              placeholder='Post contents'
              onChange={handleFormDataChange}
              rows={4}
            />
          </div>
          {method === 'POST' && (
            <>
              <div className='grid gap-3'>
                <Label htmlFor='author'>Author</Label>
                <Select
                  name='author'
                  onValueChange={(value) => handleSelectChange('author', value)}
                >
                  <SelectTrigger
                    id='author-trigger'
                    className='items-start [&_[data-description]]:hidden'
                  >
                    <SelectValue placeholder='Select an author' />
                  </SelectTrigger>
                  <SelectContent>
                    {authorItems.map((item) => (
                      <SelectItem key={item._id} value={item._id}>
                        {item.firstname} {item.lastname}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='imageUrl'>Image URL</Label>
                <Input
                  id='imageUrl'
                  name='imageUrl'
                  value={formData.imageUrl}
                  placeholder='Image URL'
                  onChange={handleFormDataChange}
                />
              </div>
            </>
          )}
        </>
      )
    case '/api/comments':
      return (
        <>
          <div className='grid gap-3'>
            <Label htmlFor='content'>Content</Label>
            <Textarea
              id='content'
              name='content'
              value={formData.content}
              placeholder='Comment contents'
              onChange={handleFormDataChange}
              rows={4}
            />
          </div>
          {method === 'POST' && (
            <>
              <div className='grid gap-3'>
                <Label htmlFor='author'>Author</Label>
                <Select
                  name='author'
                  onValueChange={(value) => handleSelectChange('author', value)}
                >
                  <SelectTrigger
                    id='author-trigger'
                    className='items-start [&_[data-description]]:hidden'
                  >
                    <SelectValue placeholder='Select an author' />
                  </SelectTrigger>
                  <SelectContent>
                    {authorItems.map((item) => (
                      <SelectItem key={item._id} value={item._id}>
                        {item.firstname} {item.lastname}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='post'>Post</Label>
                <Select
                  name='post'
                  onValueChange={(value) => handleSelectChange('post', value)}
                >
                  <SelectTrigger
                    id='post-trigger'
                    className='items-start [&_[data-description]]:hidden'
                  >
                    <SelectValue placeholder='Select a post' />
                  </SelectTrigger>
                  <SelectContent>
                    {itemList.map((item) => (
                      <SelectItem key={item._id} value={item._id}>
                        {item.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
        </>
      )
    default:
      return null
  }
}

export default FormFields
