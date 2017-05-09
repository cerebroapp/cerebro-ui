const React = require('react')
const styles = require('./styles.css')

const KeyboardNavItem = ({ tagName, ...props }) => {
  let className = styles.item
  className += props.className ? ` ${props.className}` : ''
  const onSelect = props.onSelect || (() => {})
  const onClick = onSelect
  const onKeyDown = (event) => {
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
  const TagName = tagName || 'div'
  return (
    <TagName {...props} {...itemProps} />
  )
}

KeyboardNavItem.propTypes = {
  className: React.PropTypes.string,
  tagName: React.PropTypes.string,
  onSelect: React.PropTypes.func,
  onKeyDown: React.PropTypes.func,
}

module.exports = KeyboardNavItem
