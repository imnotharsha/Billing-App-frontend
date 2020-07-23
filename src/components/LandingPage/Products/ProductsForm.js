import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {addNewProducts} from '../../../actions/productsActions';
import {connect} from 'react-redux';

class ProductsForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
    };
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      price: this.state.price,
    };
    console.log(data);
    this.props.dispatch(addNewProducts(data));
  };
  render() {
    return (
      <div align='center'>
        <div style={{marginLeft: '660px'}}>
          <Link to='/landingpage'>
            <button>back</button>
          </Link>
        </div>
        <div>
          <h1>Add Products</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Name: </label>
            <input
              type='text'
              value={this.state.name}
              name='name'
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label>Price : </label>
            <input
              type='number'
              value={this.state.price}
              name='price'
              onChange={this.handleChange}
            />
            <br />
            <br />
            <input type='submit' value='Add' />
          </form>
        </div>
      </div>
    );
  }
}
export default connect()(ProductsForm);
