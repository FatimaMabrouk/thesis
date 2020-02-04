import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './FixedNavbar.css';

export default class FixedNavbar extends Component{
      
    render(){
        return(
            <div >
                <nav className="navbar navbar-expand-lg navbar-ligth fixed-style" >
                    <Link to="/" ><h5 className="my-0 mr-md-auto font-weight-normal">H A F 5</h5></Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">   
                        <i className="fas fa-bars" style={{color:"black", fontSize:"28px"}}></i>
                    </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link" href="#">Dashboard </Link>
                        </li>
        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>

        )
    }
}
