import React,{useState,useEffect} from 'react';

function Useeffreact() {
    const [count,setCount]=useState(0);
useEffect(()=>
{
console.log("screen updated");
chkcount();
},[count])

function  chkcount() {
    if(count>=5)
    {
        setCount(1);
    }
    
}

  return (
    <div>
     {count}
     <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  );
}

export default Useeffreact;
