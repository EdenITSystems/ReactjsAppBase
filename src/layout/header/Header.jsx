import React from "react";
import {Link} from "react-router-dom";


export default function Header() {


    return (
        <nav className="navbar navbar-expand-md navbar-dark mb-4" style={{ backgroundColor: '#214C9C'}}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Reactjs App Base</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link to="/others" className="nav-link active" aria-current="page" >Page 1</Link>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link to="/others1" className="nav-link">Page 2</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}
