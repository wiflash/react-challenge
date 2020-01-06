import React from 'react';
import "../styles/Contact.css";

import charles from "../images/charles-rRWiVQzLm7k-unsplash.jpg";
import logo_alta2x from "../images/logo-ALTA-v2@2x.png";

class Contact extends React.Component {
    render() {
        return (
            <div className="container-fluid contact-body">
                <div className="row align-items-center">
                    <div className="col-12 col-md-5">
                        <div className="side-image">
                            <img src={charles} alt=""/>
                        </div>
                        <div className="alterra-side">
                            <img src={logo_alta2x} alt=""/>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-10 col-md-5 contact-form">
                        <h3>Contact Us</h3>
                        <form action="./home.html">
                            <div className="contact__full-name">
                                <label for="full-name">Full Name</label>
                                <span>*</span><br/>
                                <input type="text" id="full-name" name="fullName" placeholder="Alterra" required/>
                            </div>
                            <div className="contact__email">
                                <label for="email">Email Address</label>
                                <span>*</span><br/>
                                <input type="text" id="email" name="email" placeholder="example@alterra.id" required/>
                            </div>
                            <div className="contact__phone">
                                <label for="phone-number">Phone Number</label>
                                <span>*</span><br/>
                                <input type="text" id="phone-number" name="phoneNumber" placeholder="081234567890" required/>
                            </div>
                            <div className="contact__role">
                                <label for="role">Role</label><br/>
                                <select id="role" name="role">
                                    <option value="selected">Selected ...</option>
                                    <option value="indonesian">Indonesian</option>
                                    <option value="author">Author</option>
                                    <option value="writer">Writer</option>
                                </select>
                            </div>
                            <div className="contact__message">
                                <label for="message">Message</label><br/>
                                <textarea id="message" name="message"></textarea>
                            </div>
                            <input id="submit-button" type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;