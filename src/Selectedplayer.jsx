import React from 'react';
import Subselect from './Subselect';
const Selectedplayer = ({purchase,setPurchase,removeData}) => {
    
    return (
             
        <div>
                
         {
               purchase.map(player=> <Subselect player={player}removeData={removeData}></Subselect> )
         }
        </div>
         
            
        
      
    )
};

export default Selectedplayer;