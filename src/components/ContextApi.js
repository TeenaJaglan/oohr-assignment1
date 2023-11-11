import { createContext ,useState } from "react";
//step-1:create a context;
export  const Context = createContext();
export default function ContextApi({children}){
 const[count,setcount] =useState(0);
 function updatecount(){setcount(count+1);}
const value ={count,updatecount,setcount};
    //step-2:provoider
    return (<Context.Provider value={value}>{children}</Context.Provider>);
}