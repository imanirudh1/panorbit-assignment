import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import './ProfileScreen.css'
import { Link } from 'react-router-dom'
const ProfileScreen = ({ match }) => {
  const [popup, setPopup] = useState(false)
  const userList = useSelector((state) => state.userList)
  const { user } = userList
  const usr = user[match.params.id - 1]
  const usr1 = user[match.params.id]
  const usr2 = user[3]

  return (
    <div className='screen-container'>
      <div className='screen-header'>
        <div> Profile </div>
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
      <div className='profile-body'>
        <div className='profile-details'>
          <img alt='Profile' src={usr.profilepicture} />
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
          <div className='address-details'>
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
          <div className='address-map'>
            <GoogleMapReact
              bootstrapURLKeys={{}}
              defaultCenter={{
                lat: 59.95,
                lng: 30.33,
              }}
              defaultZoom={11}
            ></GoogleMapReact>
          </div>
          <div className='map-location'>
            <div className='lat'>
              <label className='first'>Lat:</label>
              <label className='second'> {usr.address.geo.lat}</label>
            </div>
            <div className='lng'>
              <label className='first'>Long: </label>
              <label className='second'>{usr.address.geo.lng}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
