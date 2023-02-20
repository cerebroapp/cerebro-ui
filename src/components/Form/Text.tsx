import React, { ReactElement } from 'react'
import Wrapper from './Wrapper'
import styles from './styles.module.css'

interface InputProps {
  label?: string
  value?: string | number
  onChange: any
  description?: string
  type: string
}

const Input = ({ label, value, onChange, description, type }: InputProps): ReactElement => (
  <Wrapper label={label} description={description}>
    <input
      type={type}
      value={value || ''}
      className={styles.input}
      onChange={({ target }) => onChange(target.value)}
    />
  </Wrapper>
)

export default Input
