import React,{ useState } from 'react';
import './App.css';
import Todobox from './components/todomainbox';
import todoicon from './components/todo_icon.png'


function App() {
  const [inputValue,setInputValue]=useState('');
  
  const handleinputChange=(event)=>{
    setInputValue(event.target.value);}

  const [array,setArray]=useState([]);
  const buttonclick=()=>{
    if (inputValue.trim()!==''){
      setArray([...array,{text:inputValue.trim(),isActive:false}]);
      setInputValue('');
    }
  }
  
  const updateArray=(arrayNew)=>{
    setArray(arrayNew);
  };
  
  
  return (
    <div className=''>
    <div className='flex ml-[20px]'><img src={todoicon} alt='none' className='w-[69px] h-[69px] mt-[6px] mr-[7px]'/> <p className='text-center text-5xl mt-4'>Your To-Dos</p></div>
    <div className='flex mt-9'>
    <input type='text' placeholder='Add Task' value={inputValue} onChange={handleinputChange} className='outline-none bg-gray-100 rounded-full pl-5 h-10 w-[700px] ml-[20px]'/>
    <button className='bg-blue-400 text-white rounded-full w-32 ml-[15px]' onClick={buttonclick}>Add Task</button>
    </div>
    <Todobox array={array} updateArray={updateArray}/>
    <div className='mb-20'></div>
    </div>
  )
   
   
}

export default App;
