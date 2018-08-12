import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'

import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import "./styles/index.css"
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
