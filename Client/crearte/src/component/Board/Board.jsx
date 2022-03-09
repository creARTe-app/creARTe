import React from 'react';
import io from 'socket.io-client';
import './style.css';

class Board extends React.Component {

    timeout;
    socket = io.connect("http://localhost:3000");
    ctx;
    //isDrawing = false;

    constructor(props) {
        super(props);

        this.socket.on("canvas-data", function(data){

       //     var root = this;
            var interval = setInterval(function(){
               // if(root.isDrawing) return;
               // root.isDrawing = true;
               // clearInterval(interval);
                var image = new Image();
                var canvas = document.getElementById("board");
                var ctx = canvas.getContext("2d");
                image.onload = function() {
                    ctx.drawImage(image, 0, 0);
                   // root.isDrawing = false;
                };
                image.src = data;
            }, 100)
        })
    }

    componentDidMount() {
        this.drawCanvas();
    }

    componentWillReceiveProps(propsNext){
        this.ctx.strokeStyle = propsNext.color;
    }

    drawCanvas() {
        let canvas = document.getElementById("board");
        
        canvas.width = 0.98 * window.innerWidth;
        canvas.height = 0.95 * window.innerHeight;
        
        this.ctx = canvas.getContext("2d");
        var ctx = this.ctx;

        const upload =document.getElementById("fileInput");
        upload.addEventListener('change',(e)=>{
          console.log(canvas.height,canvas.width);
          const myFile = upload.files[0];
          console.log(myFile.name);
          const img = new Image();
          img.src = URL.createObjectURL(myFile);
          img.onload = function(){
            console.log(img.height,img.width);
            ctx.drawImage(img,0,0,canvas.width,canvas.height);
            }
        })

        //x and y coordinates
        let x;
        let y;
        let Down = false;

        ctx.strokeStyle = this.props.color;

        // on mouse click
        window.onmousedown = (e) => {
            ctx.moveTo(x, y);
            Down = true;
        }

        window.onmouseup = (e) => {
            Down = false;
        };

        var root =this;
        // draw
        window.onmousemove = (e) => {
            x = e.clientX;
            y = e.clientY;

            if (Down) {
                ctx.lineTo(x, y);
                ctx.stroke();
                if(root.timeout != undefined) clearTimeout(root.timeout);
                root.timeout = setTimeout(function () {
                    var base64ImageData = canvas.toDataURL("image/png");
                    root.socket.emit("canvas-data", base64ImageData);
                }, 100)
            }
        }

        function onSave() {
            canvas.toBlob((blob) => {
              const timestamp = Date.now().toString();
              const a = document.createElement('a');
              document.body.append(a);
              a.download = `creArte-${timestamp}.png`;
              a.href = URL.createObjectURL(blob);
              a.click();
              a.remove();
            });
          }

        document.querySelector('#save').addEventListener('click', onSave);
    }

    render() {
        return (
            <div class="sketch" id="sketch">
                <canvas className="board" id="board"></canvas>
            </div>
        )
    }
}

export default Board