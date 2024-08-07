import React from 'react';
import Comchi from './Comchi';

function Compar() {
    const isActive=false;
    // const addedprop="Hello"
     const propcol={city:"chennai",pincode:"65757"}
   // const propcol={}
  return (
    <div>
      Compar{
        propcol.city!==undefined && propcol.pincode!==undefined?
      <Comchi datacol={propcol}/>:null
    }

    <h3>{isActive?<span>Loggedin</span>:<span>loggedout</span>}</h3>
    </div>
  );
}

export default Compar;
