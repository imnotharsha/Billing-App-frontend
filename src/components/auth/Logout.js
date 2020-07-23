import React from 'react';

export default function Logout() {
  const handleClick = e => {
    localStorage.removeItem('authToken');
  };
  return (
    <div>
      <input type='button' value='logout' onClick={handleClick} />
    </div>
  );
}
