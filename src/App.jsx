
import './App.css'
import Nav from './Nav'
// import  '../public/player.json'
import { Suspense, useState } from 'react'
import Availableplayer from './Availableplayer'
import Selectedplayer from './Selectedplayer'
import Toggle from './Toggle'
 import { ToastContainer } from 'react-toastify';


const url=async()=>{
    const data=await fetch('/player.json');
    const res=data.json();
    return res;
  }
const detail=url();
function App() {
  
  
   const [toggle,setToggle]=useState(true);
   const [balance,setBalance]=useState(60000000);
   const [purchase,setPurchase]=useState([]);
   const  [title,setTitle]=useState(false)
   const removeData=(p)=>{
         const remove=purchase.filter(py=>py.player.name!==p.player.name);
        setPurchase(remove);
        setBalance(balance+parseInt(p.player.price.split("$").join("").split(",").join("")))
   }
  return (     
    <>
        <Nav balance={balance}></Nav>
        <Toggle toggle={toggle} setToggle={setToggle} title={title} setTitle={setTitle} purchase={purchase}></Toggle>

        {
          toggle===true? <Suspense fallback={<span class="loading loading-bars loading-xl "></span>}>
        <Availableplayer detail={detail}setBalance={setBalance} balance={balance} purchase={purchase} setPurchase={setPurchase}></Availableplayer>
       </Suspense>:<Selectedplayer  purchase={purchase} setPurchase={setPurchase} removeData={removeData}></Selectedplayer>
        }
       
        <ToastContainer />
      </>
  )
}

export default App
