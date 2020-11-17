import React from 'react'
import { Link } from 'react-router-dom'
const SideBar = ({ match }) => {
  return (
    <div className='sidebar'>
      <div className='sidebar-items'>
        <Link className='link lin' to={`/dashboard/${match.params.id}/profile`}>
          <div className='sidebar-item  active'>Profile</div>
        </Link>
        <Link className='link' to={`/dashboard/${match.params.id}/post`}>
          <div className='sidebar-item '>Posts</div>
        </Link>
        <Link className='link' to={`/dashboard/${match.params.id}/gallery`}>
          <div className='sidebar-item'>Gallery</div>
        </Link>
        <Link className='link' to={`/dashboard/${match.params.id}/todo`}>
          <div className='sidebar-item bottom'>ToDo</div>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
