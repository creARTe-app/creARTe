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
            <div className="container">
                <div className="color-container">
                    <div>
                        Color: &nbsp;
                    </div>
                    <input type="color" value={this.state.color} onChange={this.newColor.bind(this)}/>
                </div>    
                <div className="button-container">
                    {/* <button id="save">Save</button> */}
                    <button className="file-buttons" id="save"><i class="fa fa-save"></i></button>
                    <label className="file-buttons" for="fileInput"> 
                        <i class="fa fa-upload"></i> 
                    </label>
                     <input id="fileInput" type="file"/>{/*onClick="setImage()"/> */}
                    {/* <img id="preview"></img> */}
                     {/* <button className="file-buttons" id="import">
                        <i class="fa fa-upload" ></i> 
                    </button> */}
                </div> 
                <div className="brushsize-container">
                    <div>
                        Size: &nbsp;
                    </div>
                    <input id="slider" type="range" min="5" max="100" value={this.state.size} onChange={this.brushSize.bind(this)}></input>
                </div>

                <div class="board-container">
                    <Board color={this.state.color} size={this.state.size}></Board>
                </div>
            </div>
        )
    }
}

export default container