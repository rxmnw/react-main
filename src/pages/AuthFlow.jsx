import React, { useEffect } from 'react'

const AuthFlow = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()

useEffect (() => {
    const token = localStorage.getItem('token')
    const isLoginPage = localStorage.pathname === '/login'

if (token && isLoginPage){
    navigate('/', {replace : true})
}
else if (!token && !isLoginPage) {
    navigate('/login', {replace:true})
}

})

  return (
    <div>AuthFlow</div>
  )
}

export default AuthFlow