import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../actions/productActions";

class Filter extends Component {
  render(props) {
    return (
      <div className="row">
        <div className="col-md-4">{this.props.count} products found.</div>
        <div className="col-md-4">
          <label htmlFor="">
            Order by
            <select
              name=""
              id=""
              className="form-control"
              value={this.props.sort}
              onChange={this.props.handleChangeSort}
            >
              <option value="">Select</option>
              <option value="lowest">lowest to highest</option>
              <option value="highest">highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label htmlFor="">
            Filter size
            <select
              name=""
              id=""
              className="form-control"
              value={this.props.size}
              onChange={e =>
                this.props.filterProducts(this.props.products, e.target.value)
              }
            >
              <option value="">all</option>
              <option value="x">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  size: state.products.size
});
export default connect(mapStateToProps, filterProducts)(Filter);
