const React = require('react')
const { default: ReactSelect, Creatable } = require('react-select')
const Wrapper = require('./Wrapper')

const Select = ({ label, value, onChange, description, options, multi, clearable, creatable }) => {
  const Component = creatable ? Creatable : ReactSelect
  return (
    <Wrapper label={label} description={description}>
      <Component
        multi={multi}
        value={value}
        clearable={clearable}
        options={options}
        onChange={newValue => {
          if (!newValue) {
            return newValue
          }
          const changedValue = multi ? newValue.map(val => val.value) : newValue.value
          onChange(changedValue)
        }}
      />
    </Wrapper>
  )
}

Select.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.array,
  ]),
  onChange: React.PropTypes.func.isRequired,
  description: React.PropTypes.string,
  options: React.PropTypes.array.isRequired,
  multi: React.PropTypes.bool,
  clearable: React.PropTypes.bool,
  creatable: React.PropTypes.bool
}

export default Select
