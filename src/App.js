import React, {Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Route, Switch, withRouter} from "react-router-dom"

import "./styles/App.css"
import RequireAuth from "./components/RequireAuth"
import SignIn from "./pages/SignIn"
import Catalogues from "./pages/Catalogues"
import TopNavigation from "./components/TopNavigation"
import {getUser} from "./actions/AuthActions"

class App extends Component {
  componentWillMount() {
    this.props.actions.getUser()
  }
  render() {
    return (
      <React.Fragment>
        <TopNavigation />
        <div className="container">
          <Switch>
            <Route exact path="/" component={RequireAuth(Catalogues)} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({getUser}, dispatch)
  }
}
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
)
