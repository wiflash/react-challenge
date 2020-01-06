import React from 'react';
import "../components/header";
import Header from "../components/header";
import Footer from "../components/footer"
import "../styles/About.css";

import anne from "../images/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"

class About extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="about-me">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="container">
                                <div className="about-title">
                                    <h1>ABOUT ME</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container about-me-content">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <p>Versatile Front-end Developer with 3+ years of experience designing, developing, and managing complex e-commerce sites and internal frameworks. Specializes in AngularJS and responsive design.</p>
                                <div className="about-me__education">
                                    <h4>Education</h4>
                                    <div className="about-me__education-list">
                                        <ul>
                                            <li>
                                                <span>2014</span><br/>
                                                <span>DIPLOMA</span>
                                                <p>Computer Engineering - University of Chicago 2018</p>
                                            </li>
                                            <li>
                                                <span>2018</span><br/>
                                                <span>BACHELOR DEGREE</span>
                                                <p>BS Computer Engineering - University of Chicago 2018</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="about-me__skill">
                                        <h5>Here’s few technologies I’ve been working with recently :</h5>
                                        <div className="table-responsive">
                                            <table className="table-bordered" style={{width: "87%"}}>
                                                <tbody>
                                                    <tr>
                                                        <td>HTML & CSS</td>
                                                        <td>Serverless</td>
                                                        <td>Scrum</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Programming</td>
                                                        <td>Restful API</td>
                                                        <td>Test-Driven Dev</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Database</td>
                                                        <td>Javascript</td>
                                                        <td>Software Testing</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Git & Github</td>
                                                        <td>Single Page App</td>
                                                        <td>UX/UI Designer</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="profile">
                                    <img src={anne} width="250px" height="250px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default About;