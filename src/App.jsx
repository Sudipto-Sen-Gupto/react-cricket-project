
import './App.css'
import Nav from './Nav'
import  '../public/player.json'
import { Suspense, useState } from 'react'
import Availableplayer from './Availableplayer'
import Selectedplayer from './Selectedplayer'
import Toggle from './Toggle'
function App() {
  const url=async()=>{
    const data=await fetch('./player.json');
    const res=data.json();
    return res;
  }
  const detail=url();
   const [toggle,setToggle]=useState(true)
  return (
    <>
        <Nav></Nav>
        <Toggle toggle={toggle} setToggle={setToggle}></Toggle>

        {
          toggle===true? <Suspense fallback={<span class="loading loading-bars loading-xl "></span>}>
        <Availableplayer detail={detail}></Availableplayer>
       </Suspense>:<Selectedplayer></Selectedplayer>
        }
       
       
      </>
  )
}

export default App
