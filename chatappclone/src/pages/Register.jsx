import React from 'react'
import '../style.scss'

function Register() {
  return (
    <div className='container'>
        <div className="wrapper">
            <span className='title'>register</span>
            <form action="">
                <input type="text" placeholder='name...'/>
                <input type="email" placeholder='email...' />
                <input type="password" placeholder='password...'/>
                <input type="password" placeholder='confirm password...'/>
                <input type="file" id='file' style={{display:'none'}}/>
                <label htmlFor="file">Add picture</label>
                <button>Register</button>
            </form>
            <p>Have an account? <span>Login</span></p>
        </div>
    </div>
  )
}

export default Register

export function Login() {
  return (
    <div className='container'>
        <div className="wrapper">
            <span className='title'>register</span>
            <form action="">
                <input type="text" placeholder='name...'/>
                <input type="email" placeholder='email...' />
                <input type="password" placeholder='password...'/>
                <button>Login</button>
            </form>
            <p>Don't have an account? <span>Sign up</span></p>
        </div>
    </div>
  )
}