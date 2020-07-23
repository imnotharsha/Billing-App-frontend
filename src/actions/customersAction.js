import axios from '../components/config/axios';

export const getStartCustomers = () => {
  return dispatch => {
    axios
      .get('/customers', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then(response => {
        const customers = response.data;
        dispatch(setCustomers(customers));
        console.log(customers, 'customers');
      })
      .catch(err => {
        alert(err.message);
      });
  };
};

export const setCustomers = data => {
  return {type: 'SET_CUSTOMERS', payload: data};
};

export const addNewCustomers = data => {
  return dispatch => {
    axios
      .post('customers', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then(response => {
        const customer = response.data;
        dispatch(setNewCustomer(customer));
        alert('added successfully');
        console.log(customer, 'detailed sent');
      })
      .catch(err => {
        alert(err.message);
      });
  };
};

export const setNewCustomer = data => {
  return {type: 'SET_NEW_CUSTOMERS', payload: data};
};

export const removeCustomer = id => {
  return dispatch => {
    axios
      .delete(`/customers/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then(response => {
        const data = response.data;
        dispatch(setRemoveCustomer(data));
        console.log('deltetd', data);
      })
      .catch(err => {
        alert(err.message);
      });
  };
};

export const setRemoveCustomer = data => {
  return {type: 'REMOVE_CUSTOMER', payload: data};
};
