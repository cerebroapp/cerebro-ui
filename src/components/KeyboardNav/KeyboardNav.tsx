import React, { ReactElement } from 'react'
import { focusableSelector } from '../utils'

/**
 * Focus element with index from elements array.
 *   If `index` >= `elements.length` then first element is selected;
 *   If `index` <= 0 then last element is selected.
 *
 * @param  {Array<DOMElement>} elements
 * @param  {Integer} index
 */
const moveSelectionTo = (elements, index) => {
  let nextIndex = index
  if (index < 0) {
    nextIndex = elements.length - 1
  } else if (index >= elements.length) {
    nextIndex = 0
  }
  elements[nextIndex].focus()
}

const vimKeyCodes = {
  h: 72,
  j: 74,
  k: 75,
  l: 76
}

const isVimMode = (event) => (key) => (
  vimKeyCodes[key] === event.keyCode && (event.metaKey || event.ctrlKey)
)

/**
 * Handler keydown in keyboard navigation component
 *
 * @param  {KeyboardEvent} event
 */
const onKeyDown = (event) => {
  const { target, keyCode } = event
  const isVimKey = isVimMode(event)
  if (keyCode === 37 || isVimKey('h')) {
    // Move control back to main list when ← is clicked or cmd/ctrl+h
    const mainInput = document.querySelector('#main-input')
    const position = mainInput.value.length
    mainInput.focus()
    mainInput.setSelectionRange(position, position)
    event.preventDefault()
    event.stopPropagation()
    return false
  }
  if (keyCode !== 40 && keyCode !== 38 && !isVimKey('j') && !isVimKey('k')) {
    return false
  }

  // Get all focusable element in element
  const focusable = document.querySelectorAll(focusableSelector)

  // Get index of currently focused element
  const index = Array.prototype.findIndex.call(focusable, (el) => el === target)

  if (keyCode === 40 || isVimKey('j')) {
    // Select next focusable element when arrow down clicked
    moveSelectionTo(focusable, index + 1)
    event.stopPropagation()
  } else if (keyCode === 38 || isVimKey('k')) {
    // Select previous focusable element when arrow down clicked
    moveSelectionTo(focusable, index - 1)
    event.stopPropagation()
  }
}

interface KeyboardNavProps {
  children: React.ReactNode
}

const KeyboardNav = ({ children }: KeyboardNavProps): ReactElement => (
  <div onKeyDown={onKeyDown}>
    {children}
  </div>
)

export default KeyboardNav
