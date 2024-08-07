// Multiple state components

import React,{useState} from 'react';

function MScom() {
    const [product,setProduct]=useState("Machine");
    const [location,setLocation]=useState("Chennai");
    const [pincode,setPincode]=useState("6577656");
    const [address,setAddress]=useState("Perungudi");
  return (
    <div>
    <ul>
        <li>{product}</li>
        <li>{location}</li>
        <li>{pincode}</li>
        <li>{address}</li>
        </ul>  
    </div>
  );
}

export default MScom;
