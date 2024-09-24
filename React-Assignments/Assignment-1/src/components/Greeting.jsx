import React from "react";

function Greeting({ name }) { 

  console.log(name); 
  return (
    <div>
      <p>Hello {name}</p> 
    </div>
  );
}

export default Greeting;