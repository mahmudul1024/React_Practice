import React, { useRef } from 'react'

const Userform = () => {

// 1..create Ref by hook
const userNameRef=useRef();
const userPasswordRef=useRef();

const handleFormSubmit=(event)=>{
event.preventDefault();

//directly amra dom k access korte parchi without help of onClick or onChange 
//esober sahojjo chara ..amra control korchi na ..directly access korchi Ref hook er maddhome
console.log("submitted")
const userName=userNameRef.current.value
const pass=userPasswordRef.current.value
console.log({userName})
console.log({pass})
userNameRef.current.style.color="red"


}

  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <div>
      <label htmlFor='userName'>UserName</label>
      {/*  2..link userPasswordRef */}
        <input type="text" id ="userName" ref={userNameRef}></input>
        </div>
        <div>
      <label htmlFor='pass'>Password</label>
      {/*  2..link userPasswordRef */}
        <input type="password" id ="pass" ref={userPasswordRef}></input>

        </div>
        <button type='submit'>Register</button>

    </form>

    

    </>
  )
}

export default Userform
