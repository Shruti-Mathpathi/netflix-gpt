import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg' />
      </div>
      <form className='absolute p-12 bg-black my-36 mx-auto right-0 left-0 w-3/12 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>Sign In</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 my-4 bg-gray-700 w-full' />}
        <input type='text' placeholder='Email Address' className='p-2 my-4 bg-gray-700 w-full' />
        <input type='password' placeholder='Password' className='p-2 my-4  bg-gray-700 w-full' />
        <button className='p-4 my-6 bg-red-600 w-full rounded-lg'>{isSignInForm? 'Sign In': 'Sign Up'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm? "New to Netflix? Sign Up Now": " Already registered? Sign In Now."}
        </p>
      </form>
    </div>


  )
}

export default Login