import React from 'react'
import { replace, useNavigate } from 'react-router-dom'
import { loginRequest } from '../api/auth'

const Login = () => {
    const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault()
    const obj = {
        email : e.target.email.value, 
        password : e.target.password.value, 
    }

const token = await loginRequest(obj)
 if (token) {
    navigate('/', {replace : true})
 }
}

  return (
    <div >
        <form onSubmit={handleSubmit} action="">
            <input  placeholder='email' className='border p-[4px]'  type="text" name="email" id="" />
            <input placeholder='password'  className='border p-[4px]'  type="password" name="password" id="" />
            <button type = 'submit' className='border border-green-900 rounded-xl p-[5px]'>Submit</button>
        </form>
    </div>
  )
}

export default Login