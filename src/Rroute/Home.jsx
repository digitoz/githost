import React from 'react';
import {useParams} from "react-router-dom";

function Home() {
    const {id}=useParams();
  return (
    <div>
      Home{id}
    </div>
  );
}

export default Home;
