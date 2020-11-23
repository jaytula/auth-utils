import React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent: React.FC<Props> = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { useInterval } from './utils';
export { default as RefreshModal} from './components/RefreshModal/RefreshModal';
