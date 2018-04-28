import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null
    };
  }
  render(){
    return (
      <button className="square" 
        onClick={ ()=>this.setState({value:"X"}) }>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(){
    super();
    this.colPerRow = 5;
    this.rowsPerBoard = 4;
  }
  renderSquare(i){
    return <Square value={i} />;
  }
  renderRow(i){
    let arow = [];
    for (let j=i;j<i+this.colPerRow;j++){
      arow.push(this.renderSquare(j));
    }
    return arow; 
  }
  renderBoard(){
    let i ;
    let rows = [];
    for (let j=0;j<this.rowsPerBoard;j++){
      i=this.colPerRow*j;
      rows.push(
        <div className="board-row">
          {this.renderRow(i)}
        </div>
      )
    }
    return rows;
  }
  render(){
    const status = 'next plager: x';
    return (
        <div>
          <div className="status">{status}</div>
          {this.renderBoard()} 
        </div>
    );
    {/*
    (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderRow(0)}
        </div>
        <div className="board-row">
          {this.renderRow(3)}
        </div>
        <div className="board-row">
          {this.renderRow(6)}
        </div>
      </div>
    )
  */}
  }
}
class Game extends React.Component{
  render() {
    return(
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div>{/*status*/}</div>
        <ol>{/* todo */}</ol>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
