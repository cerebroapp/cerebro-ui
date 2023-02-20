import PropTypes from 'prop-types'
import Wrapper from './Wrapper'
import styles from './styles.module.css'

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
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
  description: PropTypes.string,
  type: PropTypes.string.isRequired,
}

export default Input
