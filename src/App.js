import React, {Component} from "react"
import {connect} from "react-redux"
import {BrowserRouter, Route} from "react-router-dom"

import "./styles/App.css"
import SignIn from "./pages/SignIn"
import Catalogues from "./pages/Catalogues"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={Catalogues} />
          <Route exact path="/signin" component={SignIn} />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, {})(App)
