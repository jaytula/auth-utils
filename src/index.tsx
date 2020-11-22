import React, { useEffect } from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent: React.FC<Props> = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const useInterval = (callback: () => void, timeout = 1000): void => {
  useEffect(() => {
    const interval = setInterval(callback, timeout)
    return () => {
      clearInterval(interval)
    }
  })
}
