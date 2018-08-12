import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Redirect} from "react-router-dom"
import PropTypes from "prop-types"

import * as actions from "../actions/AuthActions"

class SignIn extends React.Component {
  static propTypes = {
    actions: PropTypes.object
  }
  handleSignIn = e => {
    return this.props.actions.signInAnnonim()
  }
  render() {
    return (
      <React.Fragment>
        {this.props.isLogged ? (
          <Redirect push to={`/`} />
        ) : (
          <div className="center text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSignIn}
            >
              Sign In
            </button>
          </div>
        )}
      </React.Fragment>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
function mapStateToProps(state) {
  return {
    isLogged: !!state.auth.user
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
