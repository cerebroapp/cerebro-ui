const React = require('react')
const styles = require('./styles.css')

const Checkbox = ({ label, value, onChange, description }) => (
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

Checkbox.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired,
  description: React.PropTypes.string,
}

module.exports = Checkbox
