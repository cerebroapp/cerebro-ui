import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const Wrapper = ({ label, description, children }) => (
  <div className={styles.item}>
    {label && <label className={styles.label}>{label}:</label>}
    <div className={label ? styles.itemValue : styles.itemValueWithoutLabel}>
      {children}
      <div className={styles.itemNotice}>{description}</div>
    </div>
  </div>
)

Wrapper.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any
}

export default Wrapper
