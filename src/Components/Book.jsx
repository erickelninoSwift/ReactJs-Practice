import React from "react";
import '../App.css'
import '../stylesheet/Book.css'

const Book = (props) =>{

    const style ={
        color: "Green",
        fontSize: "24px"
    }

    return (
     <div className="App Book">

        <h2 onClick={props.change}>Book name: {props.Bookname}</h2>
         <h3 style={style}>Writer : {props.writer}</h3>
         <input type="text" onChange ={props.inputchange}/>
    </div>);
}


export default Book