import React, { Component } from 'react'
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
    allChatUsers = [
    {
      image:
        "https://www.propatel.com/wp-content/uploads/2019/09/coding-and-testing-programming-of-software.jpg",
      id: 1,
      name: "F29PD Group 9",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.mMdhchiqsll_xBt2n9mvywHaFj?pid=ImgDet&rs=1",
      id: 2,
      name: "Nature Enthusiasts",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://i1.sndcdn.com/avatars-000309645028-42jo7z-t500x500.jpg",
      id: 3,
      name: "Brainstormers",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://th.bing.com/th/id/R.fbc759d1386fd86fe35dba43daf93958?rik=MKjO%2fz2hSGxgNw&pid=ImgRaw&r=0",
      id: 4,
      name: "We like drawing",
      active: false,
      isOnline: true,
    },
    
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
    render() {
        return (
            <div className='main_chatList'>
                <button className='btn'>
                    <i className='fa fa-plus'></i>
                    <span>New Conversation</span>
                </button>
                <div className='chatList_heading'>
                    <h2>Group chats</h2>
                    <button className='btn-nobg'>
                        <i className='fa fa-ellipsis-h'></i>
                    </button>
                </div>
                <div className='chatList_search'>
                    <div className='search_wrap'>
                        <input type="text" placeholder='Search here' required />
                        <button className='search-btn'>
                            <i className='fa fa-search'></i>
                        </button>
                    </div>
                </div>
                <div className='chatlist_items'>
                        {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
                </div>
            </div>
        )
    }
}
