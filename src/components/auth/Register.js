import React from 'react';
import {connect} from 'react-redux';
import {startUserRegister} from '../../actions/userActions';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      businessName: '',
      address: '',
      check: false,
    };
  }

  handleCheckChange = e => {
    this.setState({check: !this.state.check});
    console.log(this.state.check);
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      businessName: this.state.businessName,
      address: this.state.address,
      check: this.state.check,
    };
    const redirect = () => {
      this.props.history.push('/users/login');
    };

    this.state.check
      ? this.props.dispatch(startUserRegister(formData, redirect))
      : alert('please tick the checkbox');
  };
  render() {
    return (
      <div align='center'>
        <h2>Register with US</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username :</label>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <label>Email: </label>
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>password : </label>
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <label>Business Name : </label>
          <input
            type='text'
            name='businessName'
            value={this.state.businessName}
            onChange={this.handleChange}
          />
          <br />
          <label>Address : </label>
          <input
            type='text'
            name='address'
            value={this.state.address}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type='checkbox'
            value={this.state.check}
            onChange={this.handleCheckChange}
          />
          <label>Agree to the terms and conditions</label>
          <br />

          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}
export default connect()(Register);
