import { useState } from "react";
// import "./App.css";

function App() {

  const [color, setcolor] = useState ('green')
  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        <button 
        onClick={()=>setcolor('red')}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{background: 'red'}}
         >Red</button>
        <button 
        onClick={()=>setcolor('Green')}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{background: 'Green'}}
         >Green</button>
        <button 
        onClick={()=>setcolor('black')}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{background: 'black'}}
         >black</button>
        <button 
        onClick={()=>setcolor('purple')}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{background: 'purple'}}
         >purple</button>
        <button 
        onClick={()=>setcolor('orange')}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{background: 'orange'}}
         >orange</button>

        </div>

        </div>
      </div>
      
    </>
  );
}

export default App;

