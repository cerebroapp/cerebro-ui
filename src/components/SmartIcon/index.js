import React from 'react'
import PropTypes from 'prop-types'
import FileIcon from '../FileIcon'
import { memoize } from 'cerebro-tools'
import FontAwesome from 'react-fontawesome'

/**
 * Check if provided string is an image src
 * It can be a path to png/jpg/svg image or data-uri
 *
 * @param  {String} path
 * @return {Boolean}
 */
const isImage = (path) => !!path.match(/(^data:)|(\.(png|jpe?g|svg|ico)$)/)

/**
 * Check if provided string matches a FontAwesome icon
 */
const isFontAwesome = (path) => path.match(/^fa-(.+)$/)

/**
 * This component renders:
 *   – if `options.path` is an image this image will be rendered. Supported formats are:
 *     png, jpg, svg and icns
 *   - otherwise it will render icon for provided path, that you can see in Finder
 * @param  {String} options.className
 * @param  {String} options.path
 * @return {Function}
 */
const SmartIcon = ({ className, path }) => {
  const fontAwesomeMatches = isFontAwesome(path)
  if (fontAwesomeMatches) {
    return <FontAwesome
              name={fontAwesomeMatches[1]}
              size="2x"
              className={className} />
  }

  return (
    isImage(path) ?
      <img src={path} alt={path} className={className} /> :
        <FileIcon path={path} className={className} />
  )
}

SmartIcon.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default memoize(SmartIcon)
