import React from 'react';

function Comchi(props) {
//   const {name}=props;
//   const {color}=props;
const {datacol}=props;
const {city,pincode}=datacol;
  return (
    <div>
        
      Comchi{city}{pincode}
    </div>
  );
}
//1:30:11
//https://www.youtube.com/watch?v=2sVeyo2tYbE
export default Comchi;
