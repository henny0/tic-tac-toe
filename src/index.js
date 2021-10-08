import React from "react";
import ReactDOM from "react-dom";

class Square extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <button onClick={() => {
                this.props.onClick();
            }}
            >
            {this.props.value}
            </button>
        );   
    }
}
class Board extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return this.props.squares.map((arrayElement, index) => {
        const arrowSquareFunction = () => this.props.handleSquareClick(index);
            return (
                <Square key={index} onClick={arrowSquareFunction} value={arrayElement}
                />
            );
        });
   }
}

class Game extends React.Component {
    constructor(props){
        super(props);


        this.state={
            squares: Array(9).fill(null),
            nextSymbol: "X",
        };

        this.handleSquareClick= this.handleSquareClick.bind(this);
    }

    handleSquareClick(index){
        console.log(`User click ${index}`);
        const stateSquares = this.state.nextSymbol;
        const nextSymbol = this.state.nextSymbol === "X" ? "O" : "X";
        this.setState({squares : stateSquares, nextSymbol: nextSymbol});
    }

    render() {
        return(
            <Board squares={this.state.squares}
            handleSquareClick={this.handleSquareClick}
            />
        );
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));