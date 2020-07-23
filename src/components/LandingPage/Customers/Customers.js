import React from 'react';

import {Link} from 'react-router-dom';

export default function Customers() {
  return (
    <div>
      <Link to='customersshow'>
        <h1>Customers Component</h1>
      </Link>
    </div>
  );
}
