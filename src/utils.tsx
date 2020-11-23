import { useEffect } from 'react'

export const useInterval = (callback: () => void, timeout = 1000): void => {
  useEffect(() => {
    const interval = setInterval(callback, timeout)
    return () => {
      clearInterval(interval)
    }
  })
}
