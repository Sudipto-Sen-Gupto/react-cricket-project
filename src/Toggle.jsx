import React from 'react';

const Toggle = ({toggle,setToggle}) => {
   
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex justify-between font-bold my-5'><h1>Available player</h1>
        <div><button className={`border-1 border-gray-400  ${toggle===true?"bg-yellow-300":""}`} onClick={()=>setToggle(true)}>Available player </button>
        <button className={`border-1 border-gray-400 ${toggle===false?"bg-yellow-300":""}`}onClick={()=>setToggle(false)}>Selected Player</button>
        </div>
        </div>

        </div>
    );
};

export default Toggle;