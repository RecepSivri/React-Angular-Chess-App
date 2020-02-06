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
                    this.table[i].push({piece:'knight', inputStyle: {
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
                    this.table[i].push({piece:'knight', inputStyle: {
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
                    this.table[i].push({piece:'piece', inputStyle: {
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
                    this.table[i].push({piece:'wknight', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 7 && j === 6){
                    this.table[i].push({piece:'wbishop', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 7 && j === 5){
                    this.table[i].push({piece:'wking', inputStyle: {
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
                    this.table[i].push({piece:'wbishop', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 7 && j === 2){
                    this.table[i].push({piece:'wknight', inputStyle: {
                            width: "75px",
                            height: "75px",
                        }});
                }else
                if(i === 7 && j === 1){
                    this.table[i].push({piece:'wrook', inputStyle: {
                        width: "75px",
                            height: "75px",
                    }});
                }else
                if(i === 6){
                    this.table[i].push({piece:'wpiece', inputStyle: {
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
                                    <button  style={elems.inputStyle} id={i*8+j}>{elems.piece}</button>
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
