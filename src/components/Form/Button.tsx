import React, { ReactElement } from 'react'
import styles from './styles.module.css'

interface ButtonProps {
  label?: string
  onClick: any
  description?: string
}

const Button = ({ label, onClick, description }: ButtonProps): ReactElement => (
  <button
    title={description}
    onClick={({ target }) => onClick(target)}
    className={styles.button}
  >{label}</button>
)

export default Button
