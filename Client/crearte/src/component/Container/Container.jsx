import React from "react";
import Board from "../Board/Board";
import './style.css';

class container extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            color: "#00000",
            size: "50"
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
                    <Board color={this.state.color} size={this.state.size}></Board>
                </div>
            </div>
            <div>
                <nav class="main-menu">
                
                    <div class="settings"></div>
                    <ul>
                    
                            <li>
                                
                                    <i class="fa-solid fa-paint-roller fa-lg"></i>
                                    <span className="nav-text"><input type="color" value={this.state.color} onChange={this.newColor.bind(this)}></input></span>
                                
                            </li>

                            <li>
                            
                                <i class="fa fa-paint-brush fa-lg"></i> 
                                <span class="nav-text"><input id="slider" type="range" min="5" max="100" value={this.state.size} onChange={this.brushSize.bind(this)}></input></span>
                            
                            </li>

                            <li>
                                <i class='fa-solid fa-eraser fa-lg'></i>
                                <span class="nav-text">CLEAR ALL</span>
                            </li>
                            
                            <li>
                              
                                    <button className="file-buttons" id="save">
                                        <i class="fa fa-save fa-lg"></i>
                                    </button>
                                    <span class="nav-text">SAVE</span>
                               
                            </li>

                            <li>
                                    <label className="file-buttons" for="fileInput"> 
                                        <i class="fa fa-upload fa-lg"></i> 
                                    </label>
                                    <input id="fileInput" type="file"/>
                                    <span class="nav-text">Import</span>
                              
                            </li>
                            
                    </ul>
                </nav>
            </div>
             
        </div>
        )
    }
}

export default container