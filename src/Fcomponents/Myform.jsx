import React,{useState} from 'react';

function Myform() {
    const [name,setName]=useState("");
// console.log(name);
function frmSub(e){
    e.preventDefault();
    console.log("form submitted",name);
}
  return (
    <div>
     <form onSubmit={frmSub}>
        <label>Enter Your Name:<input type="text" onChange={(e)=>{setName(e.target.value)}}/></label>
       <input type="Submit" value="Submit"/>
        </form>
    </div>
  );
}

export default Myform;
