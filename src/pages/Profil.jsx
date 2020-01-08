import React from "react";
import { Redirect } from "react-router-dom";
import {Container, Form, Row, Col, ListGroup} from 'react-bootstrap';
import NavigationBar from "../components/navbar";


const Profil = props => {
    const email = localStorage.getItem("email");
    const fullname = localStorage.getItem("fullname");
    const loginKah = JSON.parse(localStorage.getItem("loginKah"));
    if (loginKah === null) {
        return <Redirect to={{ pathname: "/masuk" }} />;
    } else {
        return (
            <React.Fragment>
                <NavigationBar {...props} />
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row>
                            <ListGroup className="mx-auto">
                                <ListGroup.Item>
                                    <Form.Group as={Row} className="mb-0">
                                        <Form.Label column sm="4">Email</Form.Label>
                                        <Col sm="8">
                                            <Form.Control plaintext readOnly defaultValue={": "+email} />
                                        </Col>
                                    </Form.Group>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Form.Group as={Row} className="mb-0">
                                        <Form.Label column sm="4">Full name</Form.Label>
                                        <Col sm="8">
                                            <Form.Control plaintext readOnly defaultValue={": "+fullname} />
                                        </Col>
                                    </Form.Group>
                                </ListGroup.Item>
                            </ListGroup>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }
};


export default Profil;