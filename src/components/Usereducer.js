import React, {useState} from 'react'


const bookData=[
    {id :1,name :"Pather Panchal"},
    {id:2,name:"padma nadir majhi"},
    {id :3, name:"Srikanta"}
]

const   Modal=({moodalText})=>{
    return <p>{moodalText}</p>
}

const Usereducer = () => {
const [books,setBooks]=useState(bookData)
//if the data is added then a modaltext will be shown
//for that reason we need a state whether the message should be shown 
const [isModalOpen,setModalOpen]=useState(false)
const [modalText, setmodalText]=useState("")
const [bookName ,setBookName]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault();
    // alert(bookName)
    setBooks((prevState)=>{
        const newBook={id:new Date().getTime().toString() ,name:bookName}
        return [...prevState,newBook]
    })
        setModalOpen(true)
        setmodalText("book has been added")

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
        {isModalOpen && <Modal moodalText={modalText}/>}


      {books.map((book)=>{
        const {id ,name}=book
        return <li key={id}>{name}</li>
      })}
    </div>
  )
}

export default Usereducer
