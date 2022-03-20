import React from "react";
import Board from "../Board/Board";
import './style.css';

class container extends React.Component {
    
    constructor({socket,room}){
        super({socket,room});

        this.state = {
            color: "#00000",
            size: "10",
            sockets: socket,
            rooms: room
        }
    }

    newColor(params){
        this.setState({
            color: params.target.value
        })   
    }

    brushSize(params){
        this.setState({
            size: params.target.value
        })   
    }



    render(){
        return(
        <div>
            <div className="container">
                <div class="board-container">
                    <Board color={this.state.color} size={this.state.size} socket={this.state.sockets} room={this.state.rooms}></Board>
                </div>
            </div>
            <div>
                <nav class="main-menu">
                
                    {/* <div class="settings"></div>
                    <div class="scrollbar" id="style-1"></div> */}
                    <ul>
                    
                            <li>
                                <a>
                                    <i class="fa fa-paint-brush fa-lg"></i> 
                                    <span className="nav-text"><input type="color" value={this.state.color} onChange={this.newColor.bind(this)}></input></span>
                                </a>
                                
                                
                            
                            </li>

                            <li>
                                <a>
                                    <i class="fa fa-paint-brush fa-lg"></i> 
                                    <span class="nav-text"><input id="slider" type="range" min="5" max="100" value={this.state.size} onChange={this.brushSize.bind(this)}></input></span>
                                </a>
                            </li>

                            
                            <li>
                                
                                <button className="file-buttons" id="save">
                                    <i class="fa fa-save fa-lg"></i>
                                </button>

                            </li>

                            <li>
                                <label className="file-buttons" for="fileInput"> 
                                    <i class="fa fa-upload fa-lg"></i> 
                                </label>
                                <input id="fileInput" type="file"/>
                            </li>
                            
                    </ul>
                </nav>
            </div>
             
        </div>
        )
    }
}

export default container;