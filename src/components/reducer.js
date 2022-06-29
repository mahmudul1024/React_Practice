export const reducer=(state,action)=>{
    //action.type ,action.payload pabo ekhane
    if(action.type==="ADD"){
const allBooks= [...state.books,action.payload]
        return {
            ...state,
            books:allBooks,
            isModalOpen:true,
            modalText:"modal has added"
        }

    }
    if(action.type==="REMOVE"){
        const filteredBooks=[...state.books].filter((book)=>
        book.id !==action.payload)
        return{
            ...state,
            books:filteredBooks,
            isModalOpen:true,
            modalText:"Book has been deleted"
        }

    }
    return state
}