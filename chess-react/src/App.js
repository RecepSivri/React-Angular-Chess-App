import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
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
            return <button><img src = {require('./assets/pieces/rook.png')} style={props.value.inputStyle}></img></button>;
        break;
        case 'horse':
            return <button><img src = {require('./assets/pieces/horse.png')} style={props.value.inputStyle}></img></button>;
        break;
        case 'bishop':
            return <button><img src = {require('./assets/pieces/bishop.png')} style={props.value.inputStyle}></img></button>;
        break;
        case 'pawn':
            return <button><img src = {require('./assets/pieces/pawn.png')} style={props.value.inputStyle}></img></button>;
        break;
        case 'king':
            return <button><img src = {require('./assets/pieces/king.png')} style={props.value.inputStyle}></img></button>;
        break;
        case 'queen':
            return <button><img src = {require('./assets/pieces/queen.png')} style={props.value.inputStyle}></img></button>;
        break;

        case 'wrook':
            return <button><img src = {require('./assets/pieces/wrook.png')} style={props.value.inputStyle}></img></button>;
            break;
        case 'whorse':
            return <button><img src = {require('./assets/pieces/whorse.png')} style={props.value.inputStyle}></img></button>;
            break;
        case 'wbishop':
            return <button><img src = {require('./assets/pieces/wbishop.png')} style={props.value.inputStyle}></img></button>;
            break;
        case 'wpawn':
            return <button><img src = {require('./assets/pieces/wpawn.png')} style={props.value.inputStyle}></img></button>;
            break;
        case 'wking':
            return <button><img src = {require('./assets/pieces/wking.png')} style={props.value.inputStyle}></img></button>;
            break;
        case 'wqueen':
            return <button><img src = {require('./assets/pieces/wqueen.png')} style={props.value.inputStyle}></img></button>;
            break;
        default:
            return <button><img className="empty" style={props.value.inputStyle}></img></button>;
    }
}
class Board extends React.Component {

    table: string[];
    constructor(){
        super();
        this.table = [];
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
                            <Piece value={elems}></Piece>

                            )}
                        </Grid>
                    </Grid>
                )}

            </div>
        );
    }



    handleClick(x,y){
        window.alert(x + ',' + y);
    }
}

export default App;
