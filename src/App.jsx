
import './App.css'
import Nav from './Nav'
import  '../public/player.json'
import { Suspense, useState } from 'react'
import Availableplayer from './Availableplayer'
import Selectedplayer from './Selectedplayer'

function App() {
  const url=async()=>{
    const data=await fetch('/player.json');
    const res=data.json();
    return res;
  }
  const detail=url();
  const [toggle,setToggle]=useState(true)
  return (
    <>
        <Nav></Nav>
        <div className='flex justify-between'><h1>Available player</h1>
        <div><button className={`border-1 border-gray-400  ${toggle===true?"bg-yellow-300":""}`} onClick={()=>setToggle(true)}>Available player </button>
        <button className={`border-1 border-gray-400 ${toggle===false?"bg-yellow-300":""}`}onClick={()=>setToggle(false)}>Selected Player</button>
        </div>
        </div>

        {
          toggle===true? <Suspense >
        <Availableplayer detail={detail}></Availableplayer>
       </Suspense>:<Selectedplayer></Selectedplayer>
        }
       
       
      </>
  )
}

export default App
