import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/Experience.css";

class Experience extends React.Component {
    render() {
        return (
            <div className="top-separator">
                <Header />
                <div className="experience-title">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="container">
                                <div className="about-title">
                                    <h1>EXPERIENCE</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <ul className="exp-ul">
                                <li className="exp"><div className="shadow p-3 mb-5 bg-white rounded grow">
                                    <section className="section-exp"> 
                                        <h3>FULL STACK ENGINEER-ALTERRA ACADEMY</h3>
                                        <h4>May,2019-Present</h4>
                                    </section>
                                    <section className="section-exp"> 
                                        <p>- Write modern, performant,maintainable code for diverse array of client and internal project</p>
                                        <p>- Work with a variety of different languages,platform, platforms, frameworks, and content management systems such
                                            as JavaScript, Typescript, Gatsby, React, Craft, Wordpress, Prismic, Netliyfy. </p>
                                    </section>
                                </div></li>
                                <li className="exp"><div className="shadow p-3 mb-5 bg-white rounded">
                                    <section className="section-exp"> 
                                        <h3>FRONTEND ENGINEER-APPLE</h3>
                                        <h4>May,2018 - May,2019</h4>
                                    </section>
                                    <section className="section-exp"> 
                                        <p>Develop and maintained code for in-house and client websites primarly using HTML,CSS, Saas, Javascript.</p>
                                    </section>
                                </div></li>
                                <li className="exp"><div className="shadow p-3 mb-5 bg-white rounded">
                                    <section className="section-exp"> 
                                        <h3>UI/UX DESIGN-SCOUT</h3>
                                        <h4>January, 2018 - April, 2018</h4>
                                    </section>
                                    <section className="section-exp"> 
                                        <p>- Developed and shipped highly interactive web applications for Apple Music suing Ember.js</p>
                                        <p>- Architected and implemented the front-end apple music's embeddable web player widget, which lets users log in and listen to full song in browser. </p>
                                    </section>
                                </div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Experience;