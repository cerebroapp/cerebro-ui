import { useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * Component that renders child function only after props.promise is resolved or rejected
 * You can provide props.loader that will be rendered before
 */

const Preload = ({ loader, children, promise }) => {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    promise
      .then(result => setResult(result))
      .catch(error => setError(error))
  },[promise])

  if (result || error) {
    return children(result, error)
  }

  return loader || null
}

Preload.propTypes = {
  loader: PropTypes.element,
  children: PropTypes.func.isRequired,
  promise: PropTypes.shape({
    then: PropTypes.func,
    catch: PropTypes.func
  }).isRequired
}

export default Preload
