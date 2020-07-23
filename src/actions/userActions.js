import axios from '../components/config/axios';

export const startUserRegister = (formData, redirect) => {
  return dispatch => {
    axios
      .post('/users/register', formData)
      .then(response => {
        if (response.data.hasOwnProperty('errors')) {
          alert(response.data.errors);
        } else {
          alert('Successfully Registered!');
          redirect();
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };
};

export const setUser = data => {
  return {type: 'SET_USER', payload: data};
};

export const startLoginUser = (data, redirect) => {
  return dispatch => {
    axios
      .post('/users/login', data)
      .then(response => {
        if (response.data.hasOwnProperty('errors')) {
          alert(response.data.errors);
        } else {
          const token = response.data.token;
          console.log(token);
          localStorage.setItem('authToken', token);
          alert('successfully logged in');
          axios
            .get('users/account', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then(response => {
              const user = response.data;

              dispatch(setUser(user));
              redirect();
            })
            .catch(err => {
              alert(err.message);
            });
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };
};

export const startGetUser = () => {
  return dispatch => {
    axios
      .get('/users/account', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then(response => {
        const user = response.data;
        console.log('this is handlepage', user);
        dispatch(setUser(user));
      })
      .catch(err => {
        alert(err.message, 'reload');
      });
  };
};
