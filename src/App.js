import Navbar from './components/Navbar.js';
import './App.css';
import { useContext } from 'react';
import  ContextApi from './components/ContextApi.js';
import {Context} from './components/ContextApi.js';
function App() {
  const{count,updatecount} =useContext(Context);
  return (
    <div >
      <Navbar></Navbar>
    
    <p className="flex flex-col justify-center w-screen h-screen items-center">
      <p>Count is:{count}</p>
      <button onClick={updatecount} className=" rounded-[5px] bg-blue-500 my-[15px] h-[40px] px-[5px]">Increase count</button>
      </p>  
    </div>
  );
}

export default App;
