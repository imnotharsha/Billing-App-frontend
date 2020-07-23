import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItems} from '../../../actions/itemsAction';

class BillsForm2 extends Component {
  constructor() {
    super();
    this.state = {
      customer: '',
      product: '',
      date: '',
      quantity: '',
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      prodID: '',
    };
  }

  handleDateChange = e => {
    this.setState({
      date: e.target.value,
    });
  };
  handleCustomerChange = e => {
    this.setState({
      customer: e.target.value,
    });
  };
  handleProductChange = e => {
    this.setState({
      product: e.target.value,
    });
  };
  handleQuantityChange = e => {
    this.setState({quantity: e.target.value});
  };
  handleItems = e => {
    const items = [
      {
        prodID: '',
        product: this.state.product,
        quantity: this.state.quantity,
      },
    ];
    this.props.dispatch(addItems(items));
  };
  render() {
    return (
      <div align='center'>
        <h1>Add Bills </h1>
        <label>Customers : </label>
        <select
          value={this.state.customer}
          onChange={this.handleCustomerChange}>
          <option value=''>Select the Customer</option>
          {this.props.customers.map(customer => {
            return <option>{customer.name}</option>;
          })}
        </select>
        <label> Date : </label>
        <input
          type='date'
          value={this.state.date}
          name='date'
          onChange={this.handleDateChange}
        />
        <h3>Product Table</h3>
        <table border='1'>
          <thead>
            <tr>
              <th>Sl no : </th>
              <th>
                <label>Products: </label>
                <select
                  onChange={this.handleProductChange}
                  value={this.state.product}>
                  <option>Select product</option>
                  {this.props.products.map(pro => {
                    return <option>{pro.name}</option>;
                  })}
                </select>
              </th>
              <th>
                <label>Quantity : </label>
                <select
                  onChange={this.handleQuantityChange}
                  value={this.state.quantity}>
                  <option> Select quantity </option>
                  {this.state.numbers.map(number => {
                    return <option>{number}</option>;
                  })}
                </select>
              </th>
              <th>
                <button onClick={this.handleItems}>Add Items</button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    customers: state.customers,
    products: state.products,
  };
};
export default connect(mapStateToProps)(BillsForm2);
