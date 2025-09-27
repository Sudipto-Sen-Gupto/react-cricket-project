import React from 'react';
import icon from './assets/logo.png'
import currency from './assets/Currency (1).png'
const Nav = ({balance}) => {
    return (
        <div className='max-w-[1200px] mx-auto p-4'>
            <div class="navbar bg-base-100  shadow-sm">
  <div class="flex-1">
    <h1 class="btn btn-ghost text-xl"><img src={icon} alt="" className='p-4' /></h1>
  </div>
  <div class="flex-none">
    <ul className='flex gap-10 items-center'>
      <li><a href="">Home </a></li>
      <li><a href="">Fixture</a></li>
      <li><a href="">Teams</a></li>
      <li><a href="">Schedule</a></li>
      <button class="btn p-4"><span>{balance}</span><span>coin</span><span><img src={currency} alt="" /></span></button>
      </ul>
  </div>
</div>  

         
        
        </div>
    );
};

export default Nav;  