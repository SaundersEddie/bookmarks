import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from './assets/images/logo.jpg';
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';

export default function App() {
  return (
    <div>
      <Router>
        <Container>
          <Navbar className="border-bottom navbar-custom navbar-text" fixed="top" expand="lg" >
            <Navbar.Brand>
              <a href="/">
                <img
                  alt="Bookmarks Logo"
                  src={logo}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />
              </a>
              </Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="me-auto">
                  <Link className='nav-link' to='/'>Home</Link>
                  <Link className="nav-link" to="/register">Register</Link>
                  <Link className="nav-link" to="/login">Login</Link>
                </Nav>
                <About />
              </Navbar.Collapse>
            </Navbar>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
          </Container>
      </Router>
    </div>
  );
}
