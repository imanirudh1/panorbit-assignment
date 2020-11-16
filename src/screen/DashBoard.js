import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Gallery from './Gallery'
import Posts from './Posts'
import ProfileScreen from './ProfileScreen'
import SideBar from './SideBar'
import ToDo from './ToDo'
import { GrChat } from 'react-icons/gr'

const DashBoard = ({ match }) => {
  const [chatBox, setChatBox] = useState(false)
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
        <div
          onClick={() => setChatBox(!chatBox)}
          className={!chatBox ? 'chat-box' : 'active-chat-box'}
        >
          <div className='chat-header'>
            <GrChat color='pinks' />
            Chats
          </div>
          <div className='chat-user'>hiiiii</div>
        </div>
      </div>
    </>
  )
}

export default DashBoard
