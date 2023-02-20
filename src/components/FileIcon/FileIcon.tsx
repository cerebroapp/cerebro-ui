import React from 'react'
import PropTypes from 'prop-types'
import getFileIcon from './getFileIcon'
import { memoize } from 'cerebro-tools'

/**
 * Render icon for provided path.
 * It will render the same icon, that you see in Finder
 *
 * @param  {String} options.className
 * @param  {String} options.path
 * @return {Function}
 */
const FileIcon = ({ className, path }) => {
  const src = getFileIcon(path)
  
  return src ? <img src={src} alt="" className={className} />: null
}

FileIcon.propTypes = {
  className: PropTypes.string,
  path: PropTypes.string.isRequired
}

export default memoize(FileIcon)
