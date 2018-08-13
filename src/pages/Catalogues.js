import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import PropTypes from "prop-types"

import Card from "../components/Card"
import {price} from "../helpers/format"
import * as actions from "../actions/CatalogueActions"

class Catalogues extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    user: PropTypes.object
  }
  static defaultprops = {
    user: {}
  }

  componentDidMount() {
    this.props.actions.getList(this.props.user.uid)
  }
  render() {
    return (
      <React.Fragment>
        {this.props.catalogues.map((catalogue, index) => (
          <Card
            key={index}
            render={() => {
              const favorite = this.props.favorites.some(
                fav => fav.id === catalogue.id
              )
              return (
                <React.Fragment>
                  <img
                    className="card-img-top"
                    src="https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/f7d0575c0071ed1b60228d3d65b98107.jpg"
                    alt={catalogue.name}
                  />
                  <div className="card-body">
                    <div className="cel">
                      <div className="cel-6">
                        <p className="card-text">{catalogue.name}</p>
                        <p className="price">Rp. {price(catalogue.price)}</p>
                      </div>
                      <div className="cel-6 text-right">
                        {favorite ? (
                          <button
                            className="btn btn-white"
                            onClick={() =>
                              this.props.actions.unFavorite(catalogue)
                            }
                          >
                            <i className="material-icons love">favorite</i>
                          </button>
                        ) : (
                          <button
                          className="btn btn-white"
                            onClick={() =>
                              this.props.actions.favorite(catalogue)
                            }
                          >
                            <i className="material-icons">favorite_border</i>
                          </button>
                        )}
                        <button className="btn btn-danger">LIHAT</button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            }}
          />
        ))}
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
    ...state.catalogues
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalogues)
