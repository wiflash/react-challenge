import React from 'react';
import "../styles/header.css"
import logo from "../images/logo-ALTA.png"

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-3">
                            <a href="#" className="header-logo">
                                <img src={logo} alt="logo-ALTA"/>
                            </a>
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="header-nav">
                                <ul className="header-nav__list list-unstyled">
                                    <li>
                                        <a id="current" href="#">HOME</a>
                                    </li>
                                    <li>
                                        <a href="#">ABOUT</a>
                                    </li>
                                    <li>
                                        <a href="#">EXPERIENCE</a>
                                    </li>
                                    <li>
                                        <a href="#">CONTACT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;