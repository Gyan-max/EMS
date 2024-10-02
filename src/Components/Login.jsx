import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
// import logo from '../../public/logo1.png';

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        // rememberMe: false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://localhost:3000/auth/adminlogin', values)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
return (
    <div>
        {/* <img className='logo'  src={logo} alt="Logo" style={{position: 'absolute', top: 0, left: 0}} /> */}
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='navbar'>
            {/* <img src="./logo1.png" alt="" /> */}
            <h1>Employee Management System</h1>
        </div>
           
            <div className='p-3 rounded w-25 border loginForm'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
                         onChange={(e) => setValues({...values, email: e.target.value})} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3' >
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" name='password' placeholder='Enter Password'
                        onChange={(e) => setValues({...values, password: e.target.value})} className='form-control rounded-0' />
                    </div>
                    <div className='rember-forgot'>
                        <input type="checkbox" name='rememberMe' id='rememberMe' />
                        <label htmlFor="rememberMe" className='ms-1' >Remember Me</label>
                    </div>
                    <div>
                        <a href='#' className='float-end text-decoration-none' >Forgot Password?</a>
                    </div>
                    <div>
                        {/* <a href='#' className='text-decoration-none' >Create Account</a> */}
                    </div>
                    
                    <div>
                        <button className='btn btn-primary rounded-0' type='submit'  >Login</button>
                    </div>
                    <div className='register-link'>
                        <p>Don't have an account? <a href="#">Register</a></p>

                    </div>


                </form>
            </div>
        </div>
    </div>
)
}

export default Login