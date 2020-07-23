import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addBills} from '../../../actions/billsAction';
import {Link} from 'react-router-dom';
import {startGetProducts} from '../../../actions/productsActions';
import {getStartCustomers} from '../../../actions/customersAction';

class BillsForm extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      customer: '',

      quantity: '',
      product: '',
      lineItems: [],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }

  handleCustomerChange = e => {
    this.setState({
      customer: e.target.value,
    });
  };
  handleDateChange = e => {
    this.setState({
      date: e.target.value,
    });
  };
  handleQuantityChange = e => {
    this.setState({
      quantity: e.target.value,
    });
  };
  handleProductChange = e => {
    this.setState({
      product: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      date: this.state.date,
      customer: this.state.customer,
      lineItems: this.state.lineItems,
    };
    console.log(formData);
    this.props.dispatch(addBills(formData));
  };
  componentDidMount() {
    this.props.dispatch(startGetProducts());
    this.props.dispatch(getStartCustomers());
  }

  handleAddProduct = () => {
    const items = [
      {
        quantity: this.state.quantity,
        product: this.state.product,
      },
    ];
    this.setState(prevState => {
      console.log(prevState.lineItems, 'prevstate');
      return {lineItems: [...prevState.lineItems, ...items]};
    });
    const data = this.state.lineItems;

    console.log(this.state.lineItems, 'new line items');
  };
  render() {
    return (
      <div align='center'>
        <div style={{marginLeft: '600px'}}>
          <Link to='/billsshow'>
            <button>Back</button>
          </Link>
        </div>
        <h1>Add Bills</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Customers : </label>
          <select
            value={this.state.customer}
            onChange={this.handleCustomerChange}>
            <option value=''> select Customer </option>
            {this.props.customers.map(customer => {
              return (
                <option value={customer._id} name={customer.name}>
                  {customer.name}
                </option>
              );
            })}
          </select>

          <label> Date : </label>
          <input
            type='date'
            value={this.state.date}
            name='date'
            onChange={this.handleDateChange}
          />
          <br />
          <br />
          <table border='1'>
            <thead>
              <tr>
                <th>
                  <label>Products : </label>
                  <select
                    value={this.state.product}
                    onChange={this.handleProductChange}>
                    <option> Select Products : </option>
                    {this.props.products.map(product => {
                      return (
                        <option value={product._id}>
                          {product.name} - Rs.{product.price}
                        </option>
                      );
                    })}
                  </select>
                </th>
                <th>
                  <label> Quantity :</label>
                  <select
                    value={this.state.quantity}
                    onChange={this.handleQuantityChange}>
                    <option value=''>Quantity</option>

                    {this.state.numbers.map(num => {
                      return (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      );
                    })}
                  </select>
                </th>
                <th>
                  <input
                    onClick={this.handleAddProduct}
                    value='Add'
                    type='button'
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.lineItems.map((item, i) => {
                return (
                  <tr>
                    <td>
                      {this.props.products &&
                        this.props.products.find(
                          ele => ele._id === item.product
                        ).name}
                    </td>
                    <td>{item.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <br />
          <br />
          <br />
          <button>Add bill</button>
        </form>
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

export default connect(mapStateToProps)(BillsForm);
