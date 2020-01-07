import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import NavigationBar from "../components/navbar";
import TopArticle from "../components/topArticle";
import News from "./News";

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row>
                            <Col md="4" className="ml-auto"><TopArticle /></Col>
                            <Col md="7" className="mr-auto"><News /></Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Home;