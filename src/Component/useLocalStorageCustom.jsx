import React, { useEffect, useState } from 'react'

function useLocalStorageCustom(key,initValue) {

    const [name, setName] = useState(
        localStorage.getItem(key) ?
            localStorage.getItem(key) : initValue
    )

    useEffect(()=>{
        localStorage.setItem(key,name)
    },[name,key])
    return [name,setName]
}

export default useLocalStorageCustom
