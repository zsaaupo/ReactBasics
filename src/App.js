import React, { Component } from 'react';
import './App.css';
import Nihongo from './components/Nihongo';
import RanNumber from './components/RanNumber';
import Persons from './components/Persons';
import Book from './components/Book';

//JSX
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <Spalona/> {/* nested component */}
//     </div>
//   );
// }


// function Spalona() {
//   return <h1>Hola amigos!</h1>
// }





// // by using crateElement
// function App() {
//   return React.createElement("div", { className: "App"}, React.createElement("h1", null, "Hello World!"), <Spalona />);
// }


// function Spalona() {
//   return <h1>Hola amigos!</h1>
// }




// Class component
class App extends Component {

  // State diclaration [it can be use only in class component]
  state = {
        books: [
          {name: "Ichiban", writer: "Niban"},
          {name: "Sanban", writer: "Konban"},
          {name: "Shichiban", writer: "Niban"}
        ]
      }

  // Old method
  // constructor(){
  //   super();
  //   this.state = {
  //     books: [
  //       {book: "Ichiban", write: "Niban"},
  //       {book: "Sanban", write: "Konban"},
  //       {book: "Shichiban", write: "Niban"}
  //     ]
  //   }
  // }
  

  changeState = bookName => {
      // setState is a built in funtion it can only change the values
      this.setState({
        books: [
          {name: bookName, writer: "Niban"},
          {name: "Sanban", writer: "Konban"},
          {name: "Shichiban", writer: "change"}
        ]
      });
  }

  changeText = event => {
    this.setState({
      books: [
        {name: event.target.value, writer: "Niban"},
        {name: "Sanban", writer: "Konban"},
        {name: "Shichiban", writer: "change"}
      ]
    });
}

  render(){

    // css style as object
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white",
    };

    return (
      <div className="App">
        <button onClick={() => this.changeState("NaN")}>Butan</button> {/* using arrow function to call method with param */}
        <h1 style={style} >Hello World!</h1> {/* add css style object */}
        <Spalona/> {/* nested component */}
        <Nihongo />
        <RanNumber />
        <RanNumber />
        <RanNumber />
        <RanNumber />
        
        <Persons name = "JKC" age = "35"> Persons list </Persons> {/* proms with as HTML tag */}

        {/* proms */}
        <Persons name = "Joy" age = "30"/>
        <Persons name = "KCB" age = "27"/>

        <Book name = "Joy" writer = "30"/>

        {/* passing props by using state  */}
        <Book name = {this.state.books[0].name} writer = {this.state.books[0].writer}/>
        <Book name = {this.state.books[1].name} writer = {this.state.books[1].writer}/>
        <input onChange={this.changeText}></input>
        <Book name = {this.state.books[2].name} writer = {this.state.books[2].writer} change = {this.changeState.bind(this, "nAn")}/> {/* passing function as param */}
      </div>
    );

  }
}


function Spalona() {
  return <h1>Hola amigos!</h1>
}


export default App;