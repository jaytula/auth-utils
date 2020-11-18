import React, { useEffect } from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const useInterval = (callback: Function, timeout: number = 1000) => {
  useEffect(() => {
    const interval = setInterval(callback, timeout)
    return () => {
      clearInterval(interval)
    }
  })
}
