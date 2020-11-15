import React from 'react'
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-items'>
        <Link className='link lin' to='/dashboard/profile'>
          <div className='sidebar-item'>Profile</div>
        </Link>
        <Link className='link' to='/dashboard/post'>
          <div className='sidebar-item '>Posts</div>
        </Link>
        <Link className='link' to='/dashboard/gallery'>
          <div className='sidebar-item'>Gallery</div>
        </Link>
        <Link className='link' to='/dashboard/todo'>
          <div className='sidebar-item bottom'>ToDo</div>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
