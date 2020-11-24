import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
const SideBar = ({ match }) => {
  return (
    <div className='sidebar'>
      <div className='sidebar-items'>
        {' '}
        <div className='sidebar-item'>
          <NavLink
            className='sidebar-item'
            activeClassName='selected'
            to={`/dashboard/${match.params.id}/profile`}
          >
            Profile
            <div className='active-sym'>
              {' '}
              <IoIosArrowForward className='icon2' />
              <div className='sr'></div>
            </div>
          </NavLink>{' '}
        </div>
        <div className='sidebar-item '>
          <NavLink
            activeClassName='selected'
            className='sidebar-item'
            to={`/dashboard/${match.params.id}/post`}
          >
            Posts
            <div className='active-sym'>
              {' '}
              <IoIosArrowForward className='icon2' /> <div className='sr'></div>
            </div>
          </NavLink>
        </div>{' '}
        <div className='sidebar-item'>
          <NavLink
            activeClassName='selected'
            className='sidebar-item'
            to={`/dashboard/${match.params.id}/gallery`}
          >
            Gallery
            <div className='active-sym'>
              {' '}
              <IoIosArrowForward className='icon2' /> <div className='sr'></div>
            </div>
          </NavLink>
        </div>{' '}
        <div className='sidebar-item bottom'>
          <NavLink
            activeClassName='selected'
            className='sidebar-item bottom'
            to={`/dashboard/${match.params.id}/todo`}
          >
            ToDo
            <div className='active-sym'>
              <IoIosArrowForward className='icon2' /> <div className='sr'></div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default SideBar
