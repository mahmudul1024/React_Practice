import React ,{useState}  from 'react'
import style from './Form.module.css'
export default function Forms() {



const [user,setUser]=useState({Name:'',Email:'',Pass:''})
//Destructuring
const {Name,Email,Pass}=user







const Single_Handler=(e)=>{
    const filename=e.target.name;
    


    
    if(filename==="name"){
        setUser({Name:e.target.value,Email,Pass})

    }

    if(filename==="Email"){
        setUser({Name,Email:e.target.value,Pass})
    }

    if(filename==="Password"){
        setUser({Name,Email,Pass:e.target.value})
    }

//simplified use spread operator


}


const handledSubmit=(e)=>{
    console.log("form is submitted")
    
    console.log(user)

    e.preventDefault()
}


  return (
    <div>
    <h1>Regestration</h1>
      <form action='' onSubmit={handledSubmit}>
      <div className={style.formGroup}>
      <label htmlFor='Name'>Name :</label>
      <input type="text" name='name' id='name' value={Name} onChange={Single_Handler} required ></input>
      </div>

      <div className={style.formGroup}>
      <label htmlFor='Email'>Email :</label>
      <input type="text" name='Email' id='Email' value={Email} onChange={Single_Handler} required ></input>
      </div>


      <div className={style.formGroup}>
      <label htmlFor='Name'>Password :</label>
      <input type="text" name='Password' id='Password' value={Pass} onChange={Single_Handler} required ></input>
      </div>

      <div >
        <button type='submit'>Register</button>
      </div>
</form>


    </div>
  )
}
