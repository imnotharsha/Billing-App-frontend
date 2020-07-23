import React from 'react';
import {Link} from 'react-router-dom';

export default function Products() {
  return (
    <div>
      <Link to='productsshow'>
        <h1>Products Component</h1>
      </Link>
    </div>
  );
}
