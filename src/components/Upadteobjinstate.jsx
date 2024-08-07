import React,{useState} from 'react';

function Upadteobjinstate() {
    const [productdetail,setProductdetail]=useState({
        productname:"machine",
        productprice:"10000",
        productcolor:"red"

    });
    function updateColor()
    {
        setProductdetail(
            prevstate=>
            {
                return {...prevstate,productname:"computer"}//...prevstate this one copy the previous state
            }
        )
    }
  return (
    <div>
     <div>{ productdetail.productname}</div>
     <div>{ productdetail.productprice}</div>
     <div>{ productdetail.productcolor}</div>
     <button onClick={updateColor}>Update</button>
    </div>
  );
}

export default Upadteobjinstate;
