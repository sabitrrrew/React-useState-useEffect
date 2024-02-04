// import React from "react";

// function Square(props) {              // FUNCTIONAL COMPANENT
//   return(
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   )
// };


// // class Square extends React.Component {
// //   render() {
// //     return(
// //       <button className="square" 
// //       onClick={() => this.props.onClick()}
// //       >
// //         {this.props.value}
// //       </button>
// //     )
// //   }
// // }

// class Board extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       squares: Array(9).fill(null), xIsNext: true}
//   }

// handleClick(i) {
//   const squares = this.state.squares.slice();
//   if(calculateWinner(squares) || squares[i]) {
//     return;
//   }
//   squares[i] = this.state.xIsNext ? "X" : "O";
//   this.setState({squares: squares, xIsNext: !this.state.xIsNext})
// }
//   renderSquare(i) {
//     return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
//   }
//   render() {
//     const winner = calculateWinner(this.state.squares)
    
//     let status;
//     if(winner) {
//       status = "Winner:" + winner
//     } else {
//       status = "Next player:" + (this.state.xIsNext ? "X" : "O")
//     };
//     return(
//       <div>
//         <div className="status1">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     )
//   }
// };

// class Game extends React.Component {
//   render() {
//     return(
//       <div className="game">
//         <div className="game-board">
//           <Board/>
//         </div>
//         <div className="game-info">
//           <div></div>
//           <ol></ol>
//         </div>
//       </div>
//     )
//   }
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2]
//     [3, 4, 5]
//     [6, 7, 8]
//     [0, 3, 6]
//     [1, 4, 7]
//     [2, 5, 8]
//     [0, 4, 8]
//     [2, 4, 6]
//   ];
//   for(let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i]
//     if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a]
//     }
//   }
//   return null
// }
// export default Game;


// HOME WORK OF 2
// import React from "react"

// import {useState} from "react"

// function App(props) {
//   let [btn1, changeBtn1] = useState("blue")
//   let [btn2, changeBtn2] = useState("red")                       
//   function changeColor(char) {
//     if(char === "a") {
//       changeBtn1(btn1==="red"?"blue": "red")
//       changeBtn2(btn2=="blue"?"red": "blue")
//     }else if(char="b") {

//     }

//   }
//   return(
//     <div>
//       <button style={{background : btn1}} onClick={() => changeColor("a")}></button>
//       <button style={{background : btn2}} onClick={() => changeColor("b")}></button>
//     </div>
//   )
// };

// export default App;





// export default function Click() {
//   const [count,setCount] = useState(0)

//   return (
//     <div>
//       <p>You clicked the button {count}  times</p>
//       <button onClick={() => setCount(count + 1)}>Click</button>
//     </div>
//   )
// }

import { useState, useEffect } from "react"; 
export default function Example() {
  const [count,setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })
  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}






























// class Square extends React.Component { 



//   render() {
//     return(
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     )
//   }
// }

// class Board extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//     squares: Array(9).fill(null)
//     }
//   }
//   handleClick(i) {
//     const squares = this.state.squares.slice()
//     squares[i] = "X"
//     this.setState(squares: squares)
//   }
//   renderSquare(i) {
//     return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
//   }
//   render() {
//     const status = "Next player: X"

//     return(
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     )
//   }
// }

// class Game extends React.Component {
//       |class of component react  | it is tipe of component react
//   render() {
//     return(
//       <div className="game">
//         <div className="game-board">
//           <Board/>
//           <div className="game-info">
//             <div></div>
//             <ol></ol>
//           </div>
//         </div>
//       </div>
//     )
//   }
// };

// export default Game;












// class ShoppingList extends React.Component {
//   render () {
//     return(
//       <div className="shopping-list">
//         <h1>ShoppingList for {this.props.name}</h1>
//       </div>
//     )
//   }
// };
// export default (App)
