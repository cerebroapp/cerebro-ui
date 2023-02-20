import React, { ReactElement } from 'react'
import ReactSelect from 'react-select'
import CreatableSelect from 'react-select/creatable'
import Wrapper from './Wrapper'

interface SelectProps {
  label?: string
  value?: string | number | Array<string | number>
  onChange: any
  description?: string
  options: any
  multi?: boolean
  clearable?: boolean
  creatable?: boolean
}

const Select = ({ label, value, onChange, description, options, multi, clearable, creatable }: SelectProps): ReactElement => {
  const Component = creatable ? CreatableSelect : ReactSelect
  return (
    <Wrapper label={label} description={description}>
      <Component
        isMulti={multi}
        value={value}
        clearable={clearable}
        options={options}
        onChange={(newValue: any) => {
          if (!newValue) {
            return newValue
          }
          const changedValue = multi ? newValue.map((val: any) => val.value) : newValue.value
          onChange(changedValue)
        }}
      />
    </Wrapper>
  )
}

export default Select
