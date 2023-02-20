import React, { ReactElement } from 'react'
import styles from './styles.module.css'

interface WrapperProps {
  label?: string
  description?: string
  children: any
}

const Wrapper = ({ label, description, children }: WrapperProps): ReactElement => (
  <div className={styles.item}>
    {label && <label className={styles.label}>{label}:</label>}
    <div className={label ? styles.itemValue : styles.itemValueWithoutLabel}>
      {children}
      <div className={styles.itemNotice}>{description}</div>
    </div>
  </div>
)

export default Wrapper
