import React,{useState} from 'react';

function Useobjinstate() {
    const [productdetail,setProductdetail]=useState({
        productname:"machine",
        productprice:"10000",
        productcolor:"red"

    });
  return (
    <div>
     <div>{ productdetail.productname}</div>
     <div>{ productdetail.productprice}</div>
     <div>{ productdetail.productcolor}</div>
     
    </div>
  );
}

export default Useobjinstate;
