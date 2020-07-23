import {Link} from 'react-router-dom';
import {startGetProducts} from '../../../actions/productsActions';
import {getStartCustomers} from '../../../actions/customersAction';
import {connect} from 'react-redux';

import React, {Component} from 'react';

class Bills extends Component {
  componentDidMount() {
    this.props.dispatch(startGetProducts());
    this.props.dispatch(getStartCustomers());
  }
  render() {
    return (
      <div>
        <Link to='/billsshow'>
          <h1>Bills Component</h1>
        </Link>
      </div>
    );
  }
}
export default connect()(Bills);
