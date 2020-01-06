import React from 'react';
import "../components/header";
import Header from "../components/header"
import "../styles/Home.css"

import anne from "../images/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"

class Home extends React.Component {
    render() {
        return (
            <div className="top-separator">
                <Header />
                <div className="container-fluid home-body">
                    <div className="container">
                        <div class="row align-items-center">
                            <div className="col-md-4" id="anne">
                                <img src={anne}/>
                            </div>
                            <div className="col-md-1" id="separator"></div>
                            <div className="col-md-7">
                                <div id="anne-intro">
                                    <h5>Hi, my name is</h5>
                                    <h1>Anne Sullivan</h1>
                                    <h3>I build things for the web</h3>
                                    <a href="./contact.html">
                                        <input class="home-submit" type="submit" value="Get In Touch"></input>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;