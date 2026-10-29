import React from 'react'
import { useNavigate } from 'react-router'
import { LoginRequest } from '@/api/auth'

const Login = () => {
  const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault()
  const obj = {
    email: e.target.email.value, 
    password: e.target.password.value, 
  }

const token = await LoginRequest(obj)
if (token) {
  navigate('/', {replace:true})
}

}

  return (
   <div  className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-sm  bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-5"
  >
    <h1 className="text-2xl  dark:text-white font-bold text-center text-gray-800">Вход</h1>

    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-3 rounded-lg border  outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
    />

    <input
      type="password"
      name="password"
      placeholder="Пароль"
      required
      className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
    />

    <button
      type="submit"
      className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 active:scale-95 transition"
      >
        Войти
    </button>
  </form>
  
</div>
  )
}

export default Login



