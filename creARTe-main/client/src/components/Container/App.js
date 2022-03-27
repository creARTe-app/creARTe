import "./App.css";
import io from "socket.io-client";
import React, { useEffect, useState } from "react";
import Container from "../Container/Container";


const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const user = JSON.parse(localStorage.getItem('profile'));
  const [usernamechat, setUsernamechat] = useState(false);
  
  useEffect(() =>{
    if(usernamechat === false){
      setUsername(user?.result?.name)
      setUsernamechat(!usernamechat)
    }
  })

  
  //alert(username)
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
      document.getElementById("room-form").classList.remove("App");
    }
  };

  return (
    <>
    <div class="App" id="room-form">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Room</h3>
          {/* <input
            type="text"
            placeholder="Name..."
            onChange={(event) => {
              //setUsername(event.target.value);
            }}
          /> */}
          <input
            type="text"
            placeholder="Chatroom ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join</button>     
        </div>
      ) : (
        <Container socket={socket} username={username} room={room} />
      )}
    </div>
    </>
  );
}

export default App;
