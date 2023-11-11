import React,{useContext} from 'react'
import {Context} from './ContextApi.js';

export default function Navbar() {
    const {count,setcount} =useContext(Context);
  return (
    <div >
      <nav className='flex flex-row justify-evenly mx-4 bg-orange-600 h-[50px] items-center '>
        <p>LogoHere</p>
        <p>Count is:{count}</p>
        <button  className="bg-blue-500 w-[60px] h-[30px] px-[3px] rounded-[5px]" onClick={()=>setcount(0)}>Reset</button>
      </nav>
    </div>
  )
}
