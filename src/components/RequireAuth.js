import React from "react"
import {connect} from "react-redux"

import Loader from './Loader'

export default Composed => {
  class Authentication extends React.Component {
    render() {
      return (
        <React.Fragment>
          {this.props.user ? (
            <Composed {...this.props} />
          ) : (
            <Loader/>
          )}
        </React.Fragment>
      )
    }
  }
  function mapStateToProps(state) {
    return {...state.auth}
  }
  return connect(
    mapStateToProps,
    {}
  )(Authentication)
}
