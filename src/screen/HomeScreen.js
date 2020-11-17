import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import './HomeScreen.css'
import { Link } from 'react-router-dom'
import { listUsers } from '../actions/userAction'
const HomeScreen = () => {
  const dispatch = useDispatch()
  const userList = useSelector((state) => state.userList)
  const { loading, user, error } = userList
  useEffect(() => {
    dispatch(listUsers())
  }, [dispatch])

  return (
    <div className='container'>
      <div className='list-user'>
        <div className='header'>Select an account</div>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <div className='users'>
            <Scrollbars style={{ height: 400 }}>
              {user.map((item) => (
                <Link
                  key={item.id}
                  className='link'
                  to={`/dashboard/${item.id}`}
                >
                  <div className='item' key={item.id}>
                    <img
                      src={item.profilepicture}
                      alt='Profile'
                      className='user-image'
                    />
                    <li key={item.id}>{item.name}</li>
                  </div>
                </Link>
              ))}
            </Scrollbars>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomeScreen
