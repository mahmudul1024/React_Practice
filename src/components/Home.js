import React,{useState} from 'react'

const Home = () => {

const [toggle,setToggle]=useState(true);

  return (
    <section style={{margin:"1rem", backgroundColor:"pink",
    padding:"1rem" }}>
      {toggle &&(<p >
      Have you ever started to tell a joke only
       to forget the punchline halfway through? 
       While the forgetfulness could be funny on its own,
        no one wants to suffer through the embarrassment of messing up a good joke
      </p>)}
      <section style={{textAlign: "center"}}>
      <button onClick={()=>{setToggle(!toggle)}}>
      {toggle ? "Hide" : "Show"}</button>
      </section>
    </section>
  )
}

export default Home
