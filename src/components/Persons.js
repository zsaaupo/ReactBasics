import React, { Component } from "react";

// function Persons (props) {

//     return (
//         <div>
//             <h1> { props.children } </h1>
//             <h2>Name: { props.name } Age: { props.age }</h2>
//         </div>
//     );

// }

// class with props
class Persons extends Component{
    //we can use props without contructor
    constructor(props) { 
        super(props);
    }
    render(){
        return(
            <div>
                <h1> { this.props.children } </h1>
                <h2>Name: { this.props.name } Age: { this.props.age }</h2>
            </div> 
        );
    }
}

export default Persons