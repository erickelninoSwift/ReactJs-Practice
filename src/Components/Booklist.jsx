import React, { Component } from 'react'
import Book from './Book';



export class Booklist extends Component {

    constructor()
    {
        super();
       this.state = {

        Book:[{Bookname:"hink and Grow Rich" ,writer:"Tiffany"},
            {Bookname:"More money More problems" ,writer:"Davis" },
            {Bookname:"How to get your mother ? " ,writer:"Harry potter" }]
       }

    }

    changeBookState = () =>{

        this.setState({

            Book:[{Bookname:"The Color purple" ,writer:"Celie"},
                {Bookname:"javascript bible" ,writer:"trevon martin" },
                {Bookname:"How to fish a fish" ,writer:"Troy davis" }]
        })
    }

  render() {

    const allBooks = this.state.Book;
    
    const allbooksItems = allBooks.map((books,index)=>{

        if(index ===2)
        {
            return <Book Bookname ={books.Bookname} writer={books.writer} change={this.changeBookState}/>
        }else
        {
            return <Book Bookname ={books.Bookname} writer={books.writer} />
        }
      
    });
    
    return (
        <div className="App">
        <h1>Book list</h1>
        {allbooksItems}
        <button onClick={this.changeBookState}>Press me</button>
      </div>  
    )
  }
}

export default Booklist