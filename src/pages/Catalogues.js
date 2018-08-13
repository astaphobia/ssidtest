import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import PropTypes from "prop-types"

import Card from "../components/Card"
import {getList} from "../actions/CatalogueActions"

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
        {this.props.catalogues.catalogues.map((catalogue, index) => (
          <Card key={index} data={catalogue} />
        ))}
      </React.Fragment>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({getList}, dispatch)
  }
}
function mapStateToProps(state) {
  return {
    catalogues: state.catalogues
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalogues)
