import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
class Square extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button className="button" onClick={() => {this.props.onClick();}}>{this.props.value ||<div>&nbsp;</div>}</button>
  }
  
}

class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
     return this.props.squares.map((arrayElements, index) => {
       return <>
        <Square key={index} onClick={()=>this.props.handleSquareClick(index)} value={arrayElements} />
        {(index + 1) % 3 === 0 ? <br/> : <></>}
      </>
     });
    }
  }
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      nextSymbol: "O",
      gameWon: false,
    }
    this.handleSquareClick=this.handleSquareClick.bind(this)
  }
  checkWinning(squares) {
    const winningCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
      let [a, b, c] = winningCombinations[i];

      if (
        (squares[a] === "X" || squares[a] === "O") &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return winningCombinations[i];
      }
    }
  }

  handleSquareClick(index) {
    console.log(`User click ${index}`);
    const stateSquares = this.state.squares;
 
    if (stateSquares[index] !== null || this.state.gameWon) {
      return;
    }

    stateSquares[index] = this.state.nextSymbol;

    let winningCombination = this.checkWinning(stateSquares);
    if (winningCombination) {
      document.write(`This combination won ${winningCombination}`); 
      this.setState({ gameWon: true });
    }

    const nextSymbol = this.state.nextSymbol === "X" ? "O" : "X";
    this.setState({ squares: stateSquares, nextSymbol: nextSymbol });
  }

  render() {
    return (
      <Board
        squares={this.state.squares}
        handleSquareClick={this.handleSquareClick}
      />
    );
    
  }
}

ReactDOM.render(<Game />,document.getElementById("root"))