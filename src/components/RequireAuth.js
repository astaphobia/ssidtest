import React from "react"
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom'

export default Composed => {
  class Authentication extends React.Component {
    render() {
      return (
        <React.Fragment>
        {this.props.user ? <Composed {...this.props}/> : <Redirect push to={`/signin`}/>}
        </React.Fragment>
      )
    }
  }
  function mapStateToProps(state) {
    return {user: state.auth.user}
  }
  return connect(mapStateToProps, {})(Authentication)
}
