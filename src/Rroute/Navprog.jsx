import React from 'react';
import { useNavigate } from "react-router-dom";

function Navprog() {
    const navigate=useNavigate();
    function godash()
    {
        navigate("/");
    }
  return (
    <div>
      Navprog<button onClick={godash}>Gonav</button>
    </div>
  );
}

export default Navprog;
