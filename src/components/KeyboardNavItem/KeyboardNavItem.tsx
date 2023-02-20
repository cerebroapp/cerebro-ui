import React, { ReactElement } from 'react'
import styles from './styles.module.css'

interface KeyboardNavItemProps {
  tagName?: string
  onSelect?: any
  onKeyDown?: any
  className?: string
}

const KeyboardNavItem = ({ tagName, ...props }: KeyboardNavItemProps): ReactElement => {
  let className = styles.item
  className += props.className ? ` ${props.className}` : ''
  const onSelect = props.onSelect || (() => {})
  const onClick = onSelect

  const onKeyDown = (event: any) => {
    if (props.onKeyDown) {
      props.onKeyDown(event)
    }
    const vimO = event.keyCode === 79 && (event.metaKey || event.ctrlKey)
    if (!event.defaultPrevented && (event.keyCode === 13 || vimO)) {
      onSelect()
    }
  }

  const itemProps = {
    className,
    onClick,
    onKeyDown,
    tabIndex: 0,
  }

  return (
    <div {...props} {...itemProps} />
  )
}

export default KeyboardNavItem
