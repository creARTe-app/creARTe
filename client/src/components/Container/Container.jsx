import React from "react";
import Board from "../Board/Board";
import './style.css';
import Chat from "../Chat/Chat";
import BrushIcon from '@material-ui/icons/Brush';
import SaveIcon from '@material-ui/icons/Save';
import PaletteIcon from '@material-ui/icons/Palette';
import PublishIcon from '@material-ui/icons/Publish';
import ChatIcon from '@material-ui/icons/Chat';

class container extends React.Component {

    constructor({ socket, username, room }) {
        super({ socket, username, room });

        this.state = {
            color: "#00000",
            size: "10",
            sockets: socket,
            rooms: room,
            username: username
        }
    }

    newColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    brushSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    componentDidMount() {
        const chat = document.querySelector('.chat-popup');
        const chatBtn = document.querySelector('.chat-button');

        chatBtn.addEventListener('click', () => {
            chat.classList.toggle('show');
        })
    };


    render() {
        return (
            <div>
                <div className="container">
                    <div class="board-container">
                        <Board color={this.state.color} size={this.state.size} socket={this.state.sockets} room={this.state.rooms}></Board>
                    </div>
                </div>
                <div>
                    <nav class="main-menu">
                        <ul>
                            <li>
                                <a>
                                    <i><PaletteIcon class="size-icon" fontSize="medium" /></i>
                                    <span className="nav-text"><input type="color" value={this.state.color} onChange={this.newColor.bind(this)}></input></span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i><BrushIcon class="size-icon" fontSize="medium" /></i>
                                    <span class="nav-text"><input id="slider" type="range" min="5" max="100" value={this.state.size} onChange={this.brushSize.bind(this)}></input></span>
                                </a>
                            </li>
                            <li>
                                <button className="file-buttons" id="save">
                                    <i> <SaveIcon fontSize="medium"></SaveIcon></i>
                                </button>
                            </li>
                            <li>
                                <label for="fileInput">
                                    <i> <PublishIcon className="file-size-icon" fontSize="medium" /></i>
                                </label>
                                <input id="fileInput" type="file" />
                            </li>
                            <li>
                                <button className="file-buttons" id="rubber">
                                    <i> </i>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <button class="chat-button">
                        <ChatIcon className="chat-button-icon" fontSize="large" />
                    </button>
                    <div class="chat-popup transition-3">
                        <div class="chat-area transition-3">
                            <Chat socket={this.state.sockets} username={this.state.username} room={this.state.rooms} />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default container;