

const Toggle = ({toggle,setToggle,title,setTitle,purchase}) => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex justify-between font-bold my-5'><h1 className='text-2xl'>{title===true?`Selected player ${purchase.length}/6`:"Available Player"}</h1>
        <div><button className={`border-1 border-gray-400 p-3 rounded-xl border-r-0 ${toggle===true?"bg-yellow-300":""}`} onClick={()=>{setToggle(true)
            setTitle(false)
        }}>Available player </button>
        <button className={`border-1 border-gray-400 p-3 rounded-xl border-l-0 ${toggle===false?"bg-yellow-300":""}`}onClick={()=>{setToggle(false)
            setTitle(true)
        }}>Selected Player <span>{`${purchase.length}`}</span></button>
        </div>
        </div>

        </div>
    );
};

export default Toggle;