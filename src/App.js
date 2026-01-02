
import './App.css';
import Convertor from './Component/Convertor.js';
import Navbar from './Component/Navbar.js';
import React, { useState } from 'react';
function App() {
  const [mode,setMode]=useState('dark'); //whether dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
  }
  return (
   <>

 <Navbar Brand="Text Convertor" Home="Home" About="About Us" mode={mode} toggleMode={toggleMode} />
 <Convertor title="Case convertor" mode={mode} />


   </>
  );
}

export default App;
