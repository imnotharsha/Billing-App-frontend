import {connect} from 'react-redux';
import {getStartCustomers} from '../../../actions/customersAction';
import {
  addNewCustomers,
  removeCustomer,
} from '../../../actions/customersAction';
import {Link} from 'react-router-dom';
import {Modal, Button} from 'antd';

import React, {Component} from 'react';
class CustomersShow extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    this.props.dispatch(getStartCustomers());
  }
  handleCustomerDelete = id => {
    const confirm = window.confirm('Delelte this record?');
    if (confirm) {
      this.props.dispatch(removeCustomer(id));
    }
  };
  handleAddCustomers = () => {
    this.props.dispatch(addNewCustomers());
  };

  render() {
    return (
      <div align='center'>
        <div>
          <div>
            <Link to='/landingpage'>
              <button style={{marginLeft: '690px'}}>Back</button>
            </Link>
          </div>
          <h2 align='center'>Customers List - {this.props.customers.length}</h2>
          <Link to='/customersform'>
            <button>Add Customers</button>
          </Link>
        </div>
        <br />
        <div>
          <table border='1'>
            <thead>
              <tr>
                <th>Sl no</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.customers.map((customer, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td> {customer.name}</td>

                    <td> {customer.mobile}</td>
                    <td> {customer.email}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.handleCustomerDelete(customer._id);
                        }}>
                        Delete
                      </button>
                      <button>Update</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    customers: state.customers,
  };
};

export default connect(mapStateToProps)(CustomersShow);
