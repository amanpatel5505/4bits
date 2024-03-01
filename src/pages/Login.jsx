import React from 'react'
import './Login.css'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const Login = () => {
  const login = useGoogleLogin({
    onSuccess: async response => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`
            }
          }
        )
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  })
  return (
    <div>  
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="background">
    </div> 

      <form>
        <h3>Login Here</h3>

        <label htmlFor='username'>Username</label>
        <input type='text' placeholder='Email or Phone' id='username' />

        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Password' id='password' />

        <button>Log In</button>
        <div className='social'>
          <div className='go' onClick={() => login()}>
            <i className='fab fa-google'></i> Google
          </div>
          <div className='fb'>
            <i className='fab fa-facebook'></i> Facebook
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
