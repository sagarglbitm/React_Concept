import React,{useState,useEffect} from 'react'

const Prepopulate = () => {

    const [data,setData]=useState({
        title:"",
        completed:"",
        desc:''
    })


    // firstly fetch data and by using setdata , setthe fields which is fetched form api
    useEffect(()=>{

        // whenerver fetch api or post , make function in which call api , not to directly use in useEffect
        const fetchDta=async()=>{

        const res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
         const data=await res.json();

        setData({
            title:data.title,
            completed:data.completed

        })
    }
    fetchDta();

    },[])
    console.log(data.title,data.completed)

    const handleChange = (e) => {
    
        setData(...data,[e.target.name]=e.target.value)
      };
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
    }


  return (
    <div>Prepopulate

        <form onSubmit={handleSubmit}>
            <input type='text' value={data.title} onChange={handleChange} placeholder='title'/>
            <input type='text' value={data.desc} onChange={handleChange} placeholder='description'/>

            <select name="completed" value={data.completed} onChange={handleChange}>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Prepopulate