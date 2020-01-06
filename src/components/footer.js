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
            <footer class="footer-section">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-4">
                            <a href="" class="footer-logo">
                                <img src={logo_altav2} alt="logo-ALTA" width="110px"/>
                            </a>
                        </div>
                        <div class="col-4">
                            <div class="social-media">
                                <p>Social Media</p>
                                <ul class="social-media__list list-unstyled">
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
                        <div class="col-4">
                            <span class="copyright">Copyright © 2019 Alterra</span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;