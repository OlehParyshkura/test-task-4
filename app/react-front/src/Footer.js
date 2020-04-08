import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function Footer() {

  return (
    <Navbar sticky="bottom" className="bgc" variant="light" >
    <Navbar.Brand> <Link className="text-light" to={'/'}>AppCo</Link></Navbar.Brand>
    </Navbar>
  );
}

export default Footer;