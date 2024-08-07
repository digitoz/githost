import React from 'react';

function Rlist() {
    const collist=[
        {name:"chennai",mobile:"89798787"},
        {name:"chennai1",mobile:"668878"}
    ]
  return (
    <div>
     <ul>{
        collist.map((item,index)=>
        <li>{index}placename{item.name}and mobile{item.mobile}</li>
        )
    }
     </ul>
    </div>
  );
}

export default Rlist;
