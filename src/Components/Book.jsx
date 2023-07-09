import React from "react";
import '../App.css'

const Book = (props) =>{

    return (
     <div className="App">

        <h2 onClick={props.change}>Book name: {props.Bookname}</h2>
         <h3>Writer : {props.writer}</h3>
    </div>);
}


export default Book