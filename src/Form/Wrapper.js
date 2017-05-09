const React = require('react')
const styles = require('./styles.css')

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
  label: React.PropTypes.string,
  description: React.PropTypes.string,
  children: React.PropTypes.any
}

module.exports = Wrapper
