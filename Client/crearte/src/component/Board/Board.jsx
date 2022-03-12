import React from 'react';
import io from 'socket.io-client';
import './style.css';

class Board extends React.Component {

    timeout;
    socket = io.connect("http://localhost:3000");
    ctx;
    isDrawing = false;

    constructor(props) {
        super(props);

        this.socket.on("canvas-data", function(data){

        var root = this;
        var interval = setInterval(function(){

            if(root.isDrawing) 
                return;

            root.isDrawing = true;

            clearInterval(interval);
            var image = new Image();
            var canvas = document.getElementById("board");
            var ctx = canvas.getContext("2d");

            image.onload = function() {
            ctx.drawImage(image, 0, 0);
            root.isDrawing = false;
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
        this.ctx.lineWidth = propsNext.size;
    }

    drawCanvas() {
        let canvas = document.querySelector('#board');
        this.ctx = canvas.getContext('2d');
        var ctx = this.ctx;

        var sketch = document.querySelector('#sketch');
        var sketch_style = getComputedStyle(sketch);
        canvas.width = parseInt(sketch_style.getPropertyValue('width'));
        canvas.height = parseInt(sketch_style.getPropertyValue('height'));

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

        var mouse = {x: 0, y: 0};
        var last_mouse = {x: 0, y: 0};

        canvas.addEventListener('mousemove', function(e) {
            last_mouse.x = mouse.x;
            last_mouse.y = mouse.y;

            /* fixes the problem where start of drawing does not coincide
            with the x and y coordinates of mouse click */
            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
        }, false);

        ctx.lineWidth = this.props.size;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = this.props.color;

        // on mouse click
        canvas.addEventListener('mousedown', function(e) {
            canvas.addEventListener('mousemove', onPaint, false);
        }, false);

        canvas.addEventListener('mouseup', function() {
            canvas.removeEventListener('mousemove', onPaint, false);
        }, false);

        var root = this;
        // draw
        var onPaint = function() {
            ctx.beginPath();
            ctx.moveTo(last_mouse.x, last_mouse.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.closePath();
            ctx.stroke();

            if(root.timeout != undefined) clearTimeout(root.timeout);
            root.timeout = setTimeout(function(){
                var base64ImageData = canvas.toDataURL("image/png");
                root.socket.emit("canvas-data", base64ImageData);
            }, 100)
        };

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