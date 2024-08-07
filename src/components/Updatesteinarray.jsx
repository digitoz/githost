import React,{useState} from 'react';

function Updatesteinarray() {
    const [namelist,setNamelist]=useState([]);
    const [count,setCount]=useState(1);

    function additem(){
        // setNamelist([...namelist,"name"+count]);
        // setCount(count+1);
        const itemname="name"+count;
        setNamelist(prevnamelst=>{
            return [...prevnamelst,itemname];
        })
        setCount(prevnamelst=>{
            return prevnamelst+1;
        })

    }

  return (
    <div>
        <h3>namelist</h3>
        <button onClick={additem}>Additem</button>
  <ul>
    {namelist.map((el,index)=> <li>{index}{el}</li>)}
   
    </ul>
    </div>
  );
}

export default Updatesteinarray;
