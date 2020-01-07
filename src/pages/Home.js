import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Navbar from "../components/navbar";
import TopArticle from "../components/topArticle";
import ArticleList from "../components/articleList";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row>
                            <Col md="4"><TopArticle /></Col>
                            <Col md="8"><ArticleList /></Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Home;