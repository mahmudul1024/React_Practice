import React,{useState,useEffect} from 'react'

const useFetch = (url) => {
    const [datas,setDatas]=useState(null)
    const [isLoading,setisLoading]=useState(true)
    const [error,setError]=useState(null)
    
    useEffect(()=>{
   
        setTimeout(() => {
            fetch(url)
    .then((res)=>{
        if(!res.ok){
            throw Error("fetching is not successful")
        }
        else{
            return res.json()
        }
    
    }).then((data)=>{
        setDatas(data)
        setisLoading(false)
        setError(null)
        
    }).catch((error)=>{
        setError(error.message)
        setisLoading(false)
    })
        }, 2000);
    
    },[url])
    return {datas,isLoading,error}
}

export default useFetch
