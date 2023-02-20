import React, { ReactElement, memo } from 'react'
import getFileIcon from './getFileIcon'

interface FileIconProps {
  className?: string
  path: string
}

/**
 * Render icon for provided path.
 * It will render the same icon, that you see in Finder
 *
 * @param  {String} options.className
 * @param  {String} options.path
 * @return {Function}
 */
const FileIcon = ({ className, path }: FileIconProps): ReactElement | null => {
  const src = getFileIcon(path)
  
  return src ? <img src={src} alt="" className={className} />: null
}

export default memo(FileIcon)
