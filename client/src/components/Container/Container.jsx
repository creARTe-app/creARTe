// @Author Ratiq T.
import React from "react";
import Board from "../Board/Board";
import './style.css';

class container extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <div className="color-container">
                </div>    
                <div className="button-container">
                    <button onclick="">Save</button>
                    <button onclick="">Import</button>
                </div> 
                <div class="board-container">
                    <Board> </Board>
                </div>
            </div>
        )
    }
}

export default container