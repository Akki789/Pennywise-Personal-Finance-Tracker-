import React from 'react'
import Header from '../components/Header/Index'
import SignUpSignIn from '../components/SignUpSignIn/Index'

export default function SignUp() {
  return (
    <div>
      <Header />
      <div className='wrapper'>
        <SignUpSignIn />
      </div>
    </div>
  )
}
