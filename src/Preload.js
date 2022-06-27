import { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Component that renders child function only after props.promise is resolved or rejected
 * You can provide props.loader that will be rendered before
 */
class Preload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: null,
      error: null
    }
  }
  componentDidMount() {
    this.props.promise
      .then(result => this.setState({ result }))
      .catch(error => this.setState({ error }))
  }
  render() {
    const { loader, children } = this.props
    const { result, error } = this.state
    if (result || error) {
      return children(result, error)
    }
    return loader || null
  }
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
