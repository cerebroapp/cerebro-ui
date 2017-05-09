const React = require('react')
const Wrapper = require('./Wrapper')
const styles = require('./styles.css')

const Input = ({ label, value, onChange, description, type }) => (
  <Wrapper label={label} description={description}>
    <input
      type={type}
      value={value || ''}
      className={styles.input}
      onChange={({ target }) => onChange(target.value)}
    />
  </Wrapper>
)

Input.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  onChange: React.PropTypes.func.isRequired,
  description: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
}

module.exports = Input
