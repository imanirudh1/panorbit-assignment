import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Gallery from './Gallery'
import Posts from './Posts'
import ProfileScreen from './ProfileScreen'
import ToDo from './ToDo'

const DashBoard = () => {
  return (
    <div className='wrapper'>
      <div className='sidebar'>
        <h1>SideBar</h1>
        <Link to='/dashboard/profile'>
          <h1>Profile</h1>
        </Link>
        <Link to='/dashboard/todo'>
          <h1>ToDo</h1>
        </Link>
        <Link to='/dashboard/gallery'>
          <h1>Gallery</h1>
        </Link>
        <Link to='/dashboard/post'>
          <h1>Post</h1>
        </Link>
      </div>
      <Switch>
        <Route path='/dashboard/gallery' component={Gallery} />
        <Route path='/dashboard/todo' component={ToDo} />
        <Route path='/dashboard/post' component={Posts} />
        <Route path='/dashboard' component={ProfileScreen} />
      </Switch>
    </div>
  )
}

export default DashBoard
