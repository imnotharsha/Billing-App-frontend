import axios from '../components/config/axios';

export const setStartBills = data => {
  return {type: 'SET_BILLS', payload: data};
};

export const getStartBills = () => {
  return dispatch => {
    axios
      .get('/bills', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then(response => {
        const data = response.data;
        dispatch(setStartBills(data));
        console.log(data, 'this is bill mount');
      })
      .catch(err => {
        alert(err.message);
      });
  };
};

export const addBills = data => {
  return dispatch =>
    axios
      .post('/bills', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then(response => {
        const bill = response.data;
        dispatch(setBills(bill));
      })
      .catch(err => {
        alert(err.message);
      });
};
export const setBills = data => {
  return {type: 'SET_NEW_Bills', payload: data};
};

export const removeBills = id => {
  return dispatch => {
    axios
      .delete(`/bills/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then(response => {
        const data = response.data;
        dispatch(setRemoveBills(data));
        alert('Deleted successfully!');
      })
      .catch(err => {
        alert(err);
      });
  };
};

export const setRemoveBills = data => {
  return {type: 'SET_DELETE_BILLS', payload: data};
};
