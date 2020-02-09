import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid'
var move = require('./Util.js').move;
function App() {

  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}

function Piece(props){


    switch(props.value.piece) {
        case 'rook':
            return <button onClick={props.onClick} style={props.value.inputStyle}><img src = {require('./assets/pieces/rook.png')}></img></button>;
        break;
        case 'horse':
            return <button onClick={props.onClick} style={props.value.inputStyle}><img src = {require('./assets/pieces/horse.png')}></img></button>;
        break;
        case 'bishop':
            return <button onClick={props.onClick} style={props.value.inputStyle}><img src = {require('./assets/pieces/bishop.png')}></img></button>;
        break;
        case 'pawn':
            return <button onClick={props.onClick} style={props.value.inputStyle}><img src = {require('./assets/pieces/pawn.png')}></img></button>;
        break;
        case 'king':
            return <button onClick={props.onClick} style={props.value.inputStyle}><img src = {require('./assets/pieces/king.png')}></img></button>;
        break;
        case 'queen':
            return <button onClick={props.onClick} style={props.value.inputStyle}><img src = {require('./assets/pieces/queen.png')} ></img></button>;
        break;

        case 'wrook':
            return <button onClick={props.onClick} style={props.value.inputStyle}><img style = {{width: "50px", height: "50px"}} src = {require('./assets/pieces/wrook.png')} ></img></button>;
            break;
        case 'whorse':
            return <button onClick={props.onClick} style={props.value.inputStyle}><img src = {require('./assets/pieces/whorse.png')}></img></button>;
            break;
        case 'wbishop':
            return <button onClick={props.onClick} style={props.value.inputStyle}><img src = {require('./assets/pieces/wbishop.png')} s></img></button>;
            break;
        case 'wpawn':
            return <button onClick={props.onClick} style={props.value.inputStyle}><img src = {require('./assets/pieces/wpawn.png')} ></img></button>;
            break;
        case 'wking':
            return <button onClick={props.onClick} style={props.value.inputStyle}><img src = {require('./assets/pieces/wking.png')} ></img></button>;
            break;
        case 'wqueen':
            return <button onClick={props.onClick} style={props.value.inputStyle}><img src = {require('./assets/pieces/wqueen.png')} ></img></button>;
            break;
        default:
            return <button style={props.value.inputStyle} onClick={props.onClick}><img className="empty"></img></button>;
    }
}
class Board extends React.Component {


    componentDidMount(){

    }
    stack = [];
    flagStack = [];
    table: string[];
    constructor(){
        super();
        this.table = [];
        this.state = {
            index: null
        };
        for(let  i = 0; i < 8; ++i){
            this.table.push([])
            for(let  j = 0; j < 8; ++j){
                if(i === 0 && j === 0){
                    this.table[i].push({piece: 'rook', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 0 && j === 1){
                    this.table[i].push({piece:'horse', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 0 && j === 2){
                    this.table[i].push({piece:'bishop', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 0 && j === 3){
                    this.table[i].push({piece:'king', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 0 && j === 4){
                    this.table[i].push({piece:'queen', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 0 && j === 5){
                    this.table[i].push({piece:'bishop', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 0 && j === 6){
                    this.table[i].push({piece:'horse', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 0 && j === 7){
                    this.table[i].push({piece:'rook', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 1){
                    this.table[i].push({piece:'pawn', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else

                if(i === 7 && j === 0){
                    this.table[i].push({piece:'wrook', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 7 && j === 7){
                    this.table[i].push({piece:'wrook', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 7 && j === 6){
                    this.table[i].push({piece:'whorse', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 7 && j === 5){
                    this.table[i].push({piece:'wbishop', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 7&& j === 4){
                    this.table[i].push({piece:'wqueen', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 7 && j === 3){
                    this.table[i].push({piece:'wking', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 7 && j === 2){
                    this.table[i].push({piece:'wbishop', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 7 && j === 1){
                    this.table[i].push({piece:'whorse', inputStyle: {
                        width: "75px",
                            height: "75px",
                    }});
                }else
                if(i === 6){
                    this.table[i].push({piece:'wpawn', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                {
                    this.table[i].push({piece:'', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }
            }
        }
    }

    render(){
        return (
            <div className="App">
                <div> value = {this.state.index !== null ?  this.table[this.state.index.y][this.state.index.x].piece : '?'} </div>
                {this.table.map((table,i) =>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            {table.map((elems,j) =>
                            <Piece value={elems} onClick={() => this.handleClick(j,i)}></Piece>

                            )}
                        </Grid>
                    </Grid>
                )}

            </div>
        );
    }




    handleClick(x,y){
        this.setState({index: {x:x,y:y}});
             move(y,x,this.table,this.stack,this.flagStack);

    }
}

export default App;
