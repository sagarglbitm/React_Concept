import  {  useState } from 'react'

const ProgressBar =()=> {

    const[value,setValue]=useState(5)


    return (
        <>
       <div style={{ width: '100%', backgroundColor: '#e0e0df', borderRadius: '5px' }}>
       <h3>{value}%</h3>
       <div
          style={{ 
            width: `${value}%`,
            height: '30px',
            backgroundColor: '#4caf50',
            borderRadius: '5px',
            textAlign: 'center',
            color: 'white',
          }}
        >

        </div>
        <input type='number' value={value} onChange={(e)=>setValue(Number(e.target.value))}/>
       
       </div>

        </>

    
  )
}

export default ProgressBar;