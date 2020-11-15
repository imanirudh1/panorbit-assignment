import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Gallery from './Gallery'
import Posts from './Posts'
import ProfileScreen from './ProfileScreen'
import SideBar from './SideBar'
import ToDo from './ToDo'

const DashBoard = () => {
  return (
    <>
      <div className='wrapper'>
        <SideBar />
        <Switch>
          <Route path='/dashboard/gallery' component={Gallery} />
          <Route path='/dashboard/todo' component={ToDo} />
          <Route path='/dashboard/post' component={Posts} />
          <Route path='/dashboard' component={ProfileScreen} />
        </Switch>
      </div>
      <div className='chat-box'>Chats</div>
    </>
  )
}

export default DashBoard
