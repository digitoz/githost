import React,{useState} from 'react';

function Rstate() {
const [color,setColor]=useState("Blue");
  return (
    <div>
    Current color is{color} 
    <button onClick={()=>setColor("red")}>Change color</button>
    </div>
  );
}

export default Rstate;
