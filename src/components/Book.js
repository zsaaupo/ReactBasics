import React from "react";
import '../StyleSheet/Book.css';

let Book = props => {
    return(
        <div className="Book">
            <h1 onClick={props.change}>Book name : {props.name} writer: {props.writer}</h1>
        </div>
    );
}

export default Book;