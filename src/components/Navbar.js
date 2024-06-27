import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>

    <nav className= "navbar navbar-expand-lg" style = {{backgroundColor: props.mode === "light"? "rgb(13 110 253 / 7%)" :"rgb(0 17 34)", color: props.mode === "light" ? "rgb(0 17 34)" : "white"}}>
    <div className="container-fluid">
        <a className="navbar-brand" href="/npm run deploy" style = {{color: props.mode === "light" ? "rgb(0 17 34)" : "white"}}>{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/" style = {{color: props.mode === "light" ? "rgb(0 17 34)" : "white"}}>Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/" style = {{color: props.mode === "light" ? "rgb(0 17 34)" : "white"}}>About</a>
            </li>
        
        </ul>
      
      {/* <div className="d-flex">
        <div className="bg-primary rounded mx-2"  onClick={() => props.toggleMode('primary')} style={{height:"30px", width: "30px", cursor: 'pointer'}}/>
        <div className="bg-danger rounded mx-2"  onClick={() => props.toggleMode('danger')} style={{height:"30px", width: "30px", cursor: 'pointer'}}/>
        <div className="bg-success rounded mx-2"  onClick={() => props.toggleMode('success')} style={{height:"30px", width: "30px", cursor: 'pointer'}}/>
        <div className="bg-warning rounded mx-2"  onClick={() => props.toggleMode('warning')} style={{height:"30px", width: "30px", cursor: 'pointer'}}/>   

      </div> */}

        <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>

            <input className="form-check-input mx-2" type="checkbox" onClick={() => props.toggleMode(null)} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Toggle Mode</label>


        </div>





        </div>
  </div>
</nav>
    </div>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Default Title"
}