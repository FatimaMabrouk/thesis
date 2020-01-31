import React, { Component } from 'react';
import './FixedNavbar.css'
import {Link} from 'react-router-dom'

export default class FixedNavbar extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       toggleStateA: false
    //     };
    //   }
    
    //   handleToggleClickA = () => {
    //     this.setState({
    //       toggleStateA: !this.state.toggleStateA
    //     });
    //   };
      
    render(){
        return(
            <div className="Navar">
                <nav className="navbar navbar-expand-lg navbar-ligth"  style={{height:"60px"}}>
                    <h5 className="my-0 mr-md-auto font-weight-normal">H A F 5</h5>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="#"></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Save</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-toggle="tooltip" data-placement="bottom" title="see what your site looks like before you publish it" href="#">Preview</a>
                        </li>
                        <li className="nav-item"id="publish">
                        <a className="nav-link" data-toggle="tooltip" data-placement="bottom" title="click publish to go with your site live">Publish</a>
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
