import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNewCustomers} from '../../../actions/customersAction';
import {Link} from 'react-router-dom';

class CustomersForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      mobile: '',
      email: '',
    };
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      mobile: this.state.mobile,
      email: this.state.email,
    };
    console.log(data);
    alert(JSON.stringify(data));
    this.props.dispatch(addNewCustomers(data));

    this.setState({name: '', mobile: '', email: ''});
  };
  render() {
    return (
      <div align='center'>
        <div>
          <div style={{marginLeft: '380px'}}>
            <Link to='/customersshow'>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <h1>Add Customers</h1>
          </div>

          <form onSubmit={this.handleSubmit}>
            <label>Name : </label>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label>Mobile : </label>
            <input
              type='text'
              name='mobile'
              value={this.state.mobile}
              onChange={this.handleChange}
            />
            <br /> <br />
            <label>Email : </label>
            <input
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br /> <br />
            <input type='submit' value='Add' />
          </form>
        </div>
      </div>
    );
  }
}
export default connect()(CustomersForm);
