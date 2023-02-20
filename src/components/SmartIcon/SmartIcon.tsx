import React, { memo, ReactElement } from 'react'
import FileIcon from '../FileIcon'
import FontAwesome from 'react-fontawesome'

/**
 * Check if provided string is an image src
 * It can be a path to png/jpg/svg image or data-uri
 *
 * @param  {String} path
 * @return {Boolean}
 */
const isImage = (path: string): boolean => !!path.match(/(^data:)|(\.(png|jpe?g|svg|ico)$)/)

/**
 * Check if provided string matches a FontAwesome icon
 */
const isFontAwesome = (path: string) => path.match(/^fa-(.+)$/)

interface SmartIconProps {
  className?: string
  path: string
}

/**
 * This component renders:
 *   – if `options.path` is an image this image will be rendered. Supported formats are:
 *     png, jpg, svg and icns
 *   - otherwise it will render icon for provided path, that you can see in Finder
 * @param  {String} options.className
 * @param  {String} options.path
 * @return {Function}
 */
const SmartIcon = ({ className, path }: SmartIconProps): ReactElement => {
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

export default memo(SmartIcon)
