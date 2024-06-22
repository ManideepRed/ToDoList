import React from "react"
import delete_icon from './delete.png'
import Checkbox from "./checkbox"


function Todomainbox  ({array,updateArray})  {
    const arraycopy=[...array];
    const delAndModArray=(index)=>{
      arraycopy.splice(index,1);
      updateArray(arraycopy);
    }
    
    const changeBool=(index)=>{
        arraycopy[index].isActive=!(arraycopy[index].isActive);
        updateArray(arraycopy);
        
        }
    
  return (
   
    <div>
     {arraycopy.length===0 ?<p className="mt-[20px] ml-[30px] text-2xl opacity-35">No tasks left</p>:(<ul>{arraycopy.map((item,index) => (
        <li key={index}>
            <div className="flex h-5 mt-[20px] ml-[20px]">

              <div className={`${item.isActive?"bg-green-400":"bg-red-500"} w-[800px] text-xl flex h-8 rounded-full hover:cursor-pointer`} onClick={()=>changeBool(index)}>
                <Checkbox tickOrNot={item.isActive}/> {item.text}
              </div>    

              <img src={delete_icon} alt="none" className="w-6 h-6 mt-[4px] hover:cursor-pointer ml-[8px]" onClick={()=>delAndModArray(index)}/>

            </div>
        </li>))}</ul>)}
    </div>
  
          
  )   
}      

export default Todomainbox

