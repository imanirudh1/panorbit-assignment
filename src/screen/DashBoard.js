import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Gallery from './Gallery'
import Posts from './Posts'
import ProfileScreen from './ProfileScreen'
import SideBar from './SideBar'
import ToDo from './ToDo'

const DashBoard = ({ match }) => {
  return (
    <>
      <div className='wrapper'>
        <SideBar match={match} />
        <Switch>
          <Route path='/dashboard/:id/gallery' component={Gallery} />
          <Route path='/dashboard/:id/todo' component={ToDo} />
          <Route path='/dashboard/:id/post' component={Posts} />
          <Route path='/dashboard/:id' component={ProfileScreen} />
        </Switch>
      </div>
      <div className='chat-box'>Chats</div>
    </>
  )
}

export default DashBoard
