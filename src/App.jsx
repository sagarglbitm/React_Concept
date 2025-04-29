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
import useFetch from './Component/useFetch.jsx'
import PostApi from './Component/PostApi.jsx'
import GetApi from './Component/GetApi.jsx'
import Suspense from './Component/Suspensed.jsx'
import Suspensed from './Component/Suspensed.jsx'
import FormApi from './Component/FormApi.jsx'
import User from './Component/Error_Boundary/User.jsx'
import ErrorBoundary from './Component/Error_Boundary/ErrorBoundary.jsx'
import MaxCount from './Component/Challenges/MaxCount.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ByLink from './Component/Routing/ByLink.jsx'
import HomeLink from './Component/Routing/HomeLink.jsx'
import ProfileLink from './Component/Routing/ProfileLink.jsx'


import ByNav from './Component/Routing/ByNav.jsx'
import AboutNavigation from './Component/Routing/AboutNav.jsx'
import SettingNav from './Component/Routing/SettingNav.jsx'
import Prepopulate from './Component/Prepopulate.jsx'
import HOC from './Component/HOC.jsx'
import Todo from './Component/Challenges/Todo.jsx'
import Timer from './Component/Challenges/Timer.jsx'
import ProgressBar from './Component/Challenges/ProgressBar.jsx'
import Debouncing from './Component/Debouncing.jsx'
import Searching from './Component/Searching.jsx'
import Throttling from './Component/Throttling.jsx'
import React_Fiber from './Component/React_Fiber.jsx'
import Callback_Method from './Component/child_to_parent/Callback_Method.jsx'
import ContextAPI_Method from './Component/child_to_parent/ContextAPI_Method.jsx'
import Pagination from './Component/Pagination/ClientSidePagination.jsx'
import ClientSidePagination from './Component/Pagination/ClientSidePagination.jsx'
import ServerSidePagination from './Component/Pagination/ServerSidePagination.jsx'
import SyntheticEventExample from './Component/SyntheticEventExample.jsx'
import PureComponent from './Component/PureComponent.jsx'
import LiftingStateUp from './Component/LiftingStateUp.jsx'
import CounterWithReducer from './Component/CounterWithReducer.jsx'

import {useDispatch,useSelector}from 'react-redux'
import { Decrement, Increment } from './Component/Redux/action.js'
import { Update } from './Component/Update.jsx'
import LayoutEffect from './Component/LayoutEffect.jsx'

function App() {
  const [count, setCount] = useState(0)

  // we use custom hooks
  const users= useFetch('https://jsonplaceholder.typicode.com/todos/')

  const value = useSelector((state) => state.count); // get count from state
  console.log(value)
  const dispatch = useDispatch();

  return (
    <>

    {/* use state */}
    {/* <State /> */}

    {/* use Effect */}
      {/* <Effect/> */}

    {/* use Ref */}
    {/* <Ref /> */}

    {/* useMemo */}

    {/* <Memo /> */}

    {/* use callback */}
    {/* <Callback /> */}


    {/* uselayouteffect */}
    {/* <LayoutEffect/> */}


    {/* useReducer */}
    {/* <CounterWithReducer/> */}

    {/* use context */}
   {/* <Profile_context/>
   <Footer_context/> */}

   {/* usecustomehooks */}

     <ul>
                {users.map(user => (
                    <li key={user.userId}>{user.id}-{user.title} </li>
                ))}
            </ul>
   

  {/* <input type='text' placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
  <h2>hello,{name}</h2> */}

   
     {/*  LiftingStateUp */}
     {/* <LiftingStateUp/> */}
     
     
     

  {/* post api using fetch and axios */}
  {/* <PostApi/> */}

  {/* getapi by using fetch and axios */}
  {/* <GetApi/> */}

  {/* updaate by using fetch and axios */}
  
 {/* <Update/> */}

  {/* <Suspensed/> */}

    {/* <FormApi /> */}


    {/* error boundary */}
    {/* <ErrorBoundary>
    <User name='sagar'/>
    </ErrorBoundary>
    <ErrorBoundary>
    <User name='error'/>
    </ErrorBoundary> */}


    {/* Routing */}

     {/* <ByLink/>
    <Routes>
      <Route path='/homeLink' element={<HomeLink/>}/>
      <Route path='/profileLink' element={<ProfileLink/>}/>
    </Routes>
<br></br> */}

    {/* <ByNav/>
    <Routes>
      <Route path='/aboutNav' element={<AboutNavigation/>}/>
      <Route path='/settingNav' element={<SettingNav/>}/>

    </Routes> */}


    {/* prepouplatedata */}
    {/* <Prepopulate/> */}
  


    {/* challenges */}
    {/* <MaxCount /> */}
    {/* <Todo/> */}
    {/* <Timer/> */}
    {/* <ProgressBar/> */}
   
    {/* High order componeent */}
   {/* <HOC/> */}
    
    {/* <Searching/> */}


    {/* <Debouncing/> */}

    {/* <Throttling/> */}
    {/* <React_Fiber/> */}


    {/* ways to pass data form child to parent */}
    {/* <Callback_Method/> */}
    {/* <ContextAPI_Method/> */}


    {/* always prefer serverside pagination */}
    {/* <ClientSidePagination/> */}
    {/* <ServerSidePagination/> */}

    {/* synthentic evnet */}
    {/* <SyntheticEventExample/> */}


    {/* purecomponnet */}
    {/* <PureComponent/> */}

    {/* redux */}

  
    {/* <h2>Counter: {value}</h2>
    <button onClick={()=>dispatch(Increment())}>inc</button>
    <button onClick={()=>dispatch(Decrement())}>dec</button>

    */}
      
    </>
  )
}

export default App

