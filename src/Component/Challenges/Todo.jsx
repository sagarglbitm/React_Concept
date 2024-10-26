import  {  useState } from 'react'
const  Todo=()=> {

    const[value,setValue]=useState('')
        
    const [list,setList]=useState([])


    // we add value in list of array by using spread opertaor of array bcz we want previous value also,otherwise it update the prev value 
    // to currnt value and after that setvalue will be empty 
    const addItem=()=>{
        // always use sprad opeertaor when we have setVlaue in array and object oterwise it update the value of prev and currnet 
        // ratehr than adding on next index
        setList([...list,value])
        setValue('')
    }

    const removeItem=(index)=>{

        // when we have only one parameter but without first parameter it not work
        // const updateItem=list.filter((_,i)=>i != index)
        const updateItem=list.filter((itme,i)=>i != index)
        setList(updateItem)

    }

    return (
        <>
        
        <h1>Create a todo app with the following criteria. The user should able to add and remove todo items. Starter code is provided</h1>
       
       <input type='text'  value={value} onChange={(e)=>setValue(e.target.value)} placeholder='enter item'  />
       <button onClick={addItem}>Add</button>
       {
        list.map((item,index)=>(
            <ul key={index}>
                <li>{item}</li>
                <button onClick={()=>removeItem(index)}>remove</button>
            </ul>
        ))
       }
        </>
  
  )
}

export default Todo;
