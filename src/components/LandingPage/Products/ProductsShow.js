import React, {Component} from 'react';
import ProductsForm from './ProductsForm';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  startGetProducts,
  removeProducts,
  startProductsEdit,
} from '../../../actions/productsActions';
import {Modal, Button} from 'antd';
class ProductsShow extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      name: '',
      price: '',
      id: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(startGetProducts());
  }
  handleDeleteProduct = id => {
    this.props.dispatch(removeProducts(id));
  };

  setModalVisible = (modalVisible, id, name) => {
    if (modalVisible) {
      const data = this.props.products.find(prod => prod._id == id);
      if (data) {
        this.setState({name: data.name, price: data.price, id: id});
      }
    }
    this.setState({modalVisible: modalVisible});
  };
  handleEdit = modalVisible => {
    this.setState({modalVisible: modalVisible});
    const formData = {name: this.state.name, price: this.state.price};
    alert(JSON.stringify(formData, this.state.id));
    this.props.dispatch(startProductsEdit(formData, this.state.id));
    this.props.dispatch(startGetProducts());
  };
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
      <div align='center'>
        <div>
          <ProductsForm />
        </div>
        <Modal
          title='Edit Product'
          visible={this.state.modalVisible}
          centered
          okText='Submit'
          onOk={() => this.handleEdit(false)}
          onCancel={() => this.setModalVisible(false)}>
          <form onSubmit={this.handleEdit}>
            <label>Name:</label>
            <input
              type='text'
              onChange={this.handleChange}
              value={this.state.name}
              name='name'
            />
            <br />
            <label>Price : </label>
            <input
              type='text'
              onChange={this.handleChange}
              value={this.state.price}
              name='name'
            />
            <br />
            <br />
          </form>
        </Modal>
        <h1>Products List - {this.props.products.length}</h1>
        <table border='2'>
          <thead>
            <tr>
              <th>Sl no</th>

              <th>Product Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product, i) => {
              return (
                <tr>
                  <td>{i}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDeleteProduct(product._id);
                      }}>
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        return this.setModalVisible(
                          true,
                          product._id,
                          product.name
                        );
                      }}>
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(ProductsShow);
