import React from 'react'
import Avatar from '../chatList/Avatar'
import ChatSettings from './ChatSettings'
function ContentHeader() {
    return (
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://www.propatel.com/wp-content/uploads/2019/09/coding-and-testing-programming-of-software.jpg"
              />
              <p>F29PD Group 9</p>
            </div>
          </div>
          <ChatSettings>
              <ul className='settings-list'>
                  <li className='settings-list-items'>Hello world</li>
                  <li className='settings-list-items'>Hello world</li>
              </ul>
          </ChatSettings>
        </div>
    )
}

export default ContentHeader
