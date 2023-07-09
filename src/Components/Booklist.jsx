import React, { Component } from 'react'
import Book from './Book';



export class Booklist extends Component {

    constructor()
    {
        super();
       this.state = {

        Book:[{Bookname:"hink and Grow Rich" ,writer:"Tiffany"},
            {Bookname:"More money More problems" ,writer:"Davis" },
            {Bookname:"How to get your mother ? " ,writer:"Harry potter" }],
        ShwoBooks : true
       }
     

    }

    changeBookState = () =>{

        this.setState({

            Book:[{Bookname:"The Color purple" ,writer:"Celie"},
                {Bookname:"javascript bible" ,writer:"trevon martin" },
                {Bookname:"How to fish a fish" ,writer:"Troy davis" }]
        })
    }

    changeInput = (event,index) =>{

        let alldata =  this.state.Book;
       
        alldata[index].Bookname = event.target.value;
    
        this.setState({
            Book : alldata
        });

    }

    deleteDataState = (index) =>{

        let alldata = this.state.Book;
        alldata.splice(index,1);
       this.setState({
        Book: alldata
       });
       

    }


    // imputfieldChange = event =>{

    //     let alldata = this.state.Book;
    //     console.log(event.target.value)
    // }

    toggleManger = () =>{
     
    

         this.setState({

            ShwoBooks : !this.state.ShwoBooks

         })
        
         console.log(this.state.ShwoBooks);
    
    }

  render() {


    const style = {
        borderRadius: "5px",
        color: "Green",
        fontSize: "30px"
        
    }

    let content  = <div className='App'>
        All data hidden
        
        </div>


    const allBooks = this.state.Book;
    if(this.state.ShwoBooks)
    {
         content = allBooks.map((books,index)=>{
       
            return <Book id={books.id}
         Bookname ={books.Bookname}
          writer={books.writer} 
          delete={() => this.deleteDataState(index)}
          inputfieldChange = {(event) => this.changeInput(event,index)}/>

    });
    }
   

    return (

        <div className="App">
            <button onClick={this.toggleManger}>Toogle Books</button>
            
        <h1 style={style}>Book list</h1>
        {content}
        <button onClick={this.changeBookState}>Press me</button>
      </div>  
    )
  }
}

export default Booklist