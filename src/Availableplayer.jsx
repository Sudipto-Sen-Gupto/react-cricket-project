import React, { use } from 'react';

import Subplayer from './Subplayer';
const Availableplayer = ({detail}) => {
       const players=use(detail)
       
    return (
        <div class=" md:grid grid-cols-3 gap-10 p-4">
           {
            players.map(player=><Subplayer player={player}></Subplayer>
)
           }
        </div>
    );
};

export default Availableplayer;