import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State from './Component/State.jsx'
import Effect from './Component/Effect.jsx'
import Ref from './Component/Ref.jsx'
import Memo from './Component/Memo.jsx'
import Callback from './Component/Callback.jsx'
import Context from './Component/Context.jsx'
import Profile_context from './Component/Profile_context.jsx'
import Footer_context from './Component/Footer_context.jsx'
import useLocalStorageCustom from './Component/useLocalStorageCustom.jsx'
import PostApi from './Component/PostApi.jsx'
import GetApi from './Component/GetApi.jsx'

function App() {
  const [count, setCount] = useState(0)

  // we use custom hooks
   const [name,setName]=useLocalStorageCustom('username','')

  return (
    <>

    {/* use state */}
    {/* <State /> */}

    {/* use Effect */}
      {/* <Effect/> */}

    {/* use Ref */}
    {/* <Ref /> */}

    {/* useMemo */}
    <Memo />

    {/* use callback */}
    {/* <Callback /> */}

    {/* use context */}
   {/* <Profile_context/>
   <Footer_context/> */}

   {/* usecustomehooks */}

  {/* <input type='text' placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
  <h2>hello,{name}</h2> */}


  {/* post api using fetch and axios */}
  {/* <PostApi/> */}

  {/* getapi by using fetch and axios */}
  {/* <GetApi/> */}

    
      
    </>
  )
}

export default App
