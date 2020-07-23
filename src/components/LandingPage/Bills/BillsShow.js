import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';

import React, {Component} from 'react';
import {getStartBills, removeBills} from '../../../actions/billsAction';

class Bills extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(getStartBills());
  }
  handleBillDelete = id => {
    const confirm = window.confirm('Are you Sure?');
    if (confirm) {
      this.props.dispatch(removeBills(id));
    }
  };
  render() {
    console.table(
      this.props.customers.find(
        ele => ele._id === '"5f0406b17754e30017fb8f1e"'
      ),
      'render'
    );
    return (
      <div align='center'>
        <div style={{marginLeft: '600px'}}>
          <Link to='/landingpage'>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to='/billsform'>
            <button>Add Bills</button>
          </Link>
        </div>
        <h2>List of Bills - {this.props.bills.length}</h2>
        <div>
          <table border='2'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>LineItems</th>

                <th>Total in Rs</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.bills &&
                this.props.bills.map(bill => {
                  return (
                    <tr>
                      <td>{bill._id}</td>
                      <td>
                        {moment(bill.date).format('MMMM Do YYYY, h:mm:ss a')}
                      </td>
                      <td>
                        {this.props.customers &&
                          this.props.customers.find(
                            ele => ele._id === bill.customer
                          ) &&
                          this.props.customers.find(
                            ele => ele._id === bill.customer
                          ).name}
                      </td>

                      <td>{bill.lineItems.length}</td>

                      <td>{bill.total}</td>
                      <td>
                        <button
                          onClick={() => {
                            this.handleBillDelete(bill._id);
                          }}>
                          Delete
                        </button>
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
    bills: state.bills,
    customers: state.customers,
  };
};
export default connect(mapStateToProps)(Bills);
