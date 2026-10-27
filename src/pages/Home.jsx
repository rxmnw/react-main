import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../api/auth'

const Home = () => {
  const [data, setData] = useState([])
  const token = localStorage.getItem('token')
  const getUser = async () => {
    try {
     const {data} = await axios.get(api + '/users', {
      headers : {
      Authorization : 'Bearer ' + token
      }
     })
     setData(data)
    } catch (error) {
      console.error(error);
    }
  }

useEffect(() => {
  getUser()
}, [])

  return (
    <div>
       
     {
      data.map((el) => {
      return <div key={el.id}>
        <h1>{el.name}</h1>
      </div>
      })
      
      
      }
    </div>
  )
}

export default Home