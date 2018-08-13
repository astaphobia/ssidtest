import React from "react"
import PropTypes from "prop-types"
import {price} from "../helpers/format"
import Loader from "./Loader"

class Card extends React.Component {
  static propTypes = {
    data: PropTypes.object
  }
  static defaultProps = {
    data: {}
  }
  handleFavorite = e => {
    e.preventDefault()
    return this.props.actions.favorite(this.props.data)
  }

  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/f7d0575c0071ed1b60228d3d65b98107.jpg"
          alt={this.props.data.name}
        />
        <div className="card-body">
          <div className="cel">
            <div className="cel-6">
              <p className="card-text">{this.props.data.name}</p>
              <p className="price">{price(this.props.data.price)}</p>
            </div>
            <div className="cel-6 text-right">
              <button className="btn btn-white">
                <i className="material-icons">favorite_border</i>
              </button>
              <button className="btn btn-danger text-right">
                <span className="sm">LIHAT</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Card
