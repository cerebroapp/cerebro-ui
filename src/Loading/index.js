const React = require('react')
const styles = require('./styles.css')

module.exports = () => (
  <div className={styles.spinner}>
    <div className={styles.bounce1}></div>
    <div className={styles.bounce2}></div>
    <div className={styles.bounce3}></div>
  </div>
)
