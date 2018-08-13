import React from "react"

class Preload extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div className="card">{this.props.render()}</div>
      </React.Fragment>
    )
  }
}
export default Preload
