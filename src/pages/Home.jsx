import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import NavigationBar from "../components/navbar";
import SideBar from "../components/renderSideBar";
import TopNews from "../components/topNews";

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row>
                            <Col md="4" className="ml-auto"><SideBar /></Col>
                            <Col md="7" className="mr-auto"><TopNews /></Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Home;