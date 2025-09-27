import React, { use } from 'react';

import Subplayer from './Subplayer';
const Availableplayer = ({detail,setBalance,balance,purchase,setPurchase}) => {
       const players=use(detail)
       console.log(purchase);
    return (
        <div class=" max-w-[1200px] mx-auto md:grid grid-cols-3 gap-10 p-4">
           {
            players.map(player=><Subplayer player={player} setBalance={setBalance} balance={balance} purchase={purchase} setPurchase={setPurchase}></Subplayer>
)
           }
        </div>
    );
};

export default Availableplayer;