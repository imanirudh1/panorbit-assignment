import React, { useState } from 'react'
import './ProfileScreen.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Posts = ({ match }) => {
  const userList = useSelector((state) => state.userList)
  const { user } = userList
  const [popup, setPopup] = useState(false)
  const usr = user[match.params.id - 1]
  const usr1 = user[match.params.id]
  const usr2 = user[3]
  return (
    <div className='screen-container'>
      <div className='screen-header'>
        <div>Posts</div>
        <div onClick={() => setPopup(!popup)} className='user-name'>
          <div className={!popup ? 'popup-none' : 'popup'}>
            <img alt='Profile' src={usr.profilepicture} />
            <label className='second'>{usr.name} </label>
            <label className='first'>{usr.email} </label>
            <div className='next-users'>
              {usr1 ? (
                <Link
                  key={usr1.id}
                  className='link'
                  to={`/dashboard/${usr1.id}`}
                >
                  <div className='next-user' key={usr1.id}>
                    <img
                      className='next-user-img'
                      src={usr1.profilepicture}
                      alt='Profile'
                    />
                    <li className='second' key={usr1.id}>
                      {usr1.name}
                    </li>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}

              {usr2 ? (
                <Link
                  key={usr2.id}
                  className='link'
                  to={`/dashboard/${usr2.id}`}
                >
                  <div className='next-user' key={usr2.id}>
                    <img
                      className='next-user-img'
                      src={usr2.profilepicture}
                      alt='Profile'
                    />
                    <li className='second' key={usr2.id}>
                      {usr2.name}
                    </li>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
            </div>

            <Link className='link' to='/'>
              <div className='sign-out'>Sign out</div>
            </Link>
          </div>
          <img alt='Profile' src={usr.profilepicture} />
          <div>{usr.name}</div>
        </div>
      </div>
      <div className='other-screen'>Coming Soon</div>
    </div>
  )
}

export default Posts
