import React, { useEffect, useState } from 'react'
import './HomeScreen.css'
import axios from 'axios'
import { Scrollbars } from 'react-custom-scrollbars'
import { Link } from 'react-router-dom'
const HomeScreen = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get('https://panorbit.in/api/users.json')

      setUser(data['users'])
    }
    getdata()
  }, [])

  return (
    <div className='container'>
      <div className='list-user'>
        <div className='header'>Select an account</div>
        <div className='users'>
          <Scrollbars style={{ height: 400 }}>
            {user.map((item) => (
              <Link key={item.id} className='link' to='/dashboard'>
                <div className='item' key={item.id}>
                  <img
                    alt='Profile'
                    src={item.profilepicture}
                    className='user-image'
                  />
                  <li key={item.id}>{item.name}</li>
                </div>
              </Link>
            ))}
          </Scrollbars>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
