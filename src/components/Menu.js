import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Router</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">TodoApp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/post">Post</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nested">Nested-Post</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/social">Social-Post</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newpost">New-Post</Link>
              </li>
              
              

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
