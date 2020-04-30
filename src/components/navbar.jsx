import React, { Component } from 'react';   

const NavBar= ({totalCounters}) =>{
//console.log('navbar- rendered');

    return ( 
        <nav className ="navbar navbar-light bg-Light">
            <a className="navbar-brand" href="#">
                Total Items <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>

     );
};

export default NavBar;