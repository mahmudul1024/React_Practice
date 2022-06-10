import React from 'react';

const users=[
    {
        
   fullName : "Mahmdudul Hasan",
   age  : "29",
   phones :[
    {"home" : "017630169377"},
    {office :"0201837"}
   ],
   
        
    fullName : "Mahmdudul Hasan",
    age  : "29",
    phones :[
     {"home" : "017630169377"},
     {office :"0201837"}
    ]


}]
    
   
export default function App()
{
    return <>

{users.map((user,index)=>{
    {/* use return when second bracket is used */}
    return <div key={index}>
       <p> {user.fullName}</p>
       <p>{user.age}</p>
       {user.phones.map((phone,index)=>
       {
        return <div key={index}>
            <p>{phone.home}</p>
            <p>{phone.office}</p>

        </div>
       })}
    </div>
})}
     
  
    </>
}

