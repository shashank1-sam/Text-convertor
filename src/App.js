
import './App.css';
import Convertor from './Component/Convertor.js';
import Navbar from './Component/Navbar.js';
import React, { useState } from 'react';
function App() {
  const [mode,setMode]=useState('dark'); //whether dark mode is enabled or not
  const [navColor,setNavColor]=useState('dark');
 
  const removeColorClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }
  const toggleMode=(cls)=>{
    console.log(cls)
    removeColorClasses();
    document.body.classList.add("bg-"+cls);
    setNavColor(cls);
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

 <Navbar Brand="Text Convertor" Home="Home" About="About Us" mode={mode} toggleMode={toggleMode} cls={navColor} />
 <Convertor title="Case convertor" mode={mode} />


   </>
  );
}

export default App;
