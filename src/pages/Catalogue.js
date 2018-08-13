import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import Card from "../components/Card"
import {getItem} from "../actions/CatalogueActions"
import {price} from "../helpers/format"
import Loader from "../components/Loader"

class Catalogue extends React.Component {
  componentWillMount() {
    this.props.actions.getItem(this.props.match.params.productID)
  }
  render() {
    const {catalogue} = this.props
    return (
      <Card
        render={() => (
          <React.Fragment>
            {!!catalogue ? (
              <React.Fragment>
                <img
                  className="card-img-top"
                  src="https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/f7d0575c0071ed1b60228d3d65b98107.jpg"
                  alt="asds"
                />
                <div className="card-body">
                  <div className="cel">
                    <div className="cel-6">
                      <p className="card-text">{this.props.catalogue.name}</p>
                      <p className="price">
                        Rp. {price(this.props.catalogue.price)}
                      </p>
                    </div>
                    <div className="cel-6 text-right" />
                  </div>
                  <div>{this.props.catalogue.detail}</div>
                </div>
              </React.Fragment>
            ) : (
              <Loader />
            )}
          </React.Fragment>
        )}
      />
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({getItem}, dispatch)
  }
}
function mapStateToProps(state) {
  const {catalogue, loading} = state.catalogues
  return {catalogue, loading}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalogue)
