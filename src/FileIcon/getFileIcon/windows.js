const { remote } = require('electron')

/**
 * Get system icon for file
 *
 * @param  {String} path File path
 * @return {Promise<String>} Promise resolves base64-encoded source of icon
 */
module.exports = function getFileIcon(path) {
  return new Promise((accept, reject) => {
    remote.app.getFileIcon(path, (err, icon) => {
      if (err) return reject(err)
      accept(icon.toDataURL())
    })
  })
}
