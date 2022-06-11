import React ,{useState}  from 'react'
import style from './Form.module.css'
export default function Forms() {


const [Name,setName]=useState('')
const [Email,setEmail]=useState('')
const [Pass,setPass]=useState('')




const handledNameChange=(e)=>{
  setName(e.target.value)
}

const handledEmailChange=(e)=>{
    setEmail(e.target.value)
}

const handledPassChange=(e)=>{
    setPass(e.target.value)
}


const handledSubmit=(e)=>{
    console.log("form is submitted")
    let userinfo={
        Name ,  // Name :Name
        Email,  //Email : Email
        Pass    //Pass : Pass
    }
    console.log(userinfo)

    e.preventDefault()
}


  return (
    <div>
    <h1>Regestration</h1>
      <form action='' onSubmit={handledSubmit}>
      <div className={style.formGroup}>
      <label htmlFor='Name'>Name :</label>
      <input type="text" name='name' id='name' value={Name} onChange={handledNameChange} required ></input>
      </div>

      <div className={style.formGroup}>
      <label htmlFor='Email'>Email :</label>
      <input type="text" name='Email' id='Email' value={Email} onChange={handledEmailChange} required ></input>
      </div>


      <div className={style.formGroup}>
      <label htmlFor='Name'>Password :</label>
      <input type="text" name='Password' id='Password' value={Pass} onChange={handledPassChange} required ></input>
      </div>

      <div >
        <button type='submit'>Register</button>
      </div>
</form>


    </div>
  )
}
