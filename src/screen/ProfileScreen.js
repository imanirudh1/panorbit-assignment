import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './ProfileScreen.css'
const ProfileScreen = ({ match }) => {
  const userList = useSelector((state) => state.userList)
  const { loading, user, error } = userList
  const usr = user[match.params.id - 1]
  return (
    <div className='screen-container'>
      <div className='screen-header'>
        <div> Profile </div>
        <div className='user-name'>
          <img alt='Profile' src={usr.profilepicture} />
          <div>{usr.name}</div>
        </div>
      </div>
      <div className='profile-body'>
        <div className='profile-details'>
          <img src={usr.profilepicture} />
          <div className='second m-2'>{usr.name}</div>
          <div className='account-details'>
            <div className='first'>Username </div>
            <label>: </label>
            <label className='second'>{usr.username} </label>

            <div className='first'>e-mail </div>
            <label>: </label>
            <label className='second'>{usr.email} </label>

            <div className='first'>Phone </div>
            <label>: </label>
            <label className='second'>{usr.phone} </label>

            <div className='first'>Website </div>
            <label>: </label>
            <label className='second'>{usr.website} </label>
          </div>
          <div className='bottom-br'></div>
          <div className='first m-2'>Company</div>

          <div className='account-details'>
            <div className='first'>Name </div>
            <label>: </label>
            <label className='second'>{usr.company.name} </label>

            <div className='first'>catchphrase </div>
            <label>: </label>
            <label className='second'>{usr.company.catchPhrase}</label>

            <div className='first'>bs </div>
            <label>: </label>
            <label className='second'> {usr.company.bs} </label>
          </div>
        </div>
        <div className='profile-address'>
          <div className='first m-2 m'>Address :</div>
          <div className='account-details address-details'>
            <div className='first'>Street</div>
            <label>: </label>
            <label className='second'>{usr.address.street} </label>
            <div className='first'>Suite </div>
            <label>: </label>
            <label className='second'>{usr.address.suite} </label>
            <div className='first'>City </div>
            <label>: </label>
            <label className='second'>{usr.address.city} </label>
            <div className='first'>Zipcode</div>
            <label>: </label>
            <label className='second'>{usr.address.zipcode} </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
