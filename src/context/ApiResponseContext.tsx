'use client'
import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode
} from 'react'

interface ApiResponseContextType {
  apiResponse: any
  setApiResponse: Dispatch<SetStateAction<any>>
}

const ApiResponseContext = createContext<ApiResponseContextType | undefined>(
  undefined
)

export const ApiResponseProvider = ({ children }: { children: ReactNode }) => {
  const [apiResponse, setApiResponse] = useState<any>(null)

  return (
    <ApiResponseContext.Provider value={{ apiResponse, setApiResponse }}>
      {children}
    </ApiResponseContext.Provider>
  )
}

export const useApiResponse = (): ApiResponseContextType => {
  const context = useContext(ApiResponseContext)
  if (!context) {
    throw new Error('useApiResponse must be used within an ApiResponseProvider')
  }
  return context
}
