import React, { useState } from "react";
import './navbar.css';
const Navbar =()=>{

  const [name, setName] = useState('Diamond')

  return <div className="navbar">
    {name} Navbar

    <button onClick={()=>setName('Chris')}>Change Name</button>
  </div>
}

export default Navbar;