import React from 'react';
import "../styles/footer.css";

import logo_altav2 from "../images/logo-ALTA-v2.png";
import facebook from "../images/ic_fb.png";
import twitter from "../images/ic-twitter.png";
import instagram from "../images/ic-instagram.png";
import linkedin from "../images/ic-linkedin.png";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-section">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-4">
                                <a href="" className="footer-logo">
                                    <img src={logo_altav2} alt="logo-ALTA" width="110px"/>
                                </a>
                            </div>
                            <div className="col-4">
                                <div className="social-media">
                                    <p>Social Media</p>
                                    <ul className="social-media__list list-unstyled">
                                        <li>
                                            <a href="https://www.facebook.com/">
                                                <img src={facebook} alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/">
                                                <img src={twitter} alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                                <img src={instagram} alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/">
                                                <img src={linkedin} alt=""/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4">
                                <span className="copyright">Copyright © 2019 Alterra</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;