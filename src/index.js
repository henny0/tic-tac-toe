import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css"
class Square extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    return (
        <button
        onClick={() => {
            this.props.onClick();
        }}
        >
            {this.props.value}
        </button>
    );
}
}
class Board extends React.Component{
    constructor(props){
    super(props);
}

render(){
    return this.props.squares.map((arrayElement, index) => {
        const arrowSquareFunction = () => this.props.handleSquareClick(index);
        return (
            <Square
            key={index}
            onClick={arrowSquareFunction}
            value={arrayElement}
            />
        );
    });
    }
}


class Game extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        nextSymbol: "O"
        };
        this.handleSquareClick = this.handleSquareClick.bind(this);
    }
handleSquareClick(index){
    const stateSquares = this.state.squares;
    stateSquares[index] = this.state.nextSymbol;
    const nextSymbol = this.state.nextSymbol === "X" ? "O" : "X";
    this.setState({ squares: stateSquares, nextSymbol: nextSymbol});
}
render(){
return (
    <Board
    squares={this.state.squares}
    handleSquareClick={this.handleSquareClick}
    />
);
}
}


ReactDOM.render(<Game />, document.getElementById("root"));