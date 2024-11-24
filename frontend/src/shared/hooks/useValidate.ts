import { useState } from "react"

interface ErrorMessage {
  message: string
}
export const useValidate = <T extends Record<string, string>>(requestData: T) => {
  const [error, setError] = useState<Partial<Record<keyof T, ErrorMessage>>>({})

  const handleValidate = () => {
    const keys: Array<string> = []
    const watchCell: Record<string, string> = {}
    const newErrors: Partial<Record<keyof T, ErrorMessage>> = {}

    Object.keys(requestData).forEach(key => {
      watchCell[key] = requestData[key]
      keys.push(key)
    })

    Object.entries(watchCell).map(([key, value]) => {
      if (!value) {
        newErrors[key as keyof T] = { message: `Поле ${key} обязательное!` }
      }

      keys.push(key)
    })

    setError(newErrors)
    return {
      isError: Object.keys(newErrors).length > 0
    }
  }

  return {
    error,
    handleValidate
  }
}
