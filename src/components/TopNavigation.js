import React from "react"
import {connect} from "react-redux"

class TopNavigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white top-navbar">
        <div className="centered">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <button className="btn btn-white">
                <i className="icon material-icons">menu</i>
              </button>
              <span>Dress</span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-right">
              <button className="btn btn-white">
                <i className="icon material-icons">search</i>
              </button>
              <button className="btn btn-white">
                <i className="icon material-icons">favorite_border</i>
                {this.props.favorites.length >= 1 ? (
                  <i className="favorite">{this.props.favorites.length}</i>
                ) : null}
              </button>
              <button className="btn btn-white">
                <i className="icon material-icons">card_giftcard</i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
function mapStateToProps(state) {
  return {favorites: state.catalogues.favorites}
}

export default connect(
  mapStateToProps,
  {}
)(TopNavigation)
