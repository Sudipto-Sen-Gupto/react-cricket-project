
import './App.css'
import Nav from './Nav'
// import  '../public/player.json'
import { Suspense, useState } from 'react'
import Availableplayer from './Availableplayer'
import Selectedplayer from './Selectedplayer'
import Toggle from './Toggle'

function App() {
  const url=async()=>{
    const data=await fetch('/player.json');
    const res=data.json();
    return res;
  }
  const detail=url();
   const [toggle,setToggle]=useState(true);
   const [balance,setBalance]=useState(60000000);
   const [purchase,setPurchase]=useState([]);
  return (     
    <>
        <Nav balance={balance}></Nav>
        <Toggle toggle={toggle} setToggle={setToggle}></Toggle>

        {
          toggle===true? <Suspense fallback={<span class="loading loading-bars loading-xl "></span>}>
        <Availableplayer detail={detail}setBalance={setBalance} balance={balance} purchase={purchase} setPurchase={setPurchase}></Availableplayer>
       </Suspense>:<Selectedplayer purchase={purchase} setPurchase={setPurchase}></Selectedplayer>
        }
       
       
      </>
  )
}

export default App
