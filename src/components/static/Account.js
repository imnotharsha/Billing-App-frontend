import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Link} from 'react-router-dom';

function Account(props) {
  return (
    <div>
      <div style={{marginLeft: '1000px'}}>
        <Link to='/landingpage'>
          <button>Back</button>
        </Link>
      </div>
      <div align='center ' style={{marginTop: '20px'}}>
        <h2>Account Info</h2>

        <h3>Username : {props.user.username}</h3>
        <h4>EMAIL : {props.user.email}</h4>
        <h4>Business : {props.user.businessName}</h4>
        <h4>
          Created At :
          {moment(props.user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
        </h4>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Account);
