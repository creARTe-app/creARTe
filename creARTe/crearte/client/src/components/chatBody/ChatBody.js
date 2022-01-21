import React, { Component } from 'react'
import ChatContent from '../chatContent/ChatContent';
import ChatList from '../chatList/ChatList';
import "./chatBody.css";

export default class chatBody extends Component {
    render() {
        return (
            <div className='main_chatBody'>
                <ChatList />
                <ChatContent />
            </div>
        )
    }
}

