import React from 'react';
import {connect} from 'react-redux';
import {startLoginUser} from '../../actions/userActions';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleLoginSubmit = e => {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password,
    };
    const redirect = () => {
      return this.props.history.push('/landingpage');
    };
    this.props.dispatch(startLoginUser(formData, redirect));
  };
  render() {
    return (
      <div>
        <h1>Login !</h1>
        <form onSubmit={this.handleLoginSubmit}>
          <label>Email : </label>
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>Password : </label>
          <input
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type='submit' value='Login' />
        </form>
      </div>
    );
  }
}

export default connect()(Login);
