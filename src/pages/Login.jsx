import React from 'react'

const Login = () => {
  return (
   <div>
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="w-full max-w-sm bg-white p-8 rounded-xl shadow space-y-4">
        <h1 className="text-2xl font-bold text-center">Вход</h1>
        <input type="email" placeholder="Email" 
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="password" placeholder="Password" 
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Войти
        </button>
      </form>
    </div>
   </div>
  )
}


export default Login 