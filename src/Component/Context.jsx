import React, { createContext } from 'react'


// create context 
export const AppContext=createContext()

// provider funcn

const ConetxtProvider=(props)=>{

    const phone="23445677"
    const name="sagar"

    return(

        // for sending one data
        // <AppContext.Provider value={phone}>
        
        // for sending two or more data use {{}} to make an object
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )

}

export default ConetxtProvider;




