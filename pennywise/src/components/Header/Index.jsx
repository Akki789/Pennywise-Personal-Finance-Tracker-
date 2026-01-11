import React, { useEffect } from 'react'
import './styles.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';

export default function Header() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() =>{
    if(!user){
      navigate('/');
    }else{
      navigate('/dashboard');
    }
  }, [user, loading])

  function logoutfunc() {
    try {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          toast.success("Logged Out Successfully!");
          Navigate("/");
        })
        .catch((error) => {
          // An error happened.
          toast.error(error.message);
        });
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <div className='navbar'>
      <p className='logo'>Pennywise</p>
      {user && <p className='logo link' onClick={logoutfunc}>Logout</p>}
      
    </div>
  )
}
