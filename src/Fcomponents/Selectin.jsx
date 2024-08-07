import React,{useState} from 'react';

function Selectin() {
     // const [name,setName]=useState("");
    // const [age,setAge]=useState("");
    // const [email,setEmail]=useState("");

    const [inpval,setInpval]=useState({
        name:"",
        age:"",
        email:"@gmail.com",
        about:""
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
          <label>Select Country:<select name="country" onChange={valchange} value={inpval.country}>
          <option value="">Select</option>
            <option value="Cntry1">Cntry1</option>
            <option value="Cntry2" selected>Cntry2</option>
            <option value="Cntry3">Cntry3</option>
            <option value="Cntry4">Cntry4</option>
            
            </select></label>

            <label>About yourself:<textarea type="text" name="about" value={inpval.about} onChange={valchange}/></label>
         <input type="Submit" value="Submit"/>
          </form>
      </div>
    );
}
export default Selectin;
