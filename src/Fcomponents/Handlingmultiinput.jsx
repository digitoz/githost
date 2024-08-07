import React,{useState} from 'react';

function Handlingmultiinput() {
    // const [name,setName]=useState("");
    // const [age,setAge]=useState("");
    // const [email,setEmail]=useState("");

    const [inpval,setInpval]=useState({
      name:"",
      age:"",
      email:""
    });

    function frmSub(e){
        e.preventDefault();
        console.log("form submitted",inpval);
        setInpval(
          prevstate=>
          {
              return {...prevstate,inpval}//...prevstate this one copy the previous state
          }
      )
       
    }

  return (
    <div>
      <form onSubmit={frmSub}>
        <label>Enter Your Name:<input type="text" onChange={(e)=>{setInpval((presta)=>{return {...presta,name:e.target.value} })}}/></label>
        <label>Enter Your age:<input type="text" onChange={(e)=>{setInpval((presta)=>{return {...presta,age:e.target.value}})}}/></label>
        <label>Enter Your Email:<input type="text" onChange={(e)=>{setInpval((presta)=>{return {...presta,email:e.target.value}})}}/></label>
       <input type="Submit" value="Submit"/>
        </form>
    </div>
  );
}

export default Handlingmultiinput;
