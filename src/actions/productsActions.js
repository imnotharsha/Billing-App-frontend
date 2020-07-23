import axios from '../components/config/axios';

export const addNewProducts = data => {
  return dispatch => {
    axios
      .post('/products', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then(response => {
        const data = response.data;
        dispatch(setNewProducts(data));
        console.log(data, 'action products');
      })
      .catch(err => {
        alert(err.message);
      });
  };
};

export const setNewProducts = data => {
  return {type: 'SET_NEW_PRODUCTS', payload: data};
};
export const startGetProducts = () => {
  return dispatch => {
    axios
      .get('/products', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then(response => {
        const data = response.data;
        dispatch(setProducts(data));
        console.log(data, 'action products');
      })
      .catch(err => {
        alert(err);
      });
  };
};

export const setProducts = data => {
  return {type: 'SET_PRODUCTS', payload: data};
};

export const removeProducts = id => {
  return dispatch => {
    axios
      .delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then(response => {
        const data = response.data;
        dispatch(setRemoveProducts(data));
      })
      .then(err => {
        alert(err);
      });
  };
};

export const setRemoveProducts = data => {
  return {type: 'REMOVE_PRODUCTS', payload: data};
};

export const startProductsEdit = (formData, id) => {
  console.log(formData, id, 'starteditdispatcher');
  return dispatch => {
    axios
      .put(`/products/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then(response => {
        console.log(response.data, 'dispatcheitconsole');
        dispatch(editProducts(response.data, id));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const editProducts = (data, id) => {
  return {
    type: 'EDIT_PRODUCTS',
    payload: {
      id,
      data,
    },
  };
};
