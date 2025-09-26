import React from 'react';
import img from './assets/Group.png';
import report from './assets/report 1 (1).png'
const Subplayer = ({player}) => {
    return (
        <div className='font-bold'>
            <div class="card bg-base-100 w-96 shadow-lg">
  <figure>
    <img
      src={player.image_url}
      alt="Shoes" class="w-full h-[300px]" />
  </figure>
  <div class="card-body">
    <h2 class="card-title"><img src={img} alt="" />{player.name}</h2>
  </div>
  <div class="flex justify-between p-5 items-center border-b-[1px]">
   <div class="flex items-center"><img src={report} alt="" class="h-[20px] w-[20px] " /> <h2>{player.country}</h2> </div>
   <button class="btn">{player.role}</button>
  </div>
  <div class="p-4">
    <h1>Rating:{player.rating}</h1>
    <div class="flex justify-between my-2">
      <h2>Batting Style</h2>
      <h2>{player.batting_style}</h2>
    </div>
    <div class="flex justify-between my-2">
      <h1>price:{player.price}</h1>
      <button class="btn">Choose Player</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Subplayer;