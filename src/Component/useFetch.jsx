import React,{useState,useEffect} from 'react'

const useFetch = (url) => {
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchedData=async()=>{
    
          
            const response=await fetch(url)
            const details=await response.json()
            setData(details)
    
    
          
        }
        fetchedData()
    
      },[])
  return data
}

export default useFetch