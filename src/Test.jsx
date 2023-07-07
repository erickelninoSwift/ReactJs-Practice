import React from "react";
import './App.css';


function Student(props)
{

    console.log(this.props)
    return (
      <div className="App  myPadding">

         <h1>Welcom to my Hood {props.name} and {props.age}</h1>
      </div>
    );
}

export default Student;