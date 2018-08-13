import React, {Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Route, Switch, withRouter} from "react-router-dom"

import "./styles/App.css"
import * as actions from "./actions/AuthActions"
import TopNavigation from "./components/TopNavigation"
import RequireAuth from "./components/RequireAuth"
import SignIn from "./pages/SignIn"
import Catalogues from "./pages/Catalogues"
import Catalogue from "./pages/Catalogue"

class App extends Component {
  componentWillMount() {
    this.props.actions.signInAnnonim()
  }
  render() {
    return (
      <React.Fragment>
        <TopNavigation />
        <main className="main">
          <div className="centered">
            <Switch>
              <Route exact path="/" component={RequireAuth(Catalogues)} />
              <Route path="/:productID" component={RequireAuth(Catalogue)} />
              <Route path="/signin" component={SignIn} />
            </Switch>
          </div>
        </main>
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
    isLogged: !state.auth.user,
    ...state.auth
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
