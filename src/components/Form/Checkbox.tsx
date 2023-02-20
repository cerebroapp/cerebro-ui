import React, { ReactElement } from 'react'
import styles from './styles.module.css'

interface CheckboxProps {
  label?: string
  value?: boolean
  onChange: any
  description?: string
}

const Checkbox = ({ label, value, onChange, description }: CheckboxProps): ReactElement => (
  <div className={styles.item}>
    <div className={styles.itemValueWithoutLabel}>
      <label>
        <input
          type="checkbox"
          checked={value}
          onChange={({ target }) => onChange(target.checked)}
          className={styles.checkbox}
        />
      {label}
      </label>
      <div className={styles.itemNotice}>{description}</div>
    </div>
  </div>
)

export default Checkbox
