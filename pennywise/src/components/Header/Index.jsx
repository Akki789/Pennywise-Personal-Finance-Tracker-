import React from 'react'
import './styles.css';

export default function Header() {

  function logoutFunc() {
    alert('Logging out!');
    // localStorage.removeItem('token');
    // window.location.href = '/';
  }

  return (
    <div className='navbar'>
      <p className='logo'>Pennywise</p>
      <p className='logo link' onClick={logoutFunc}>Logout</p>
    </div>
  )
}
