import React from 'react';
import vector from './assets/Vector.png';
const Subselect = ({player,removeData}) => {
   
    const handleClick=()=>{
        removeData(player)
    }
    return (
        <div>
            <div className='max-w-[1200px] mx-auto flex justify-between items-center border-2 border-gray-300 rounded-xl p-4'>
           <div className='flex gap-3 items-center'>
              <img src={player.player.image_url} alt=""className='h-[60px] w-[60px] rounded-xl' />
              <div>
                <h1>{player.player.name}</h1>
                <p>{player.player.role}</p>
              </div>
           </div>
           <div onClick={handleClick}>
               <img src={vector} alt="" />
           </div>
        </div>
        </div>
    );
};

export default Subselect;