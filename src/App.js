import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{

    setAlert({
      
      msg: message,
      type: type

    }
    )

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  // const removeBodyClasses = () => {

  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  // }

  const toggleMode = (cls) =>{

    // removeBodyClasses();
    // console.log(cls);

    // document.body.classList.add('bg-'+cls);

    if(mode === 'light'){

      setMode('dark');
      document.body.style.backgroundColor = '#15324b';
      showAlert("Dark mode has been enabled", "success");
  
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#0d6efd0a';
      showAlert("Light mode has been enabled", "success");

    } 

  }
  return (
    

    /* {<Router>}*/
    <>
  
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      
      <Alert alert = {alert}/>
      
      <div className="container my-3">

      <TextForm heading="Enter text to analyze" mode = {mode} showAlert = {showAlert}/>

      {/* <Routes>
          <Route exact path="/about" element = {<About />}/>
          
      
          <Route exact path="/" element = {<TextForm heading="Enter text to analyze" mode = {mode} showAlert = {showAlert}/>}/>
          
         
      </Routes> */}
   
      </div>
      
         
      {/* </Router> */}

      </>
    

  );
}

export default App;
