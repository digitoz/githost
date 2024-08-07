import React,{useState} from 'react';

function Setinitalfrmval() {
    // const [name,setName]=useState("");
    // const [age,setAge]=useState("");
    // const [email,setEmail]=useState("");

    const [inpval,setInpval]=useState({
      name:"",
      age:"",
      email:"@gmail.com"
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
    function valchange(e){
        const name=e.target.name;
        const value=e.target.value;
        setInpval((prest)=>{return {...prest,[name]:value}})
    }

  return (
    <div>
      <form onSubmit={frmSub}>
        <label>Enter Your Name:<input type="text" name="name" onChange={valchange}/></label>
        <label>Enter Your age:<input type="text" name="age" onChange={valchange}/></label>
        <label>Enter Your Email:<input type="text" name="email" onChange={valchange} value={inpval.email}/></label>
       <input type="Submit" value="Submit"/>
        </form>
    </div>
  );
}

export default Setinitalfrmval;
