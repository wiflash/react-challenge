import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import NavigationBar from "../components/navbar";
import RequestSideBarBody from "../components/requestSideBar"
import RequestNewsBody from "../components/requestNews";

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row>
                            {/* <Col md="4" className="ml-auto"><SideBarBody /></Col> */}
                            <Col md="4" className="ml-auto"><RequestSideBarBody /></Col>
                            <Col md="7" className="mr-auto"><RequestNewsBody /></Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Home;