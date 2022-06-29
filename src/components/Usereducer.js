import React, {useState,useReducer} from 'react'
import { reducer } from './reducer'

const bookData=[
    {id :1,name :"Pather Panchal"},
    {id:2,name:"padma nadir majhi"},
    {id :3, name:"Srikanta"}
]

const   Modal=({moodalText})=>{
    return <p>{moodalText}</p>
    
}



const Usereducer = () => {
// const [books,setBooks]=useState(bookData)

//if the data is added then a modaltext will be shown
//for that reason we need a state whether the message should be shown 

// const [isModalOpen,setModalOpen]=useState(false)
// const [modalText, setmodalText]=useState("")
 const initialState={
    books:bookData,
    isModalOpen:false,
    modalText:""

}
//we will call reducer-action(add/remove) by dispatch
const [bookState,dispatch]=useReducer(reducer,initialState)
const [bookName ,setBookName]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault();
    const newBook={id:new Date().getTime().toString() ,name:bookName}
    //ki dispatch korte chai ,setar type and oi data(newBook) send korte hobe  
    dispatch({type: "ADD" ,payload :newBook})
    //after dispaching again the input field will be empty
    setBookName("")

}

const removeBook=(ida)=>{
    // alert(ida)
    dispatch({type:"REMOVE" ,payload:ida})
}

  return (
    <div>
      <h3>Without  Usereducer</h3>
      <h3>Book List</h3>

    <form onSubmit={handleSubmit}>
    {/* bookNme is a State to hold the input */}
        <input type="text" value={bookName}
        onChange={(e)=>{
            setBookName(e.target.value)
        }} ></input>
        <button type='submit'>Add book</button>
        
    </form>
        {bookState.isModalOpen && <Modal moodalText={bookState.modalText}/>}


      {bookState.books.map((book)=>{
        const {id ,name}=book
        return <li key={id}>{name} <button onClick={
            ()=>{removeBook(id)}
        } >Remove</button></li>
      })}
    </div>
  )
}

export default Usereducer
