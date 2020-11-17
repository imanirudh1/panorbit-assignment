import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Gallery from './Gallery'
import ProfileScreen from './ProfileScreen'
import Posts from './Posts'
import SideBar from './SideBar'
import ToDo from './ToDo'
import { useSelector } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { BsChatSquare } from 'react-icons/bs'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const DashBoard = ({ match }) => {
  const [chatBox, setChatBox] = useState(false)
  const userList = useSelector((state) => state.userList)
  const { user } = userList
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
        <div className={!chatBox ? 'chat-box' : 'active-chat-box'}>
          <div onClick={() => setChatBox(!chatBox)} className='chat-header'>
            <div className='chat-header-left'>
              <BsChatSquare className='icon' />
              <label>Chats</label>
            </div>
            <div className='chat-header-right'>
              {chatBox ? (
                <IoIosArrowDown className='icon' />
              ) : (
                <IoIosArrowUp className='icon' />
              )}
            </div>
          </div>
          <div className='chat-user'>
            <Scrollbars style={{ height: 300 }}>
              {user.map((item) => (
                <div className='chat-users' key={item.id}>
                  <div className='chat-left'>
                    <img
                      src={item.profilepicture}
                      alt='Profile'
                      className='chat-user-image'
                    />
                    <li key={item.id}>{item.name}</li>
                  </div>

                  <div className='online'></div>
                </div>
              ))}
            </Scrollbars>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard
