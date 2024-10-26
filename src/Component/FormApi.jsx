import React, { useState, useContext } from 'react';
import { AppContext } from './Context';
import axios from 'axios';

function FormApi() {

    const[error,setError]=useState(null)
    const[success,setSuccess]=useState(null)
    const [formData, setFormData] = useState({
        name: "",
        desc: "",
        gender: "",
        condition: "",
        date: "",
        vehicle: "",
        document: null


    })

    const handleChangeInput=(event)=>{
        const{name}=event.target

        setFormData((prev)=>{
            // name can be name,desc,gender,vehicle
            return{...prev,[name]:event.target.value}
        })

    }

   
    const handleCheckBox=( event)=>{
       
        const {checked,value}=event.target
        console.log(event.target)
        setFormData((prev)=>{
            return{...prev,condition:checked?value:""}
        })

    }

    // const handleFileInput=(event)=>{

    //     setFormData((prev)=>{
    //         return{...prev, document:event.target.files[0]}
    //     })

    // }


    const handleSubmit = async (event) => {

        event.preventDefault();

        console.log(formData)

        try{
            const {name, desc,gender,condition,date,vehicle,}=formData
            if(!name ||!desc || !gender || !condition || !date || !vehicle){
            return setError("Please all details")
            }
            else{
            const res=await axios.post("https://jsonplaceholder.typicode.com/todos/",formData)
             console.log(res)
            setSuccess(res.data.name)

            setError(null)
            }
        }
        catch(err){
            setError("ERROR",err)

        }

    }



    return (
        <div>

            <form onSubmit={handleSubmit} >

                <input type='text' name='name' value={formData.name} onChange={handleChangeInput} placeholder='NAME' />
                <input type='textarea' name='desc' value={formData.desc} onChange={handleChangeInput} placeholder='DesC' />
                <input type='date' onChange={handleChangeInput} name='date' />
                <input type='radio' name='gender' value='male'  onChange={handleChangeInput}/> <label>MALE</label>
                <input type='radio' name='gender' value='female' onChange={handleChangeInput}/> <label>Female</label>
                <select name='vehicle' value={formData.vehicle} onChange={handleChangeInput} >
                    <option name='car' >car</option>
                    <option name='scooty' >scooty</option>
                    <option name='bike' >bike</option>
                </select>

                <input type='checkbox' name='condition'  value='agree'  onChange={handleCheckBox}  /><label>AGREE</label>
               
                {/* <input type='file' name='document' onChange={handleFileInput} placeholder='file' /> */}


                <button type='submit'>Submit</button>

            </form>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}

        </div>
    )
}

export default FormApi;

